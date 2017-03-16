import React, { Component, PropTypes } from 'react';
import { ListView, View } from 'react-native';
import ListRow from '../../Shared/ListRow';
import ListSectionHeader from '../../Shared/ListSectionHeader';
import ListFilterHeader from '../../Shared/ListFilterHeader';
import AddButton from '../../Shared/NavBar/AddButton';
import FAMILY_CATEGORIES from './FamilyCategories';
import styles from './styles';

const UNFILTER_NAME = 'All Kin';

export default class KinList extends Component {
    static navigationOptions = {
        title: 'My Kin',
        header: ({ navigate }) => ({
            left: <AddButton onPress={() => navigate('Create')} />,
            backTitle: null
        })
    };

    constructor(props, context) {
        super(props, context);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        });

        // Turns the kin array into an object map keyed by relationship categories
        const categorizedKin = props.screenProps.kin.reduce(
            (acc, kin) => {
                const category = FAMILY_CATEGORIES[kin.relation];
                if (acc[category]) {
                    return Object.assign({}, acc, { [category]: acc[category].concat([kin]) });
                }
                return Object.assign({}, acc, { [category]: [kin] });
            },
            {}
        );

        this.state = {
            kin: categorizedKin,
            dataSource: ds.cloneWithRowsAndSections(categorizedKin || []),
            filterItems: [
                { text: 'All Kin', selected: true },
                { text: 'Immediate' },
                { text: 'Grandparents' },
                { text: 'Cousins' }
            ]
        };
    }

    componentWillReceiveProps(newProps) {
        const categorizedKin = newProps.screenProps.kin.reduce(
            (acc, kin) => {
                const category = FAMILY_CATEGORIES[kin.relation];
                if (acc[category]) {
                    return Object.assign({}, acc, { [category]: acc[category].concat([kin]) });
                }
                return Object.assign({}, acc, { [category]: [kin] });
            },
            {}
        );

        this.setState({
            kin: categorizedKin,
            dataSource: this.state.dataSource.cloneWithRowsAndSections(categorizedKin)
        });
    }

    onFilterPressed(item) {
        const newFilterItems = this.state.filterItems.map(x => ({ text: x.text, selected: false }));
        newFilterItems.find(x => x.text === item).selected = true;
        if (item === UNFILTER_NAME) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(this.state.kin),
                filterItems: newFilterItems
            });
        } else {
            const filteredKin = { [item]: this.state.kin[item] || [] };
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(filteredKin),
                filterItems: newFilterItems
            });
        }
    }

    onDetailPressed(kin) {
        console.log('pressed');
        const { navigate } = this.props.navigation;

        navigate('Detail', kin);
    }

    renderSectionHeader(sectionData, category) {
        return <ListSectionHeader>{category}</ListSectionHeader>;
    }

    renderRow(rowData) {
        return (
            <ListRow
                heading={rowData.name}
                subHeading={`(${rowData.relation})`}
                details={rowData.birthDay.format('MMMM DD')}
                date={rowData.date}
                onPress={() => this.onDetailPressed(rowData)}
                imageUrl={rowData.imageUrl}
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
                    renderSectionHeader={this.renderSectionHeader.bind(this)}
                    enableEmptySections
                />
            </View>
        );
    }
}

KinList.propTypes = {
    screenProps: PropTypes.shape({
        kin: PropTypes.arrayOf(Object).isRequired,
        onDetailPressed: PropTypes.func.isRequired
    }).isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired
    }).isRequired
};
