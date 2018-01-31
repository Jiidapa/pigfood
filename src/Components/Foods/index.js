import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { View, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native';
import { Container, Content, Text, Card, CardItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Swipeout from 'react-native-swipeout';
import { MyHeader, Cover } from '../common';
import styles from '../styles';

const pig01 = require('../../../assets/img/pigs/pig01.png');
const pig02 = require('../../../assets/img/pigs/pig02.png');
const pig03 = require('../../../assets/img/pigs/pig03.png');
const pig04 = require('../../../assets/img/pigs/pig04.png');
const pig05 = require('../../../assets/img/pigs/pig05.png');

const icon = require('../../../assets/img/icons/pig.png');
const BGMenu = require('../../../assets/img/menu/menu1_05.png');

let swipeBtns = [
    {
        text: 'Edit',
        backgroundColor: 'orange',
        underlayColor: 'rgba(0, 0, 0, 1, 0.6)'
        // onPress: () => { this.duplicateNote(rowData) }
    },
    {
        text: 'Delete',
        backgroundColor: 'red',
        underlayColor: 'rgba(0, 0, 0, 1, 0.6)'
        //   onPress: () => { this.deleteNote(rowData) }
    }
];
class Foods extends Component {
    render() {
        return (
            <Container>
                <MyHeader title='แสดงสูตรอาหาร'>
                    <TouchableOpacity onPress={() => Actions.addPig()}>
                        <FontAwesome name="plus-circle" style={[styles.icon]} />
                    </TouchableOpacity>
                </MyHeader>
                <Content>
                    <Grid>
                        <Col>
                            <Swipeout right={swipeBtns} backgroundColor='white' style={{ marginBottom: 8 }}>
                                <TouchableOpacity onPress={() => Actions.mixer()}>
                                    <Row>
                                            <CardItem style={{ backgroundColor: 'white', opacity: 0.8 }}>
                                                <View style={{ paddingLeft: 20 }}>
                                                    <Text style={[styles.kanit, { color: '#666' }]}>ชื่อ : <Text>สูตรอาหาร 307</Text></Text>
                                                    <Text style={[styles.kanit, { color: '#666' }]}>ส่วนผสม : <Text>7 รายการ</Text></Text>
                                                    <Text style={[styles.kanit, { color: '#666' }]}>ส่วนผสมหลัก : <Text>ข้าวโพดบด</Text></Text>
                                                </View>
                                            </CardItem>
                                    </Row>
                                </TouchableOpacity>
                            </Swipeout>
                            <Swipeout right={swipeBtns} backgroundColor='white' style={{ marginBottom: 8 }}>
                                <TouchableOpacity onPress={() => Actions.mixer()}>
                                    <Row>
                                            <CardItem style={{ backgroundColor: 'white', opacity: 0.8 }}>
                                                <View style={{ paddingLeft: 20 }}>
                                                    <Text style={[styles.kanit, { color: '#666' }]}>ชื่อ : <Text>สูตรอาหาร 308</Text></Text>
                                                    <Text style={[styles.kanit, { color: '#666' }]}>ส่วนผสม : <Text>8 รายการ</Text></Text>
                                                    <Text style={[styles.kanit, { color: '#666' }]}>ส่วนผสมหลัก : <Text>ปลายข้าว</Text></Text>
                                                </View>
                                            </CardItem>
                                    </Row>
                                </TouchableOpacity>
                            </Swipeout>
                        </Col>
                    </Grid>
                </Content>
            </Container>
        );
    }
}
const styles_in = StyleSheet.create({
    section: {
        flexDirection: 'row'
    }
});
export default Foods;
