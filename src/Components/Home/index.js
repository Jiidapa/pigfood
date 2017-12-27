import React, { Component } from 'react';
import { View, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import {
    Container,
    Button,
    Header,
    Text,
    Left,
    Icon,
    Right,
    Body,
    Title
} from 'native-base';
import { Actions } from 'react-native-router-flux';

const bg_menu_1 = require('../../../assets/img/menu/menu1_02.png');
const bg_menu_2 = require('../../../assets/img/menu/menu1_03.png');
const bg_menu_3 = require('../../../assets/img/menu/menu1_04.png');
const bg_menu_4 = require('../../../assets/img/menu/menu1_05.png');

class Home extends Component {

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#1E88E5' }}>
                    {/* <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left> */}
                    <Body>
                        <Title style={styles.kanit}>เครื่องผสมอาหารสุกร</Title>
                    </Body>
                </Header>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => Actions.info()}>
                    <View style={[{ flex: 1 }, styles.box]}>
                        <Text style={styles.kanit}>ความรู้สุกร</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => Actions.farm()}>
                    <View style={[{ flex: 1 }, styles.box]}>
                        <Text style={styles.kanit}>ผสมอาหาร</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity style={{ flex: 1 }}>
                        <View style={[{ flex: 1 }, styles.box]}>
                            <Text style={styles.kanit}>วิธีใช้</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }}>
                        <View style={[{ flex: 1 }, styles.box]}>
                            <Text style={styles.kanit}>เกี่ยวกับเรา</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    kanit: {
        fontFamily: 'Kanit-Regular'
    }
});
export default Home;
