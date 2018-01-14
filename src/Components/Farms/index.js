import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Text, Card, CardItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { MyHeader } from '../common';
import styles from '../styles';
import { farmFetch } from '../../Actions';
import { connect } from 'react-redux';

const farm1 = require('../../../assets/img/menu/menu1_02.png');
const farm2 = require('../../../assets/img/menu/menu1_03.png');

class Farms extends Component {
    componentWillMount() {
        this.props.farmFetch();
    }
    render() {
        return (
            <Container>
                <MyHeader title='ฟาร์ม'>
                    <TouchableOpacity onPress={() => Actions.addFarm()}>
                        <FontAwesome name="plus-circle" style={[styles.icon]} />
                    </TouchableOpacity>
                </MyHeader>
                <Content>
                    <Grid>
                        <Col>
                            <Row>
                                <Card>
                                    <CardItem>
                                        <TouchableOpacity onPress={() => Actions.pigs()}>
                                            <View>
                                                <Image source={farm1} style={{ width: 150, height: 150, borderRadius: 4 }} />
                                            </View>
                                            <View style={{ borderTopWidth: 0.5, borderColor: '#ddd', marginTop: 8, alignItems: 'center' }}>
                                                <Text style={styles.caption}>ฟาร์มโชมัย</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </CardItem>
                                </Card>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Card>
                                    <CardItem>
                                        <TouchableOpacity>
                                            <View>
                                                <Image source={farm2} style={{ width: 150, height: 150, borderRadius: 4 }} />
                                            </View>
                                            <View style={{ borderTopWidth: 0.5, borderColor: '#ddd', marginTop: 8, alignItems: 'center' }}>
                                                <Text style={styles.caption}>ฟาร์มโชว์เฉยๆ</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </CardItem>
                                </Card>
                            </Row>
                        </Col>
                    </Grid>
                </Content>
            </Container>
        );
    }
}

export default connect(null, { farmFetch })(Farms);
