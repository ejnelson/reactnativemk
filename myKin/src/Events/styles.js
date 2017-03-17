import { StyleSheet } from 'react-native';
import globalStyles from '../styles';
import navStyles from '../Shared/NavBar/style';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    button: {
        borderColor: '#FFA115',
        borderWidth: 1,
        borderRadius: 8,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    orangeBg: {
        backgroundColor: '#FFA115'
    },
    text: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '600',
        padding: 10
    },
    orangeText: { color: '#FFA115' },
    whiteText: { color: '#fff' },
    buttonStack: { flex: 1, justifyContent: 'flex-end', alignItems: 'stretch' }
});

export default {
    ...globalStyles,
    ...navStyles,
    ...styles
};
