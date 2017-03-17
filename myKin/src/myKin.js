import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import Kin from './Kin/Kin';
import Lists from './Lists/Lists';
import Events from './Events/Events';
import UserService from './Services/UserService';
import KinService from './Services/KinService';
import ListService from './Services/ListService';
import EventService from './Services/EventService';

export default class Main extends Component {
    constructor(props, context) {
        super(props, context);

        this.userService = new UserService();
        this.kinService = new KinService();
        this.listService = new ListService();
        this.eventService = new EventService();
    }

    render() {
        const MainNav = TabNavigator(
            {
                'My Kin': {
                    screen: Kin
                },
                Lists: {
                    screen: Lists
                },
                Events: {
                    screen: Events
                }
            },
            { initialRouteName: 'Events' }
        );

        return (
            <MainNav
                screenProps={{
                    kinService: this.kinService,
                    listService: this.listService,
                    userService: this.userService,
                    eventService: this.eventService
                }}
            />
        );
    }
}
