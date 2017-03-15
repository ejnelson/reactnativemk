import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import styles from '../styles';
import appStyles from '../../styles';

export default class CreateList extends Component {
    constructor(props, context) {
        super(props, context);
        console.log(props.nav);
        this.state = {
            forKin: null
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={appStyles.input} placeholder="Name of List" />
                <TouchableHighlight onPress={this.props.onChooseKinPressed}>
                    <Text style={appStyles.input}>
                        {this.props.forKin.name ? this.props.forKin.name : "Who's it for?"}
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

CreateList.propTypes = {
    onChooseKinPressed: React.PropTypes.func.isRequired,
    onSavePressed: React.PropTypes.func.isRequired,
    forKin: React.PropTypes.shape({ name: React.PropTypes.string })
};

CreateList.defaultProps = {
    forKin: null
};
