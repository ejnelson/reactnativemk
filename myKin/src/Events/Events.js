import React, { Component, PropTypes } from 'react';
import { StackNavigator } from 'react-navigation';
import AllEvents from './AllEvents';
import EventDetails from './EventDetails';

export default class Lists extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            events: []
        };
    }

    componentDidMount() {
        this.props.screenProps.eventService.register(events => {
            this.setState({ events }, () => {
                this.forceUpdate();
            });
        });
    }

    // onChooseKinPressed() {
    //     this.nav.push({ name: 'chooseKin', title: 'Choose a Kin' });
    // }

    // onKinDetailPressed(rowData) {
    //     this.nav.pop();
    //     this.setState({ createForKin: rowData });
    // }

    // saveNewList(newList) {
    //     this.props.screenProps.listService
    //         .createList(newList)
    //         .then(() => {})
    //         .catch(err => console.log(err));
    // }

    // claimItem(itemToClaim) {
    //     this.props.screenProps.listService.claimItem(itemToClaim.id).then(() => {});
    // }

    // unclaimItem(itemToRelease) {
    //     this.props.screenProps.listService.unclaimItem(itemToRelease.id).then(() => {});
    // }

    render() {
        const StackNav = StackNavigator({
            List: { screen: AllEvents },
            Detail: { screen: EventDetails }
            // Create: { screen: CreateList },
            // ChooseKin: { screen: KinList },
            // CreateListItem: { screen: CreateListItem }
        });

        return (
            <StackNav
                screenProps={{
                    events: this.state.events
                }}
            />
        );
    }
}

Lists.propTypes = {
    screenProps: PropTypes.shape({
        eventService: PropTypes.shape({
            register: PropTypes.func.isRequired
        }).isRequired
    }).isRequired
};
