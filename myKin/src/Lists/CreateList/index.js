import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import styles from '../styles';
import appStyles from '../../styles';

export default class CreateList extends Component {
    constructor(props, context) {
        super(props, context);
        console.log(props.nav);
        this.state = {
            forKin: null,
            items: []
        };
    }

    onSubmitItem(newItem) {
        this.state.items.push(newItem);
        console.log('pressed an item', this.state.items);
        this.props.nav.pop();
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
                <TouchableHighlight
                    onPress={() => this.props.nav.push({
                        name: 'createListItem',
                        title: 'Create Item',
                        passProps: { onSavePressed: this.onSubmitItem.bind(this) }
                    })}
                >
                    <Text>Add Item</Text>
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
