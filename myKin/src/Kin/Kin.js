import React, { Component, PropTypes } from 'react';
import { StackNavigator } from 'react-navigation';
import KinList from './KinList/KinList';
import CreateKin from './CreateKin/CreateKin';
import KinDetail from '../Shared/KinDetail/KinDetail';

/**
 * Base component for navigating through 'My Kin' views
 * Default scene is the list of current kin
 * Can navigate to detail view and add views
 */
export default class Kin extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            kin: []
        };
    }
    componentDidMount() {
        this.props.screenProps.kinService.register(kin => {
            this.setState({ kin }, () => {
                this.forceUpdate();
            });
        });
    }

    onDetailPressed(rowData) {
        this.nav.push({ name: 'detail', title: 'My Kin', passProps: rowData });
    }

    render() {
        const StackNav = StackNavigator({
            List: {
                screen: KinList
            },
            Detail: { screen: KinDetail },
            Create: { screen: CreateKin }
        });

        return (
            <StackNav
                screenProps={{
                    kin: this.state.kin,
                    onDetailPressed: this.onDetailPressed.bind(this)
                }}
            />
        );
    }
}

Kin.propTypes = {
    screenProps: PropTypes.shape({
        kinService: PropTypes.shape({
            register: PropTypes.func.isRequired
        }).isRequired
    }).isRequired
};
