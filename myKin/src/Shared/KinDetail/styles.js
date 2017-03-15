import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 70
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        height: 100
    },
    headerText: {
        flex: 1,
        justifyContent: 'space-between',
        marginBottom: 10,
        marginRight: 20,
        marginLeft: 20
    },
    subHeadingText: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: 10,
        borderBottomWidth: 1
    },
    portrait: {
        height: 100,
        width: 100,
        borderRadius: 10
    },
    name: {
        fontWeight: '600',
        fontSize: 18
    },
    details: {
        alignSelf: 'stretch',
        margin: 20
    },
    detailGroup: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 10
    },
    detailTypeText: {
        fontWeight: 'bold'
    },
    detailValText: {}
});
