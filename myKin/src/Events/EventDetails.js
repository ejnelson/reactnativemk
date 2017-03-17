import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, ScrollView, Image, ListView } from 'react-native';
import TextInput from '../Shared/TextInput';
import ListRow from '../Shared/ListRow/ListRow';
import ListFilterHeader from '../Shared/ListFilterHeader';
import styles from './styles';

export default class EventDetails extends Component {
    static navigationOptions = {
        title: 'My Events',
        header: { style: styles.navPrimaryBg, titleStyle: styles.navPrimaryText }
    };

    constructor(props, context) {
        super(props, context);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        const { params } = this.props.navigation.state;
        this.state = {
            dataSource: ds.cloneWithRows(params.comments),
            filterItems: [{ text: 'Comments', selected: true }, { text: 'Updates' }]
        };
    }

    renderRow(comment) {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    paddingTop: 15,
                    paddingBottom: 15,
                    borderBottomWidth: 1,
                    borderColor: '#E9EDF5'
                }}
            >
                <Image
                    source={{ uri: comment.author.imageUrl }}
                    style={{ height: 20, width: 20, borderRadius: 6, marginRight: 8 }}
                />
                <View>
                    <Text
                        style={{
                            color: '#585654',
                            fontSize: 14,
                            lineHeight: 17,
                            fontWeight: 'bold',
                            marginBottom: 11
                        }}
                    >
                        {comment.author.name}
                    </Text>
                    <Text
                        style={{ color: '#585654', fontSize: 14, lineHeight: 20, marginBottom: 9 }}
                    >
                        {comment.body}
                    </Text>
                    <Text style={{ color: '#767374', fontSize: 12, lineHeight: 15 }}>
                        {comment.created.fromNow()}
                    </Text>
                </View>
            </View>
        );
    }

    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ListRow
                        heading={params.name}
                        subHeading={''}
                        details={
                            `${params.startTime.format('h')} - ${params.endTime.format('h')}    ${params.location}`
                        }
                        date={{
                            month: params.startTime.format('MMM'),
                            date: params.startTime.format('DD')
                        }}
                    />
                    <View style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                borderColor: '#E9EDF5',
                                borderBottomWidth: 1,
                                padding: 5
                            }}
                        >
                            {params.guests.map(guest => (
                                <Image
                                    key={guest.id}
                                    source={{ uri: guest.imageUrl }}
                                    style={{ height: 40, width: 40, borderRadius: 6, margin: 5 }}
                                />
                            ))}
                        </View>
                        <Text
                            style={{
                                color: '#13C69A',
                                fontSize: 16,
                                fontWeight: 'bold',
                                lineHeight: 19,
                                marginTop: 23,
                                marginBottom: 11
                            }}
                        >
                            Event Details
                        </Text>
                        <Text style={{ fontSize: 14, lineHeight: 24, color: '#585654' }}>
                            {params.details}
                        </Text>
                        <View style={{ flex: 1, alignItems: 'center', marginTop: 24 }}>
                            <Image
                                style={{
                                    height: 40,
                                    width: 40,
                                    borderRadius: 6,
                                    margin: 5
                                }}
                                source={{ uri: params.host.imageUrl }}
                            />
                            <Text
                                style={{
                                    color: '#585654',
                                    lineHeight: 28,
                                    fontSize: 14,
                                    fontWeight: 'bold'
                                }}
                            >
                                {`Coordinated by ${params.host.name}`}
                            </Text>
                        </View>
                        <View style={styles.buttonStack}>
                            <TouchableHighlight style={styles.button}>
                                <Text style={[styles.text, styles.orangeText]}>
                                    View Birthday List
                                </Text>
                            </TouchableHighlight>
                            <View style={[styles.button, styles.orangeBg]}>
                                <TouchableHighlight>
                                    <Text style={[styles.text, styles.whiteText]}>
                                        RSVP to this Event
                                    </Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <ListFilterHeader
                                backgroundColor="#fff"
                                items={this.state.filterItems}
                                onPress={() => {}}
                            />
                            <View
                                style={{
                                    flexDirection: 'row',
                                    borderBottomWidth: 1,
                                    borderColor: '#E9EDF5',
                                    alignItems: 'center'
                                }}
                            >
                                <Image
                                    style={{ height: 40, width: 40, borderRadius: 6 }}
                                    source={{ uri: params.host.imageUrl }}
                                />
                                <View style={{ flex: 1 }}>
                                    <TextInput placeholder="Write something..." />
                                </View>
                            </View>
                            <ListView
                                style={{ flex: 1, height: 200 }}
                                contentInset={{ bottom: 49 }}
                                automaticallyAdjustContentInsets={false}
                                dataSource={this.state.dataSource}
                                renderRow={this.renderRow.bind(this)}
                                enableEmptySections
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

EventDetails.propTypes = {
    navigation: PropTypes.shape({
        state: PropTypes.shape({
            params: PropTypes.object.isRequired
        }).isRequired
    }).isRequired
};
