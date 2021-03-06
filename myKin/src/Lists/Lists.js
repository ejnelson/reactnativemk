import React, { Component, PropTypes } from 'react';
import { StackNavigator } from 'react-navigation';
import AllLists from './AllLists/AllLists';
import ListDetails from './ListDetails';
import CreateList from './CreateList';
import CreateListItem from './CreateListItem';
import KinList from '../Kin/KinList';

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
        console.log('Mounting lists');
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

    saveNewList(newList) {
        this.props.screenProps.listService
            .createList(newList)
            .then(() => {})
            .catch(err => console.log(err));
    }

    claimItem(itemToClaim) {
        this.props.screenProps.listService.claimItem(itemToClaim.id).then(() => {});
    }

    unclaimItem(itemToRelease) {
        this.props.screenProps.listService.unclaimItem(itemToRelease.id).then(() => {});
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
                    onClaimItem: this.claimItem.bind(this),
                    handleUnclaimItem: this.unclaimItem.bind(this)
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
            claimItem: PropTypes.func.isRequired,
            unclaimItem: PropTypes.func.isRequired
        }).isRequired,
        kinService: PropTypes.shape({
            register: PropTypes.func.isRequired
        }).isRequired
    }).isRequired
};
