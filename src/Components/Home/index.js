import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Container, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import firebase from 'react-native-firebase';
import { Cover } from '../common';
import styles from '../styles';

const Avaliable = require('../../../assets/img/icons/pig.png');
const Unavailable = require('../../../assets/img/icons/unavailable.png');
const Working = require('../../../assets/img/icons/working.png');
const BGMenu = require('../../../assets/img/menu/menu1_02.png');

class Home extends Component {
    componentWillMount() {
        this.setState({
            viewStatus: (
                <View style={{ width: 200, height: 200, backgroundColor: '#FFF3E0', borderRadius: 100, borderWidth: 1, borderColor: 'white', alignItems: 'center' }}>
                    <Image source={Avaliable} style={{ width: 96, height: 96, marginTop: 12 }} />
                    <Text style={[styles.kanit, { color: '#795548', fontSize: 22 }]}>พร้อมใช้งาน</Text>
                </View>
            ),
            doubleBackToExitPressedOnce: false
        });
        this.renderState();
    }

    renderState() {
        const work = firebase.database().ref('work');
        let status = '';
        work.on('value', (snapshot) => {
            if (snapshot.val() !== null) {
                status = snapshot.val().status;
                if (status === 0) {
                    this.setState({
                        viewStatus: (
                            <View style={{ width: 200, height: 200, backgroundColor: '#FFF3E0', borderRadius: 100, borderWidth: 1, borderColor: 'white', alignItems: 'center' }}>
                                <Image source={Avaliable} style={{ width: 96, height: 96, marginTop: 12 }} />
                                <Text style={[styles.kanit, { color: '#795548', fontSize: 22 }]}>พร้อมใช้งาน</Text>
                            </View>
                        )
                    });
                } else if (status === 1) {
                    this.setState({
                        viewStatus: (
                            <View style={{ width: 200, height: 200, backgroundColor: '#FFF3E0', borderRadius: 100, borderWidth: 1, borderColor: 'white', alignItems: 'center' }}>
                                <Image source={Working} style={{ width: 96, height: 96, marginTop: 12 }} />
                                <Text style={[styles.kanit, { color: '#795548', fontSize: 22 }]}>กำลังทำงาน</Text>
                            </View>
                        )
                    });
                } else {
                    this.setState({
                        viewStatus: (
                            <View style={{ width: 200, height: 200, backgroundColor: '#FFF3E0', borderRadius: 100, borderWidth: 1, borderColor: 'white', alignItems: 'center' }}>
                                <Image source={Unavailable} style={{ width: 96, height: 96, marginTop: 12 }} />
                                <Text style={[styles.kanit, { color: '#795548', fontSize: 22 }]}>ไม่พร้อมใช้งาน</Text>
                            </View>
                        )
                    });
                }
            } else {
                this.setState({
                    viewStatus: (
                        <View style={{ width: 200, height: 200, backgroundColor: '#FFF3E0', borderRadius: 100, borderWidth: 1, borderColor: 'white', alignItems: 'center' }}>
                            <Image source={Unavailable} style={{ width: 96, height: 96, marginTop: 12 }} />
                            <Text style={[styles.kanit, { color: '#795548', fontSize: 22 }]}>ไม่พร้อมใช้งาน</Text>
                        </View>
                    )
                });
            }
        });
    }

    render() {
        return (
            <Container>
                <View>
                    <Cover bgsource={BGMenu}>
                        <Text style={[styles.textPrimary, { fontSize: 26 }]}>Food{' '}
                            <Text style={{ color: 'orange', fontSize: 26 }}>Mixer</Text>{' '}
                            Machine
                        </Text>
                        <Text style={[styles.textPrimary, { fontSize: 14 }]}>เครื่องผสมอาหารสุกรอัตโนมัติ</Text>
                    </Cover>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {this.state.viewStatus}
                </View>
                <View style={{ backgroundColor: '#fff', flexDirection: 'row' }}>
                    <Grid>
                        <Col style={styles.boxCol}>
                            <Row style={[styles.box, styles.centered, styles.boxPrimary]}>
                                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => Actions.select()}>
                                    <FontAwesome name="android" style={[styles.iconBox, styles.textPrimary]} />
                                    <Text style={[styles.textPrimary, styles.kanit]}>ผสมอาหาร</Text>
                                </TouchableOpacity>
                            </Row>
                            <Row style={[styles.box, styles.centered]}>
                                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => Actions.foods()}>
                                    <FontAwesome name="apple" style={[styles.iconBox]} />
                                    <Text style={styles.kanit}>สูตรอาหาร</Text>
                                </TouchableOpacity>
                            </Row>
                        </Col>
                        <Col style={styles.boxCol}>
                            <Row style={[styles.box, styles.centered]}>
                                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => Actions.info()}>
                                    <FontAwesome name="book" style={[styles.iconBox]} />
                                    <Text style={styles.kanit}>ความรู้เรื่องสุกร</Text>
                                </TouchableOpacity>
                            </Row>
                            <Row style={[styles.box, styles.centered]}>
                                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => Actions.about()}>
                                    <FontAwesome name="question-circle" style={[styles.iconBox]} />
                                    <Text style={styles.kanit}>เกี่ยวกับเรา</Text>
                                </TouchableOpacity>
                            </Row>
                        </Col>
                    </Grid>
                </View>
            </Container>
        );
    }
}

export default Home;
