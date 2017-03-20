import { StyleSheet } from 'react-native';
import globalStyles from '../styles';
import navStyles from '../Shared/NavBar/style';
import { defaultBackgroundColor, borderColor } from '../style/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: defaultBackgroundColor,
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    row: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderColor
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingRight: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#d7d7d7',
        height: 50,
        margin: 10,
        padding: 10,
        borderRadius: 5
    },
    detailInput: {
        borderWidth: 1,
        borderColor: '#d7d7d7',
        height: 50,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    addIcon: {
        margin: 10,
        height: 30,
        width: 30
    }
});

export default {
    ...globalStyles,
    ...navStyles,
    ...styles
};
