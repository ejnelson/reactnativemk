import React, { PropTypes } from 'react';
import { View, TextInput } from 'react-native';

function CustomTextInput(props) {
    return (
        <View
            style={{
                borderBottomWidth: 1,
                borderColor: '#D0CCCC',
                margin: 10
            }}
        >
            <TextInput
                style={{ height: 50 }}
                onChangeText={props.onChangeText}
                placeholder={props.placeholder}
            />
        </View>
    );
}

CustomTextInput.propTypes = {
    onChangeText: PropTypes.func,
    placeholder: PropTypes.string
};

CustomTextInput.defaultProps = {
    onChangeText: null,
    placeholder: ''
};

export default CustomTextInput;
