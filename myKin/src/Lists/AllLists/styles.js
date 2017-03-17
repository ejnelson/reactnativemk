import { StyleSheet } from 'react-native';
import { defaultBackgroundColor } from '../../style/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: defaultBackgroundColor
    },
    buyButton: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        color: 'white'
    }
});
