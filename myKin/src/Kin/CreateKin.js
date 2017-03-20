import React, { Component } from 'react';
import { ScrollView, View, TouchableHighlight, Image, Picker } from 'react-native';
import TextInput from '../Shared/TextInput';
import styles from './styles';

const detailCategories = ['Color', 'Food', 'Game', 'Movie'];

export default class CreateKin extends Component {
    static navigationOptions = {
        header: { styles: styles.navPrimaryBg, titleStyle: styles.navPrimaryText }
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            detailCount: 1
        };
    }

    onAddDetail() {
        this.setState({
            detailCount: this.state.detailCount + 1
        });
    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View>
                        <TouchableHighlight>
                            <Image />
                        </TouchableHighlight>
                    </View>

                    <View style={styles.container}>
                        <TextInput style={styles.input} placeholder="First Name" />
                        <TextInput style={styles.input} placeholder="Last Name" />
                        <TextInput style={styles.input} placeholder="Relationship (to you)" />
                        <TextInput style={styles.input} placeholder="Birth Date" />
                        {[...Array(this.state.detailCount).keys()].map(key => (
                            <View key={key} style={[styles.detailInput, { flexDirection: 'row' }]}>
                                <TouchableHighlight onPress={this.onAddDetail.bind(this)}>
                                    <Image
                                        source={{
                                            uri: 'https://cdn.pixabay.com/photo/2016/03/21/05/05/plus-1270001_1280.png'
                                        }}
                                        style={styles.addIcon}
                                    />
                                </TouchableHighlight>
                                <Picker style={{ flex: 1 }} mode={'dropdown'}>
                                    {detailCategories.map(cat => (
                                        <Picker.Item key={cat} label={cat} value={cat} />
                                    ))}
                                </Picker>
                                <TextInput
                                    style={{ height: 50, flex: 1 }}
                                    placeholder="Add Interest/Info"
                                />
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        );
    }
}
