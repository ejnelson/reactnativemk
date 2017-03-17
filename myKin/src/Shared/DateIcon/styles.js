import { StyleSheet } from 'react-native';
import { primaryColorDark, defaultBackgroundColor } from '../../style/colors';

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: primaryColorDark,
        marginRight: 15
    },
    heading: {
        color: defaultBackgroundColor,
        fontSize: 12
    },
    detail: {
        color: defaultBackgroundColor,
        fontSize: 18
    }
});
