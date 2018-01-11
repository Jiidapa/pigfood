import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Container } from 'native-base';
import { MyHeader } from '../common';
import styles from '../styles';

class AddPig extends Component {
    render() {
        return (
            <Container>
                <MyHeader title='เพิ่มข้อมูลหมู' />
            </Container>
        );
    }
}
export default AddPig;
