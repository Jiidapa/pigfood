import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Container, Content, Text, Card, CardItem } from 'native-base';
import { MyHeader } from '../common';
import styles from '../styles';
import { Col, Row, Grid } from 'react-native-easy-grid';
const pig1 = require('../../../assets/img/knowledge/knowledge03.jpg');
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
                        <TouchableOpacity onPress={() => Actions.Foods()}>
                            <Row>
                                <Card>
                                    <CardItem>
                                            <Image source={pig1} style={{ width: 150, height: 150, borderRadius: 4 }} />
                                            <View style={{paddingLeft: 20}}>
                                                <Text>ประเภท : หมูอาย</Text>
                                                <Text>จำนวน : 1 ตัว</Text>
                                            </View>
                                    </CardItem>
                                </Card>
                            </Row>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <Row>
                                <Card>
                                    <CardItem>
                                        <Image source={pig1} style={{ width: 150, height: 150, borderRadius: 4 }} />
                                        <View style={{paddingLeft: 20}}>
                                            <Text>ประเภท : หมูดรีม</Text>
                                            <Text>จำนวน : 1 ตัว</Text>
                                        </View>
                                    </CardItem>
                                </Card>
                            </Row>
                            </TouchableOpacity>
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
