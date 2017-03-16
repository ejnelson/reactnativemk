import React, { Component, PropTypes } from 'react';
import { StackNavigator } from 'react-navigation';
import NavBar from '../Shared/NavBar';
import AllLists from './AllLists';
import ListDetails from './ListDetails';
import CreateList from './CreateList';
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

    onSavePressed() {}

    render() {
        const StackNav = StackNavigator({
            List: {
                screen: AllLists
            },
            Detail: { screen: ListDetails },
            Create: { screen: CreateList },
            ChooseKin: { screen: KinList }
        });

        return <StackNav screenProps={{ lists: this.state.lists, kin: this.state.kin }} />;
    }
}

Lists.propTypes = {
    screenProps: PropTypes.shape({
        listService: PropTypes.shape({
            register: PropTypes.func.isRequired
        }).isRequired,
        kinService: PropTypes.shape({
            register: PropTypes.func.isRequired
        }).isRequired
    }).isRequired
};
