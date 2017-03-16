import React, { Component, PropTypes } from 'react';
import { View, ListView, Text, TouchableHighlight } from 'react-native';
import ListFilterHeader from '../../Shared/ListFilterHeader';
import ListRow from '../../Shared/ListRow/ListRow';
import AddButton from '../../Shared/NavBar/AddButton';
import styles from './styles';
import navStyles from '../../Shared/NavBar/style';

export default class AllLists extends Component {
    static navigationOptions = {
        title: 'Lists',
        header: ({ navigate }) => ({
            left: <AddButton onPress={() => navigate('Create', {})} />,
            backTitle: null,
            titleStyle: navStyles.navBarDefault
        })
    };

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

    componentWillReceiveProps() {
        const currentCategory = this.state.filterItems.filter(x => x.selected)[0].text;
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(
                this.props.screenProps.lists[currentCategory]
            )
        });
    }

    onFilterPressed(item) {
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
                    heading={`${list.for.firstName}'s ${list.name}`}
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
                    <TouchableHighlight
                        style={{
                            backgroundColor: 'orange',
                            borderRadius: 5,
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style={{
                                paddingTop: 5,
                                paddingBottom: 5,
                                paddingLeft: 15,
                                paddingRight: 15,
                                color: 'white'
                            }}
                        >
                            Buy
                        </Text>
                    </TouchableHighlight>
                }
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ListFilterHeader
                    items={this.state.filterItems}
                    onPress={this.onFilterPressed.bind(this)}
                />
                <ListView
                    contentInset={{ bottom: 49 }}
                    automaticallyAdjustContentInsets={false}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    enableEmptySections
                />
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
