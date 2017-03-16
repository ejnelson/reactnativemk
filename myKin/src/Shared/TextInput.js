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
                style={{
                    fontSize: 17,
                    lineHeight: 24,
                    marginTop: 10,
                    marginBottom: 10,
                    height: 24,
                    color: '#585654'
                }}
                placeholderTextColor={'#D0CCCC'}
                ref={props.getRef}
                onChangeText={props.onChangeText}
                placeholder={props.placeholder}
                multiline={props.multiline}
            />
        </View>
    );
}

CustomTextInput.propTypes = {
    getRef: PropTypes.func,
    onChangeText: PropTypes.func,
    placeholder: PropTypes.string,
    multiline: PropTypes.bool
};

CustomTextInput.defaultProps = {
    getRef: () => {},
    onChangeText: null,
    placeholder: '',
    multiline: false
};

export default CustomTextInput;
