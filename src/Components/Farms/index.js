import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Actions } from 'react-native-router-flux';
import {
    Container,
    Header,
    Text,
    Body,
    Left,
    Right
} from 'native-base';
class Farms extends Component {
    render() {
        return (
            <Container>
                <Header style={[styles.header]}>
                    <Left>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <FontAwesome name="arrow-left" style={[styles.icon]}></FontAwesome>
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Text style={[styles.kanit,{color: 'white', textAlign: 'center'}]}>ฟาร์ม</Text>
                    </Body>
                    <Right>
                        <TouchableOpacity onPress={() => Actions.addFarm()}>
                            <FontAwesome name="plus-circle" style={[styles.icon]}></FontAwesome>
                        </TouchableOpacity>
                    </Right>
                </Header>
            </Container>
        );
    }
}

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
export default Farms;
