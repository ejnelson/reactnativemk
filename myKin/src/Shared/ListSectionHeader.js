import React from 'react';
import { View, Text } from 'react-native';
import { defaultBackgroundColor, primaryColor } from '../style/colors';

function ListSectionHeader(props) {
    return (
        <View style={{ backgroundColor: primaryColor, padding: 5 }}>
            <Text style={{ color: defaultBackgroundColor, fontWeight: '500' }}>
                {props.children}
            </Text>
        </View>
    );
}

ListSectionHeader.propTypes = {
    children: React.PropTypes.string.isRequired
};

export default ListSectionHeader;
