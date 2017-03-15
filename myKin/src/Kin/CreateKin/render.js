import React from 'react';
import { View, Text, TouchableHighlight, TextInput, Image, Picker, ScrollView } from 'react-native';
import styles from './styles';

function CreateKin(props) {
    // TODO: Replace button icon with real asset
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
                    {[...Array(props.detailCount).keys()].map(key => (
                        <View key={key} style={[styles.detailInput, { flexDirection: 'row' }]}>
                            <TouchableHighlight onPress={props.onAddDetail}>
                                <Image
                                    source={{
                                        uri: 'https://cdn.pixabay.com/photo/2016/03/21/05/05/plus-1270001_1280.png'
                                    }}
                                    style={styles.addIcon}
                                />
                            </TouchableHighlight>
                            <Picker style={{ flex: 1 }} mode={'dropdown'}>
                                {props.detailCategories.map(cat => (
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

CreateKin.propTypes = {
    detailCount: React.PropTypes.number,
    onAddDetail: React.PropTypes.func.isRequired,
    detailCategories: React.PropTypes.arrayOf(React.PropTypes.string.isRequired).isRequired
};

CreateKin.defaultProps = {
    detailCount: 1
};

export default CreateKin;
