import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    AppRegistry,
    Image,
    TouchableOpacity
} from 'react-native';
import {
    Container,
    Card,
    CardItem,
    Content
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { MyHeader } from '../common';
import { Cover } from '../common';


const dream = require('../../../assets/img/about/dream.jpg');
const yong = require('../../../assets/img/about/yong.jpg');
const eye = require('../../../assets/img/about/eye.jpg');
const adviser = require('../../../assets/img/about/adviser.jpg');
const BGMenu = require('../../../assets/img/menu/menu1_05.png');

class About extends Component {
    render() {
        return (
            <Container>
                <MyHeader title="เกี่ยวกับเรา" />
                <Cover bgsource={BGMenu}>
                    <Text style={[styles.textPrimary, { fontSize: 26 }]}>About{' '}
                        <Text style={{ color: 'orange', fontSize: 26 }}>US</Text>{' '}
                    </Text>
                </Cover>
                <Content>
                    <Grid>
                        <Col>
                            <Row>
                                <Card>
                                    <CardItem>
                                        <View style={styles.Container}>
                                            <Image style={styles.imageSize} source={dream} />
                                            <View style={styles.rightContainer}>
                                                <Text style={styles.kanit}>1. นายกิตธิศักดิ์ พิมพ์โนนทอง</Text>
                                                <View style={styles.detail}>
                                                    <Text style={[styles.kanit, {fontSize: 10}]}>มหาวิทยาลัยขอนแก่น</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </CardItem>
                                </Card>
                            </Row>
                            <Row>
                                <Card>
                                    <CardItem>
                                        <View style={styles.Container}>
                                            <Image style={[styles.imageSize]} source={yong} />
                                            <View style={styles.rightContainer}>
                                                <Text style={styles.kanit}>2. นายสุกฤษฎิ์ ปราชญ์ประยูร</Text>
                                                <View style={styles.detail}>
                                                    <Text style={[styles.kanit, {fontSize: 10}]}>มหาวิทยาลัยขอนแก่น</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </CardItem>
                                </Card>
                            </Row>
                            <Row>
                                <Card>
                                    <CardItem>
                                        <View style={styles.Container}>
                                            <Image style={styles.imageSize} source={eye} />
                                            <View style={styles.rightContainer}>
                                                <Text style={styles.kanit}>3. นางสาวจิดาภา ปัตตานัง</Text>
                                                <View style={styles.detail}>
                                                    <Text style={[styles.kanit, {fontSize: 10}]}>มหาวิทยาลัยขอนแก่น</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </CardItem>
                                </Card>
                            </Row>
                            <Row>
                                <Card>
                                    <CardItem>
                                        <View style={styles.Container}>
                                            <Image style={styles.imageSize} source={adviser} />
                                            <View style={styles.rightContainer}>
                                                <Text style={styles.kanit}>รศ.ดร.จักรชัย โสอินทร์</Text>
                                                <View style={styles.detail}>
                                                    <Text style={[styles.kanit, {fontSize: 10}]}>อาจารย์ที่ปรึกษา</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </CardItem>
                                </Card>
                            </Row>
                        </Col>
                    </Grid>
                </Content>
            </Container >
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        padding: 20
    },
    kanit: {
        fontFamily: 'Kanit-Regular',
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 20
    },
    imageSize: {
        width: 80,
        height: 80,
        borderRadius: 4
    },
    textPrimary: {
        color: 'white',
        backgroundColor: 'transparent'
    },
    detail: {
        justifyContent: 'center', 
        alignItems: 'flex-end', 
        flex: 1
    }
});
export default About;
