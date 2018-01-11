import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { Container } from 'native-base';
import { MyHeader } from '../common';

class Farms extends Component {
    render() {
        return (
            <Container>
                <MyHeader title='ฟาร์ม'>
                    <TouchableOpacity onPress={() => Actions.addFarm()}>
                        <FontAwesome name="plus-circle" style={[styles.icon]} />
                    </TouchableOpacity>
                </MyHeader>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#795548'
    },
    icon: {
        fontSize: 20,
        color: 'white'
    },
    kanit: {
        fontFamily: 'Kanit-Regular'
    }
});
export default Farms;
