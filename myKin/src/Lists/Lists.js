import React, { Component, PropTypes } from 'react';
import { StackNavigator } from 'react-navigation';
import AllLists from './AllLists/AllLists';
import ListDetails from './ListDetails';
import CreateList from './CreateList';
import CreateListItem from './CreateListItem';
import KinList from '../Kin/KinList/KinList';

export default class Lists extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            lists: {
                'Shopping List': [],
                'Kin Lists': []
            },
            kin: [],
            createForKin: {}
        };
    }

    componentDidMount() {
        this.props.screenProps.listService.register(lists => {
            this.setState({ lists }, () => {
                this.forceUpdate();
            });
        });
        this.props.screenProps.kinService.register(kin => {
            this.setState({ kin }, () => {
                this.forceUpdate();
            });
        });
    }

    onChooseKinPressed() {
        this.nav.push({ name: 'chooseKin', title: 'Choose a Kin' });
    }

    onKinDetailPressed(rowData) {
        this.nav.pop();
        this.setState({ createForKin: rowData });
    }

    saveNewList(newList) {
        this.props.screenProps.listService
            .createList(newList)
            .then(() => {})
            .catch(err => console.log(err));
    }

    claimItem(itemToClaim) {
        console.log('Claiming', itemToClaim);
        this.props.screenProps.listService.claimItem(itemToClaim.id).then(() => {});
    }

    render() {
        const StackNav = StackNavigator({
            List: {
                screen: AllLists
            },
            Detail: { screen: ListDetails },
            Create: { screen: CreateList },
            ChooseKin: { screen: KinList },
            CreateListItem: { screen: CreateListItem }
        });

        return (
            <StackNav
                screenProps={{
                    lists: this.state.lists,
                    kin: this.state.kin,
                    saveNewList: this.saveNewList.bind(this),
                    onClaimItem: this.claimItem.bind(this)
                }}
            />
        );
    }
}

Lists.propTypes = {
    screenProps: PropTypes.shape({
        listService: PropTypes.shape({
            register: PropTypes.func.isRequired,
            createList: PropTypes.func.isRequired,
            claimItem: PropTypes.func.isRequired
        }).isRequired,
        kinService: PropTypes.shape({
            register: PropTypes.func.isRequired
        }).isRequired
    }).isRequired
};
