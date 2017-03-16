import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import TextInput from '../../Shared/TextInput';
import appStyles from '../../styles';
import navStyles from '../../Shared/NavBar/style';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff'
    },
    button: {
        borderColor: '#FFA115',
        borderWidth: 1,
        borderRadius: 8,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    orangeBg: {
        backgroundColor: '#FFA115'
    },
    text: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '600',
        padding: 10
    },
    orangeText: { color: '#FFA115' },
    whiteText: { color: '#fff' },
    buttonStack: { flex: 1, justifyContent: 'flex-end', alignItems: 'stretch' }
});

export default class CreateListItem extends Component {
    static navigationOptions = {
        title: 'Add Item',
        header: { style: navStyles.navPrimaryBg, titleStyle: navStyles.navPrimaryText }
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            name: '',
            purchaseUrl: '',
            details: ''
        };

        this.textInputs = [];

        this.clearText = this.clearText.bind(this);
    }

    clearText() {
        this.nameInput.setNativeProps({ text: '' });
        this.urlInput.setNativeProps({ text: '' });
        this.notesInput.setNativeProps({ text: '' });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    getRef={component => this.nameInput = component}
                    onChangeText={name => this.setState({ name })}
                    placeholder="Name of Item"
                />
                <TextInput
                    getRef={component => this.urlInput = component}
                    onChangeText={purchaseUrl => this.setState({ purchaseUrl })}
                    placeholder="Where to Buy"
                />
                <TextInput
                    getRef={component => this.notesInput = component}
                    onChangeText={details => this.setState({ details })}
                    placeholder="Notes"
                />
                <View style={styles.buttonStack}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {
                            const { goBack, state } = this.props.navigation;
                            state.params.onSubmit({
                                name: this.state.name,
                                purchaseUrl: this.state.purchaseUrl,
                                details: this.state.details
                            });
                            goBack();
                        }}
                    >
                        <Text style={[styles.text, styles.orangeText]}>
                            Save Item to List
                        </Text>
                    </TouchableHighlight>
                    <View style={[styles.button, styles.orangeBg]}>
                        <TouchableHighlight
                            onPress={() => {
                                const { state } = this.props.navigation;
                                state.params.onSubmit({
                                    name: this.state.name,
                                    purchaseUrl: this.state.purchaseUrl,
                                    details: this.state.details
                                });
                                this.setState({ name: '', purchaseUrl: '', details: '' });
                                this.clearText();
                            }}
                        >
                            <Text style={[styles.text, styles.whiteText]}>Save & Add Another</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

CreateListItem.propTypes = {
    navigation: React.PropTypes.shape({
        state: React.PropTypes.shape({
            params: React.PropTypes.shape({
                onSubmit: React.PropTypes.func.isRequired
            }).isRequired
        }).isRequired,
        goBack: React.PropTypes.func.isRequired
    }).isRequired
};
