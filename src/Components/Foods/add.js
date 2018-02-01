import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Platform } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import {
    Container,
    Text,
    Content,
    Button
} from 'native-base';
import { MyHeader, Cover } from '../common';
import styles from '../styles';

const BGMenu = require('../../../assets/img/menu/menu1_03.png');

class AddFood extends Component {
    render() {
        return (
            <Container>
                <MyHeader title='เพิ่มสูตรอาหาร' />
                <Cover bgsource={BGMenu}>
                    <Text style={[styles.textPrimary, { fontSize: 26 }]}>Food{' '}
                        <Text style={{ color: 'orange', fontSize: 26 }}>Mixer</Text>{' '}
                        Machine
                        </Text>
                    <Text style={[styles.textPrimary, { fontSize: 14 }]}>เพิ่มข้อมูลสูตรอาหารของท่าน</Text>
                </Cover>
                <Content contentContainerStyle={{ flex: 1 }}>
                    <View style={[styles.row, { flex: 1, backgroundColor: '#fff' }]}>
                    
                    </View>
                    <Button style={{ borderRadius: 0 }} block warning>
                        <FontAwesome style={styles.iconButton} name='floppy-o' />
                        <Text>บันทึก</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
export default AddFood;
