import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

function BackButton(props) {
    return (
        <TouchableHighlight onPress={props.onPress} style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ color: 'white', paddingLeft: 20, paddingRight: 20 }}>Back</Text>
        </TouchableHighlight>
    );
}

BackButton.propTypes = {
    onPress: React.PropTypes.func.isRequired
};

export default BackButton;