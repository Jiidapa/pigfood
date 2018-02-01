import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { View, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native';
import { Container, Content, Text, Card, CardItem, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { MyHeader, Cover } from '../common';
import styles from '../styles';

const BGMenu = require('../../../assets/img/menu/menu1_05.png');

class Mixer extends Component {
    render() {
        return (
            <Container>
                <MyHeader title='ผสมอาหาร' />
                <Cover bgsource={BGMenu}>
                    <Text style={[styles.textPrimary, { fontSize: 26 }]}>Food{' '}
                        <Text style={{ color: 'orange', fontSize: 26 }}>Mixer</Text>{' '}
                        Machine
                        </Text>
                    <Text style={[styles.textPrimary, { fontSize: 14 }]}>ผสมอาหาร</Text>
                </Cover>
                <Content contentContainerStyle={{ flex: 1 }}>
                    <View style={{ flex: 1, padding: 8 }}>
                        <Card>
                            <CardItem>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={[styles.kanit, { color: '#666', fontSize: 20 }]}>ส่วนผสม</Text>
                                        <Text style={[styles.kanit, { color: '#666', fontSize: 20 }]}>กิโลกรัม</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text> • ข้าวโพดบด</Text>
                                        <Text>76.00</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text> • รำละเอียด</Text>
                                        <Text>10.00</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text> • กากถ่วเหลือง</Text>
                                        <Text>7.50</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text> • ปลาป่น</Text>
                                        <Text>5.50</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text> • ไดแคลเซียมฟอสเฟส</Text>
                                        <Text>1.80</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text> • เกลือป่น</Text>
                                        <Text>0.35</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text> • ไวตามินแร่ธาตุ(พรีมิกซ์)</Text>
                                        <Text>0.25</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text>รวม</Text>
                                        <Text>100.00</Text>
                                    </View>
                                </View>
                            </CardItem>
                        </Card>
                    </View>
                    <View style={{ height: 45 }}>
                        <Button info block style={{ borderRadius: 0 }}>
                            <Text>ยืนยัน</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}
export default Mixer;
