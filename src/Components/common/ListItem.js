import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { Card, CardItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import Swipeout from 'react-native-swipeout';
import styles from '../styles';

const pig01 = require('../../../assets/img/pigs/pig01.png');

let swipeBtns = [
    {
        text: 'Edit',
        backgroundColor: 'orange',
        underlayColor: 'rgba(0, 0, 0, 1, 0.6)'
        // onPress: () => { this.duplicateNote(rowData) }
    },
    {
        text: 'Delete',
        backgroundColor: 'red',
        underlayColor: 'rgba(0, 0, 0, 1, 0.6)'
        //   onPress: () => { this.deleteNote(rowData) }
    }
];

class ListItem extends Component {
    render() {
        const farm = this.props.farm;

        return (
            <Swipeout right={swipeBtns} backgroundColor='white' style={{ marginBottom: 8 }}>
                <TouchableOpacity onPress={() => Actions.pigs({ uid: farm.uid })}>
                    <Row>
                        {/* <Card> */}
                        <CardItem style={{ backgroundColor: 'white', opacity: 0.8 }}>
                            <View>
                                <Image source={pig01} style={{ width: 56, height: 56 }} />
                            </View>
                            <View style={{ paddingLeft: 20 }}>
                                <Text style={[styles.kanit, { color: '#000' }]}>ชื่อฟาร์ม : <Text style={{ color: '#666' }}>{farm.name}</Text></Text>
                                <Text style={[styles.kanit, { color: '#000' }]}>รายละเอียด : <Text  style={{ color: '#666' }}>{farm.detail}</Text></Text>
                            </View>
                        </CardItem>
                        {/* </Card> */}
                    </Row>
                </TouchableOpacity>
            </Swipeout>
        );
    }
}


export { ListItem };