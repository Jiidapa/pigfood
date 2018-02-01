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
class Pigs extends Component {
    render() {
        return (
            <Container>
                <MyHeader title='แสดงรายการสุกร'>
                    <TouchableOpacity onPress={() => Actions.addPig()}>
                        <FontAwesome name="plus-circle" style={[styles.icon]} />
                    </TouchableOpacity>
                </MyHeader>
                <Content>
                    <Grid>
                        <Col>
                            <Swipeout right={swipeBtns} backgroundColor='white' style={{ marginBottom: 8 }}>
                                <TouchableOpacity onPress={() => Actions.foods()}>
                                    <Row>
                                        {/* <ImageBackground source={pig01} style={{ width: null, height: null, flex: 1, paddingTop: 8, paddingBottom: 8 }} > */}
                                            {/* <Card> */}
                                            <CardItem style={{ backgroundColor: 'white', opacity: 0.8 }}>
                                                {/* <View>
                                                    <Image source={icon} style={{ width: 56, height: 56 }} />
                                                </View> */}
                                                <View style={{ paddingLeft: 20 }}>
                                                    <Text style={[styles.kanit, { color: '#666' }]}>ประเภท : <Text>สุกรขุน</Text></Text>
                                                    <Text style={[styles.kanit, { color: '#666' }]}>จำนวน : <Text>5 ตัว</Text></Text>
                                                </View>
                                            </CardItem>
                                            {/* </Card> */}
                                        {/* </ImageBackground> */}
                                    </Row>
                                </TouchableOpacity>
                            </Swipeout>
                            <Swipeout right={swipeBtns} backgroundColor='white' style={{ marginBottom: 8 }}>
                                <TouchableOpacity onPress={() => Actions.foods()}>
                                    <Row>
                                        {/* <ImageBackground source={pig02} style={{ width: null, height: null, flex: 1, paddingTop: 8, paddingBottom: 8 }} > */}
                                            {/* <Card> */}
                                            <CardItem style={{ backgroundColor: 'white', opacity: 0.8 }}>
                                                {/* <View>
                                                    <Image source={icon} style={{ width: 56, height: 56 }} />
                                                </View> */}
                                                <View style={{ paddingLeft: 20 }}>
                                                    <Text style={[styles.kanit, { color: '#666' }]}>ประเภท : <Text>สุกรรุ่น</Text></Text>
                                                    <Text style={[styles.kanit, { color: '#666' }]}>จำนวน : <Text>2 ตัว</Text></Text>
                                                </View>
                                            </CardItem>
                                            {/* </Card> */}
                                        {/* </ImageBackground> */}
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
export default Pigs;
