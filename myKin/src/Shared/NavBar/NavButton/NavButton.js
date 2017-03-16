import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import styles from '../style';

function NavButton(props) {
    return (
        <TouchableHighlight onPress={props.onPress} style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={[styles.navPrimaryText, { paddingLeft: 10, paddingRight: 10 }]}>
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
