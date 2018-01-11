import { StyleSheet } from 'react-native';
// ชื่อ style ต้องเรียงจาก a-z
const styles = StyleSheet.create({
    box: {
        borderBottomWidth: 0.5,
        borderColor: '#ddd',
        padding: 8
    },
    boxCol: {
        backgroundColor: '#fff', 
        borderRightWidth: 0.5, 
        borderColor: '#ddd',
        height: 200,
    },
    boxPrimary: {
        backgroundColor: '#795548',
    },
    caption: {
        color: '#0288D1',
        marginTop: 8
    },
    centered: {
        justifyContent: 'center',
        alignItems: 'center',
    },
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
    icon: {
        fontSize: 20,
        color: 'white'
    },
    iconBox: {
        fontSize: 40
    },
    iconButton: {
        fontSize: 24,
        color: 'white'
    },
    kanit: {
        fontFamily: 'Kanit-Regular'
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
    }
});

export default styles;
