import { StyleSheet } from 'react-native';
import globalStyles from '../styles';
import navStyles from '../Shared/NavBar/style';
import { defaultBackgroundColor, secondaryColor } from '../style/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: defaultBackgroundColor
    },
    button: {
        borderColor: secondaryColor,
        borderWidth: 1,
        borderRadius: 8,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    orangeBg: {
        backgroundColor: secondaryColor
    },
    text: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '600',
        padding: 10
    },
    orangeText: { color: secondaryColor },
    whiteText: { color: defaultBackgroundColor },
    buttonStack: { flex: 1, justifyContent: 'flex-end', alignItems: 'stretch' },
    smallPortrait: { height: 20, width: 20, borderRadius: 6, marginRight: 8 },
    mediumPortrait: { height: 40, width: 40, borderRadius: 6 }
});

export default {
    ...globalStyles,
    ...navStyles,
    ...styles
};
