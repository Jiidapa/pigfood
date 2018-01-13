import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Container, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import { Cover } from '../common';
import styles from '../styles';

const BGMenu = require('../../../assets/img/menu/menu1_02.png');

class Home extends Component {

    render() {
        return (
            <Container>
                <View style={{ flex: 1 }}>
                    <Cover bgsource={BGMenu}>
                        <Text style={[styles.textPrimary, { fontSize: 26 }]}>Food{' '}
                        <Text style={{ color: 'orange', fontSize: 26 }}>Mixer</Text>{' '}
                                Machine
                        </Text>
                        <Text style={[styles.textPrimary, { fontSize: 14 }]}>เครื่องผสมอาหารสุกรอัตโนมัติ</Text>
                    </Cover>
                </View>
                <View style={{ backgroundColor: '#fff', flexDirection: 'row' }}>
                    <Grid>
                        <Col style={styles.boxCol}>
                            <Row style={[styles.box, styles.centered, styles.boxPrimary]}>
                                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => Actions.farms()}>
                                    <FontAwesome name="android" style={[styles.iconBox, styles.textPrimary]} />
                                    <Text style={[styles.textPrimary, styles.kanit]}>ผสมอาหาร</Text>
                                </TouchableOpacity>
                            </Row>
                            <Row style={[styles.box, styles.centered]}>
                                <TouchableOpacity style={{ alignItems: 'center' }}>
                                    <FontAwesome name="info-circle" style={[styles.iconBox]} />
                                    <Text style={styles.kanit}>วิธีใช้</Text>
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
