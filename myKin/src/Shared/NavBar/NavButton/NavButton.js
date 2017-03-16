import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

function NavButton(props) {
    return (
        <TouchableHighlight onPress={props.onPress} style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ color: 'white', paddingLeft: 20, paddingRight: 20 }}>
                {props.children}
            </Text>
        </TouchableHighlight>
    );
}

NavButton.propTypes = {
    onPress: React.PropTypes.func,
    children: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.element
    ]).isRequired
};

NavButton.defaultProps = {
    onPress: null
};

export default NavButton;
