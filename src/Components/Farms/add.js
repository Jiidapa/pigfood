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

var ImagePicker = require('react-native-image-picker');
var options = {
    title: 'Select Avatar',
    customButtons: [
        { name: 'fb', title: 'Choose Photo from Facebook' },
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};
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
                        <TouchableOpacity onPress={this.show.bind.apply(this)}>
                            <Button>
                                <Text>Choose</Text>
                            </Button>
                        </TouchableOpacity>
                    </Form>
                    <Button rounded success>
                        <Text> บันทึก </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
    show() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
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
