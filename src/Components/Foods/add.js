import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button,
    Picker, Item as FormItem
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { MyHeader, Cover } from '../common';


class AddFood extends Component {
    render() {
        return (
            <Container>
                <MyHeader title='เพิ่มสูตรอาหารสุกร' />
                <Form>
                    <Item floatingLabel>
                        <Label>ชื่อสูตรอาหาร</Label>
                        <Input />
                    </Item>
                </Form>
                <Form>
                    <Picker
                        iosHeader="Select one"
                        mode="dropdown"
                        selectedValue={this.props.type}
                        onValueChange={(value) => this.props.typeChange(value)}
                    >
                        <Item label="เลือกวัตถุดิบ" value="" />
                        <Item label="สุกรเลียราง" value="สุกรเลียราง" />
                        <Item label="สุกรหย่านม" value="สุกรหย่านม" />
                        <Item label="สุกรรุ่น" value="สุกรรุ่น" />
                        <Item label="สุกรแม่พันธุ์" value="สุกรแม่พันธุ์" />
                        <Item label="สุกรพ่อพันธุ์" value="สุกรพ่อพันธุ์" />
                    </Picker>                    
                </Form>
            </Container>
        );
    }
}
export default AddFood;
