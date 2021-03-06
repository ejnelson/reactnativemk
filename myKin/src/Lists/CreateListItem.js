import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Alert } from 'react-native';
import TextInput from '../Shared/TextInput';
import navStyles from '../Shared/NavBar/style';
import { defaultBackgroundColor, secondaryColor } from '../style/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: defaultBackgroundColor
    },
    button: {
        borderColor: secondaryColor,
        borderWidth: 1,
        borderRadius: 8,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    orangeBg: {
        backgroundColor: secondaryColor
    },
    text: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '600',
        padding: 10
    },
    orangeText: { color: secondaryColor },
    whiteText: { color: defaultBackgroundColor },
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

    validateInput() {
        if (this.state.name.length < 1) {
            Alert.alert('Woah!', 'The item name cannot be blank');
            return false;
        }
        return true;
    }

    clearText() {
        this.nameInput.setNativeProps({ text: '' });
        this.urlInput.setNativeProps({ text: '' });
        this.notesInput.setNativeProps({ text: '' });
    }

    handleSaveAndReturn() {
        if (this.validateInput()) {
            const { goBack, state } = this.props.navigation;
            state.params.onSubmit({
                name: this.state.name,
                purchaseUrl: this.state.purchaseUrl,
                details: this.state.details
            });
            goBack();
        }
    }

    handleSaveAndStay() {
        if (this.validateInput()) {
            const { state } = this.props.navigation;
            state.params.onSubmit({
                name: this.state.name,
                purchaseUrl: this.state.purchaseUrl,
                details: this.state.details
            });
            this.setState({ name: '', purchaseUrl: '', details: '' });
            this.clearText();
        }
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
                    multiline
                />
                <View style={styles.buttonStack}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.handleSaveAndReturn.bind(this)}
                    >
                        <Text style={[styles.text, styles.orangeText]}>
                            Save Item to List
                        </Text>
                    </TouchableHighlight>
                    <View style={[styles.button, styles.orangeBg]}>
                        <TouchableHighlight onPress={this.handleSaveAndStay.bind(this)}>
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
