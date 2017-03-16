import React, { Component, PropTypes } from 'react';
import { View, Text, Image } from 'react-native';
import moment from 'moment';
import appStyles from '../../styles';
import styles from './styles';
import navStyles from '../../Shared/NavBar/style';

export default class KinDetail extends Component {
    static navigationOptions = {
        title: 'My Kin',
        header: { style: navStyles.navBarBlue, titleStyle: navStyles.navBarBlue }
    };

    render() {
        const { params } = this.props.navigation.state;

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={{ uri: params.imageUrl }} style={styles.portrait} />
                    <View style={styles.headerText}>
                        <Text style={styles.name}>{params.name}</Text>
                        <Text style={[styles.detailText, appStyles.fadedText]}>
                            {params.birthDay.format('LL')}
                        </Text>
                        <Text style={[styles.detailText, appStyles.fadedText]}>
                            {params.birthDay.fromNow().replace('ago', 'old')}
                        </Text>
                    </View>
                </View>
                <View style={styles.details}>
                    <View style={{ borderBottomWidth: 1 }}>
                        <Text style={styles.subHeadingText}>About</Text>
                    </View>
                    {params.details.map((detail, index) => (
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
}

KinDetail.propTypes = {
    navigation: PropTypes.shape({
        state: PropTypes.shape({
            params: PropTypes.shape({
                name: PropTypes.string.isRequired,
                imageUrl: PropTypes.string.isRequired,
                birthDay: PropTypes.instanceOf(moment).isRequired,
                details: PropTypes.arrayOf(
                    PropTypes.shape({
                        type: PropTypes.string.isRequired,
                        value: PropTypes.string.isRequired
                    })
                ).isRequired
            }).isRequired
        }).isRequired
    }).isRequired
};
