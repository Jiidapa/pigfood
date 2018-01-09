import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome, { Button } from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Actions } from 'react-native-router-flux';
import {
    Container,
    Header,
    Text,
    Body,
    Left,
    Content,
    Form,
    Item,
    Input,
    Label
} from 'native-base';
class Farms extends Component {
    render() {
        return (
            <Container>
                <Header style={[styles.header]}>
                    <Left>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <FontAwesome name="arrow-left" style={[styles.icon]}></FontAwesome>
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Text style={[styles.kanit, { color: 'white', textAlign: 'center' }]}>เพิ่มฟาร์ม</Text>
                    </Body>
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>ชื่อฟาร์ม</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>เพิ่มรูปฟาร์ม</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Button rounded success>
                        <Text> บันทึก </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#795548',
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
