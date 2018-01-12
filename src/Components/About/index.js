import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    AppRegistry,
    Image,
} from 'react-native';
import { Container } from 'native-base';
import { MyHeader } from '../common';
const dream = require('../../../assets/img/about/dream.jpg');
const yong = require('../../../assets/img/about/yong.jpg');
const eye = require('../../../assets/img/about/eye.jpg');

class About extends Component {
    render() {
        return (
            <Container>
                <MyHeader title="เกี่ยวกับเรา" />
                <View style={styles.Container}>
                    <Image style={styles.imageSize}                    
                source={dream} />
                <View style={styles.rightContainer}>
                        <Text style={styles.kanit}>1. นายกิตธิศักดิ์ พิมพ์โนนทอง</Text>
                    </View>
                </View>
                <View style={styles.Container}>
                    <Image style={styles.imageSize}                    
                source={yong} />
                <View style={styles.rightContainer}>
                        <Text style={styles.kanit}>2. นายสุกฤษฎิ์ ปราชญ์ประยูร</Text>
                    </View>
                </View>
                <View style={styles.Container}>
                    <Image style={styles.imageSize}                    
                source={eye} />
                <View style={styles.rightContainer}>
                        <Text style={styles.kanit}>3. นางสาวจิดาภา ปัตตานัง</Text>
                    </View>
                </View>
            </Container >
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        padding: 20,
    },
    kanit: {
        fontFamily: 'Kanit-Regular',
    },
    rightContainer: {
        flex: 1,
        paddingLeft:20,
    },
    imageSize: {
        width: 80,
        height: 80,
    },
});
export default About;
