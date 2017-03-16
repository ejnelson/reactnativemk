import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#aaaaaa'
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
    }
});
