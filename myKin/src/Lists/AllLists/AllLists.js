import React, { Component, PropTypes } from 'react';
import { View, ListView, Text, TouchableHighlight } from 'react-native';
import ListFilterHeader from '../../Shared/ListFilterHeader';
import ListRow from '../../Shared/ListRow/ListRow';
import AddButton from '../../Shared/NavBar/AddButton';
import styles from './styles';
import navStyles from '../../Shared/NavBar/style';
import globalStyles from '../../styles';

export default class AllLists extends Component {
    static navigationOptions = {
        title: 'Lists',
        header: ({ navigate }) => ({
            left: <AddButton onPress={() => navigate('Create', {})} />,
            backTitle: null,
            titleStyle: navStyles.navDefaultText,
            style: navStyles.navDefaultBg
        })
    };

    /**
     * Class constructor. Creates a new ListView datasource with the lists from props and sets it
     * on state.
     * @param {*} props
     * @param {*} context
     */
    constructor(props, context) {
        super(props, context);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: ds.cloneWithRows(props.screenProps.lists['Shopping List']),
            filterItems: [{ text: 'Shopping List', selected: true }, { text: 'Kin Lists' }]
        };
    }

    /**
     * Gets the currently selected filter category and resets the ListView's datasource to reflect
     * the new props
     * @param {Object} newProps
     */
    componentWillReceiveProps(newProps) {
        const currentCategory = this.state.filterItems.filter(x => x.selected)[0].text;
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(
                newProps.screenProps.lists[currentCategory]
            )
        });
    }

    /**
     * Updates the page's filter headers so that the proper one is selected and updates the
     * ListView's datasource to reflect the filtered items.
     * @param {string} item The filterItem that was selected
     */
    handleFilterPressed(item) {
        const newFilterItems = this.state.filterItems.map(x => ({
            text: x.text,
            selected: x.text === item
        }));
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.props.screenProps.lists[item]),
            filterItems: newFilterItems
        });
    }

    renderRow(list) {
        if (list.items) {
            return (
                <ListRow
                    heading={`${list.for.name}'s ${list.name}`}
                    subHeading={''}
                    details={`${list.items.length} Items`}
                    onPress={() => this.props.navigation.navigate('Detail', list)}
                />
            );
        }

        return (
            <ListRow
                heading={list.name}
                subHeading={''}
                details={''}
                rightButton={
                    <TouchableHighlight style={globalStyles.orangeButton}>
                        <Text style={styles.buyButton}>
                            Buy
                        </Text>
                    </TouchableHighlight>
                }
            />
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ListFilterHeader
                    items={this.state.filterItems}
                    onPress={this.handleFilterPressed.bind(this)}
                />
                <View style={styles.container}>
                    <ListView
                        contentInset={{ bottom: 49 }}
                        automaticallyAdjustContentInsets={false}
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow.bind(this)}
                        enableEmptySections
                    />
                </View>
            </View>
        );
    }
}

AllLists.propTypes = {
    screenProps: PropTypes.shape({
        lists: PropTypes.shape({
            'Shopping List': PropTypes.array,
            'Kin Lists': PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number,
                    owner: PropTypes.object,
                    for: PropTypes.object,
                    name: PropTypes.string.isRequired,
                    items: PropTypes.array
                })
            )
        }).isRequired
    }).isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired
    }).isRequired
};
