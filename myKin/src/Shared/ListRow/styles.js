import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 15,
        marginRight: 15,
        borderBottomWidth: 1,
        borderColor: '#D0CCCC'
    },
    textContainer: {
        flex: 1
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
    portrait: {
        width: 50,
        height: 50,
        borderRadius: 15,
        marginRight: 15
    }
});
