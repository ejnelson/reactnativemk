import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { primaryColor } from '../../style/colors';

function AddButton(props) {
    return (
        <TouchableHighlight onPress={props.onPress} style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ color: primaryColor, paddingLeft: 20, paddingRight: 20 }}>Add</Text>
        </TouchableHighlight>
    );
}

AddButton.propTypes = {
    onPress: React.PropTypes.func.isRequired
};

export default AddButton;
