import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
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
