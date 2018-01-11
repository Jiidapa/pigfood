import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Container, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';

const BGMenu = require('../../../assets/img/menu/menu1_02.png');

class Home extends Component {

    render() {
        return (
            <Container>
                <View style={{ flex: 1 }}>
                    <ImageBackground source={BGMenu} style={[styles.header, styles.centered]}>
                        <View style={[styles.centered, styles.headerView]} />
                        <View style={{ position: 'absolute' }}>
                        <Text style={[styles.textPrimary, { fontSize: 26 }]}>Food{' '}
                            <Text style={{ color: 'orange', fontSize: 26 }}>Mixer</Text>{' '}
                            Machine
                        </Text>
                        <Text style={[styles.textPrimary, { fontSize: 14 }]}>เครื่องผสมอาหารสุกรอัตโนมัติ</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ backgroundColor: '#fff', flexDirection: 'row' }}>
                    <Grid>
                        <Col style={{ backgroundColor: '#fff', height: 200, borderRightWidth: 0.5, borderColor: '#ddd' }}>
                            <Row style={[styles.box, styles.centered, styles.boxPrimary]}>
                                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => Actions.farms()}>
                                    <FontAwesome name="android" style={[styles.icon, styles.textPrimary]} />
                                    <Text style={[styles.textPrimary, styles.kanit]}>ผสมอาหาร</Text>
                                </TouchableOpacity>
                            </Row>
                            <Row style={[styles.box, styles.centered]}>
                                <TouchableOpacity style={{ alignItems: 'center' }}>
                                    <FontAwesome name="info-circle" style={[styles.icon]} />
                                    <Text>วิธีใช้</Text>
                                </TouchableOpacity>
                            </Row>
                        </Col>
                        <Col style={{ backgroundColor: '#fff', height: 200, borderRightWidth: 0.5, borderColor: '#ddd' }}>
                            <Row style={[styles.box, styles.centered]}>
                                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => Actions.info()}>
                                    <FontAwesome name="book" style={[styles.icon]} />
                                    <Text>ความรู้เรื่องสุกร</Text>
                                </TouchableOpacity>
                            </Row>
                            <Row style={[styles.box, styles.centered]}>
                                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => Actions.about()}>
                                    <FontAwesome name="question-circle" style={[styles.icon]} />
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
