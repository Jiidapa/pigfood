import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

const Cover = (props) => {
    return (
        <View>
            <ImageBackground source={props.bgsource} style={[styles.header, styles.centered]}>
                <View style={[styles.centered, styles.headerView]} />
                <View style={{ position: 'absolute' }}>
                {props.children}
                </View>
            </ImageBackground>
        </View>
    );
};

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
    centered: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export { Cover };
