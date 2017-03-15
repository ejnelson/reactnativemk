import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

function AddButton(props) {
    return (
        <TouchableHighlight onPress={props.onPress} style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ color: '#18c5ed', paddingLeft: 20, paddingRight: 20 }}>Add</Text>
        </TouchableHighlight>
    );
}

AddButton.propTypes = {
    onPress: React.PropTypes.func.isRequired
};

export default AddButton;
