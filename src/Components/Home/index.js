import React, { Component } from 'react';
import { View, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
    Container,
    Content,
    Button,
    Header,
    Text,
    Left,
    Icon,
    Right,
    Body,
    Title,
    Card,
    CardItem
} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Actions } from 'react-native-router-flux';

const bg_menu = require('../../../assets/img/menu/menu1_01.png');
const bg_menu_1 = require('../../../assets/img/menu/menu1_02.png');
const bg_menu_2 = require('../../../assets/img/menu/menu1_03.png');
const bg_menu_3 = require('../../../assets/img/menu/menu1_04.png');
const bg_menu_4 = require('../../../assets/img/menu/menu1_05.png');

class Home extends Component {

    render() {
        return (
            <Container>
                <View style={{ flex: 1 }}>
                    <ImageBackground source={bg_menu_1} style={[styles.header, styles.centered]}>
                        <View style={[styles.centered, styles.headerView]}>
                            
                        </View>
<<<<<<< HEAD
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => Actions.aboutme()}>
                        <View style={[{ flex: 1 }, styles.box]}>
                            <Text style={styles.kanit}>เกี่ยวกับเรา</Text>
=======
                        <View style={{ position: 'absolute' }}>
                        <Text style={[styles.textPrimary, { fontSize: 26 }]}>Food{' '}
                            <Text style={{ color: 'orange', fontSize: 26}}>Mixer</Text>{' '}
                            Machine
                        </Text>
                        <Text style={[styles.textPrimary, { fontSize: 14 }]}>เครื่องผสมอาหารสุกรอัตโนมัติ</Text>
>>>>>>> 1995de01dde9cf5ac0aaec57cfc86d9f6ae2afbb
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ backgroundColor: '#fff', flexDirection: 'row' }}>
                    <Grid>
                        <Col style={{ backgroundColor: '#fff', height: 200, borderRightWidth: 0.5, borderColor: '#ddd' }}>
                            <Row style={[styles.box, styles.centered, styles.boxPrimary]}>
                                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => Actions.farms()}>
                                    <FontAwesome name="android" style={[styles.icon, styles.textPrimary]}></FontAwesome>
                                    <Text style={[styles.textPrimary, styles.kanit]}>ผสมอาหาร</Text>
                                </TouchableOpacity>
                            </Row>
                            <Row style={[styles.box, styles.centered]}>
                                <TouchableOpacity style={{ alignItems: 'center' }}>
                                    <FontAwesome name="info-circle" style={[styles.icon]}></FontAwesome>
                                    <Text>วิธีใช้</Text>
                                </TouchableOpacity>
                            </Row>
                        </Col>
                        <Col style={{ backgroundColor: '#fff', height: 200, borderRightWidth: 0.5, borderColor: '#ddd' }}>
                            <Row style={[styles.box, styles.centered]}>
                                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => Actions.info()}>
                                    <FontAwesome name="book" style={[styles.icon]}></FontAwesome>
                                    <Text>ความรู้เรื่องสุกร</Text>
                                </TouchableOpacity>
                            </Row>
                            <Row style={[styles.box, styles.centered]}>
                                <TouchableOpacity style={{ alignItems: 'center' }}>
                                    <FontAwesome name="question-circle" style={[styles.icon]}></FontAwesome>
                                    <Text>เกี่ยวกับเรา</Text>
                                </TouchableOpacity>
                            </Row>
                        </Col>
                    </Grid>
                </View>
            </Container>
        );
    }
}

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
    textPrimary: {
        color: 'white',
        backgroundColor: 'transparent'
    },
    kanit: {
        fontFamily: 'Kanit-Regular'
    }
});
export default Home;
