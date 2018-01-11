import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
    Header,
    Text,
    Body,
    Left,
    Right
} from 'native-base';
import { Actions } from 'react-native-router-flux';

const MyHeader = (props) => {
    return (
        <Header style={[styles.header]}>
            <Left>
                <TouchableOpacity onPress={() => Actions.pop()}>
                    <FontAwesome name="arrow-left" style={[styles.icon]} />
                </TouchableOpacity>
            </Left>
            <Body>
                <Text style={[styles.kanit, { color: 'white', textAlign: 'center' }]}>{props.title}</Text>
            </Body>
            <Right>
                {props.children}
            </Right>
        </Header>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#795548'
    },
    icon: {
        fontSize: 20,
        color: 'white'
    },
    kanit: {
        fontFamily: 'Kanit-Regular'
    }
});

export { MyHeader };
