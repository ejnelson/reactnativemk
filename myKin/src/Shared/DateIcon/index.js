import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function DateIcon(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{props.month}</Text>
            <Text style={styles.detail}>{props.date}</Text>
        </View>
    );
}

DateIcon.propTypes = {
    month: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

export default DateIcon;
