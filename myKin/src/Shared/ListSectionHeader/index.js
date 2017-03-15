import React from 'react';
import { View, Text } from 'react-native';
import appStyles from '../../styles';

function ListSectionHeader(props) {
    return (
        <View style={[appStyles.primaryBg, { padding: 5 }]}>
            <Text style={{ color: 'white', fontWeight: '500' }}>{props.children}</Text>
        </View>
    );
}

ListSectionHeader.propTypes = {
    children: React.PropTypes.string.isRequired
};

export default ListSectionHeader;
