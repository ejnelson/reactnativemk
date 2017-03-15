import React, { Component } from 'react';
import MainComponent from './render';
import UserService from './Services/UserService';
import KinService from './Services/KinService';
import ListService from './Services/ListService';
import EventService from './Services/EventService';

export default class Main extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            selectedTab: 'lists'
        };

        this.userService = new UserService();
        this.kinService = new KinService();
        this.listService = new ListService();
        this.eventService = new EventService();
    }

    navigate(navigateTo) {
        this.setState({
            selectedTab: navigateTo
        });
    }

    render() {
        return (
            <MainComponent
                selectedTab={this.state.selectedTab}
                navigate={this.navigate.bind(this)}
                kinService={this.kinService}
                kin={this.props.kin}
                listService={this.listService}
            />
        );
    }
}
