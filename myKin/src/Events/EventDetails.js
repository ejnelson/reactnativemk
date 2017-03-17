import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, ScrollView, Image, ListView } from 'react-native';
import TextInput from '../Shared/TextInput';
import ListRow from '../Shared/ListRow/ListRow';
import ListFilterHeader from '../Shared/ListFilterHeader';
import styles from './styles';
import {
    borderColor,
    textColor,
    lightTextColor,
    tertiaryColor,
    defaultBackgroundColor
} from '../style/colors';

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
                    borderColor
                }}
            >
                <Image source={{ uri: comment.author.imageUrl }} style={styles.smallPortrait} />
                <View>
                    <Text
                        style={{
                            color: textColor,
                            fontSize: 14,
                            lineHeight: 17,
                            fontWeight: 'bold',
                            marginBottom: 11
                        }}
                    >
                        {comment.author.name}
                    </Text>
                    <Text
                        style={{ color: textColor, fontSize: 14, lineHeight: 20, marginBottom: 9 }}
                    >
                        {comment.body}
                    </Text>
                    <Text style={{ color: lightTextColor, fontSize: 12, lineHeight: 15 }}>
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
                                borderColor,
                                borderBottomWidth: 1,
                                padding: 5
                            }}
                        >
                            {params.guests.map(guest => (
                                <Image
                                    key={guest.id}
                                    source={{ uri: guest.imageUrl }}
                                    style={[styles.mediumPortrait, { margin: 5 }]}
                                />
                            ))}
                        </View>
                        <Text
                            style={{
                                color: tertiaryColor,
                                fontSize: 16,
                                fontWeight: 'bold',
                                lineHeight: 19,
                                marginTop: 23,
                                marginBottom: 11
                            }}
                        >
                            Event Details
                        </Text>
                        <Text style={{ fontSize: 14, lineHeight: 24, color: textColor }}>
                            {params.details}
                        </Text>
                        <View style={{ flex: 1, alignItems: 'center', marginTop: 24 }}>
                            <Image
                                style={[styles.mediumPortrait, { margin: 5 }]}
                                source={{ uri: params.host.imageUrl }}
                            />
                            <Text
                                style={{
                                    color: textColor,
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
                                backgroundColor={defaultBackgroundColor}
                                items={this.state.filterItems}
                                onPress={() => {}}
                            />
                            <View
                                style={{
                                    flexDirection: 'row',
                                    borderBottomWidth: 1,
                                    borderColor,
                                    alignItems: 'center'
                                }}
                            >
                                <Image
                                    style={styles.mediumPortrait}
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
