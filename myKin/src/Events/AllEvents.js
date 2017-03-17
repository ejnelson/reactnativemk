import React, { Component, PropTypes } from 'react';
import { View, ListView, Text, TouchableHighlight } from 'react-native';
import ListRow from '../Shared/ListRow/ListRow';
import AddButton from '../Shared/NavBar/AddButton';
import styles from './styles';

export default class AllEvents extends Component {
    static navigationOptions = {
        title: 'My Events',
        header: ({ navigate }) => ({
            left: <AddButton onPress={() => navigate('Create', {})} />,
            backTitle: null,
            titleStyle: styles.navDefaultText,
            style: styles.navDefaultBg
        })
    };

    constructor(props, context) {
        super(props, context);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: ds.cloneWithRows(props.screenProps.events)
        };
    }

    renderRow(event) {
        return (
            <ListRow
                heading={event.name}
                subHeading={''}
                details={
                    `${event.startTime.format('h')} - ${event.endTime.format('h')}    ${event.location}`
                }
                date={{ month: event.startTime.format('MMM'), date: event.startTime.format('DD') }}
                onPress={() => this.props.navigation.navigate('Detail', event)}
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
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

AllEvents.propTypes = {
    screenProps: PropTypes.shape({
        events: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                host: PropTypes.object,
                location: PropTypes.string,
                name: PropTypes.string,
                details: PropTypes.string,
                startTime: PropTypes.object,
                endTime: PropTypes.object,
                guests: PropTypes.array,
                comments: PropTypes.array
            })
        ).isRequired
    }).isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired
    }).isRequired
};
