import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import {MyHeader} from '../common';
import styles from '../styles';
class Foods extends Component {
    render() {
        return (
            <MyHeader title='แสดงรายการอาหาร'>
                    <TouchableOpacity onPress={() => Actions.addFood()}>
                        <FontAwesome name="plus-circle" style={[styles.icon]} />
                    </TouchableOpacity>
            </MyHeader>
        );
    }
}
export default Foods;
