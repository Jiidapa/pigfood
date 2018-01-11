import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        height: 150,
        width: null,
        flexDirection: 'row'
    },
    headerView: {
        height: 75,
        flex: 1,
        backgroundColor: '#000',
        opacity: 0.6
    },
    box: {
        padding: 8,
        borderBottomWidth: 0.5,
        borderColor: '#ddd'
    },
    boxPrimary: {
        backgroundColor: '#795548',
    },
    centered: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: 40
    },
    iconButton: {
        fontSize: 24,
        color: 'white'
    },
    row: {
        padding: 8
    },
    textPrimary: {
        color: 'white',
        backgroundColor: 'transparent'
    },
    textSmall: {
        fontSize: 14
    },
    textMedium: {
        fontSize: 18
    },
    textLarge: {
        fontSize: 24
    },
    kanit: {
        fontFamily: 'Kanit-Regular'
    }
});

export default styles;
