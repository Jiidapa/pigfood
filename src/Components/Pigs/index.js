import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { View, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { Container, Content, Text, Card, CardItem } from 'native-base';
import { MyHeader } from '../common';
import styles from '../styles';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Swipeout from 'react-native-swipeout';

const pig01 = require('../../../assets/img/pigs/pig01.png');
const pig02 = require('../../../assets/img/pigs/pig02.png');
const pig03 = require('../../../assets/img/pigs/pig03.png');
const pig04 = require('../../../assets/img/pigs/pig04.png');
const pig05 = require('../../../assets/img/pigs/pig05.png');

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
                <MyHeader title='แสดงรายการหมู'>
                    <TouchableOpacity onPress={() => Actions.addPig()}>
                        <FontAwesome name="plus-circle" style={[styles.icon]} />
                    </TouchableOpacity>
                </MyHeader>
                <Content>
                    <Grid>
                        <Col>
                            <Swipeout right={swipeBtns} backgroundColor= 'transparent'  style={{marginTop:15}}>
                                <TouchableOpacity onPress={() => Actions.Foods()}>
                                    <Row>
                                        {/* <Card> */}
                                            <ImageBackground source={pig01} style={{ width: null, height: null,flex: 1}} >
                                                <CardItem style={{backgroundColor:'transparent'}}>
                                                        <View style={{paddingLeft: 20}}>
                                                            <Text>ประเภท : หมูอาย</Text>
                                                            <Text>จำนวน : 1 ตัว</Text>
                                                        </View>
                                                </CardItem>
                                            </ImageBackground>
                                        {/* </Card> */}
                                    </Row>
                                </TouchableOpacity>
                            </Swipeout>
                            <Swipeout right={swipeBtns} backgroundColor= 'transparent' >
                                <TouchableOpacity onPress={() => Actions.Foods()}>
                                    <Row>
                                        {/* <Card> */}
                                            <ImageBackground source={pig02} style={{ width: null, height: null,flex: 1}} >
                                                <CardItem style={{backgroundColor:'transparent'}}>
                                                        <View style={{paddingLeft: 20}}>
                                                            <Text>ประเภท : หมูอาย</Text>
                                                            <Text>จำนวน : 2 ตัว</Text>
                                                        </View>
                                                </CardItem>
                                            </ImageBackground>
                                        {/* </Card> */}
                                    </Row>
                                </TouchableOpacity>
                            </Swipeout>
                            <Swipeout right={swipeBtns} backgroundColor= 'transparent' >
                                <TouchableOpacity onPress={() => Actions.Foods()}>
                                    <Row>
                                        {/* <Card> */}
                                            <ImageBackground source={pig03} style={{ width: null, height: null,flex: 1}} >
                                                <CardItem style={{backgroundColor:'transparent'}}>
                                                        <View style={{paddingLeft: 20}}>
                                                            <Text>ประเภท : หมูอาย</Text>
                                                            <Text>จำนวน : 3 ตัว</Text>
                                                        </View>
                                                </CardItem>
                                            </ImageBackground>
                                        {/* </Card> */}
                                    </Row>
                                </TouchableOpacity>
                            </Swipeout>
                            <Swipeout right={swipeBtns} backgroundColor= 'transparent' >
                                <TouchableOpacity onPress={() => Actions.Foods()}>
                                    <Row>
                                        {/* <Card> */}
                                            <ImageBackground source={pig04} style={{ width: null, height: null,flex: 1}} >
                                                <CardItem style={{backgroundColor:'transparent'}}>
                                                        <View style={{paddingLeft: 20}}>
                                                            <Text>ประเภท : หมูอาย</Text>
                                                            <Text>จำนวน : 4 ตัว</Text>
                                                        </View>
                                                </CardItem>
                                            </ImageBackground>
                                        {/* </Card> */}
                                    </Row>
                                </TouchableOpacity>
                            </Swipeout>
                            <Swipeout right={swipeBtns} backgroundColor= 'transparent'>
                                <TouchableOpacity onPress={() => Actions.Foods()}>
                                    <Row>
                                        {/* <Card> */}
                                            <ImageBackground source={pig05} style={{ width: null, height: null,flex: 1}} >
                                                <CardItem style={{backgroundColor:'transparent'}}>
                                                        <View style={{paddingLeft: 20}}>
                                                            <Text>ประเภท : หมูอาย</Text>
                                                            <Text>จำนวน : 5 ตัว</Text>
                                                        </View>
                                                </CardItem>
                                            </ImageBackground>
                                        {/* </Card> */}
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
