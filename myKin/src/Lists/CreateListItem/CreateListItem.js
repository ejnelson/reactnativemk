import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import styles from '../styles';
import appStyles from '../../styles';
import navStyles from '../../Shared/NavBar/style';

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
    }

    render() {
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
                    <Text>Submit</Text>
                </TouchableHighlight>
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
