import React, { PropTypes } from 'react';
import { View, Text, Image } from 'react-native';
import moment from 'moment';
import appStyles from '../../styles';
import styles from './styles';

function KinDetail(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: props.imageUrl }} style={styles.portrait} />
                <View style={styles.headerText}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={[styles.detailText, appStyles.fadedText]}>
                        {props.birthDay.format('LL')}
                    </Text>
                    <Text style={[styles.detailText, appStyles.fadedText]}>
                        {props.birthDay.fromNow().replace('ago', 'old')}
                    </Text>
                </View>
            </View>
            <View style={styles.details}>
                <View style={{ borderBottomWidth: 1 }}>
                    <Text style={styles.subHeadingText}>About</Text>
                </View>
                {props.details.map((detail, index) => (
                    <View key={index} style={styles.detailGroup}>
                        <Text style={[appStyles.fadedText, styles.detailTypeText]}>
                            {detail.type}:{' '}
                        </Text>
                        <Text style={styles.detailValText}>{detail.value}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

KinDetail.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    birthDay: PropTypes.instanceOf(moment).isRequired,
    details: PropTypes.arrayOf(
        PropTypes.shape({ type: PropTypes.string.isRequired, value: PropTypes.string.isRequired })
    ).isRequired
};

export default KinDetail;
