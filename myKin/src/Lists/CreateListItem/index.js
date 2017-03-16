import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import styles from '../styles';
import appStyles from '../../styles';

export default class CreateListItem extends Component {
    constructor(props, context) {
        super(props, context);
        console.log(props.nav);

        this.state = {
            name: '',
            purchaseUrl: '',
            details: ''
        };
    }

    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <TextInput
                    style={appStyles.input}
                    onChangeText={name => this.setState({ name })}
                    placeholder="Name of Item"
                />
                <TextInput
                    style={appStyles.input}
                    onChangeText={purchaseUrl => this.setState({ purchaseUrl })}
                    placeholder="Where to Buy"
                />
                <TextInput
                    style={appStyles.input}
                    onChangeText={details => this.setState({ details })}
                    placeholder="Notes"
                />
                <TouchableHighlight
                    onPress={() => this.props.onSavePressed({
                        name: this.state.name,
                        purchaseUrl: this.state.purchaseUrl,
                        details: this.state.details
                    })}
                >
                    <Text>Submit</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

CreateListItem.propTypes = {
    onSavePressed: React.PropTypes.func.isRequired
};
