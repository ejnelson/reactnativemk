import React, { PropTypes } from 'react';
import { TouchableHighlight, View, Text, Image } from 'react-native';
import DateIcon from '../DateIcon/index';
import appStyles from '../../styles';
import styles from './styles';

function ListRow(props) {
    return (
        <TouchableHighlight onPress={props.onPress ? props.onPress.bind(this) : null}>
            <View style={styles.container}>
                {props.imageUrl &&
                    <Image source={{ uri: props.imageUrl }} style={styles.portrait} />}
                {props.date && <DateIcon date={props.date.date} month={props.date.month} />}
                <View style={styles.textContainer}>
                    <View style={styles.header}>
                        <Text style={styles.name}>{props.heading}</Text>
                        <Text style={appStyles.fadedText}>{props.subHeading}</Text>
                    </View>
                    <Text style={appStyles.fadedText}>{props.details}</Text>
                </View>
                {props.rightButton}
            </View>
        </TouchableHighlight>
    );
}

ListRow.defaultProps = {
    subHeading: '',
    imageUrl: null,
    date: null,
    rightButton: null,
    onPress: null
};

ListRow.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string,
    details: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    imageUrl: PropTypes.string,
    date: PropTypes.shape({
        month: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    }),
    rightButton: PropTypes.element
};

export default ListRow;
