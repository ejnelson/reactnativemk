import React, { Component, PropTypes } from 'react';
import { Navigator } from 'react-native';
import NavBar from '../Shared/NavBar';
import AllLists from './AllLists';
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
        this.props.listService.register(lists => {
            this.setState({ lists }, () => {
                this.forceUpdate();
            });
        });
        this.props.kinService.register(kin => {
            this.setState({ kin }, () => {
                this.forceUpdate();
            });
        });
    }

    onListDetailPressed(rowData) {
        this.nav.push({
            name: 'detail',
            title: `${rowData.for.firstName}'s ${rowData.name}`,
            passProps: rowData
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

    onSaveItem() {}

    renderScene(route) {
        switch (route.name) {
            case 'detail':
                return <ListDetails {...route.passProps} />;
            case 'createList':
                return (
                    <CreateList
                        onChooseKinPressed={this.onChooseKinPressed.bind(this)}
                        onSavePressed={this.onSavePressed.bind(this)}
                        nav={this.nav}
                        forKin={this.state.createForKin}
                    />
                );
            case 'createListItem':
                return (
                    <CreateListItem
                        {...route.passProps}
                    />
                );
            case 'chooseKin':
                return (
                    <KinList
                        kin={this.state.kin}
                        onDetailPressed={this.onKinDetailPressed.bind(this)}
                    />
                );
            default:
                return (
                    <AllLists
                        lists={this.state.lists}
                        onDetailPressed={this.onListDetailPressed.bind(this)}
                    />
                );
        }
    }

    render() {
        return (
            <Navigator
                configureScene={() => Navigator.SceneConfigs.HorizontalSwipeJump}
                initialRoute={{ name: 'lists', title: 'Lists', index: 0 }}
                ref={nav => {
                    this.nav = nav;
                }}
                renderScene={this.renderScene.bind(this)}
                navigationBar={
                    <NavBar createRoute={{ name: 'createList', title: 'Create New List' }} />
                }
            />
        );
    }
}

Lists.propTypes = {
    listService: PropTypes.shape({
        register: PropTypes.func.isRequired
    }).isRequired,
    kinService: PropTypes.shape({
        register: PropTypes.func.isRequired
    }).isRequired
};
