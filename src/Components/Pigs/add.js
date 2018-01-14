import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity, Image, Platform } from 'react-native';
import { Input, View, Label, Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";
import { MyHeader, Cover } from '../common';
import styles from '../styles';
const BGMenu = require('../../../assets/img/menu/menu1_04.png');
const Item = Picker.Item;

class AddPig extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected1: "key1"
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected1: value
        });
    }
    render() {
        return (
            <Container>
                <MyHeader title="เพิ่มสุกร" />
                <Cover bgsource={BGMenu}>
                    <Text style={[styles.textPrimary, { fontSize: 26 }]}>Food{' '}
                        <Text style={{ color: 'orange', fontSize: 26 }}>Mixer</Text>{' '}
                        Machine
                        </Text>
                    <Text style={[styles.textPrimary, { fontSize: 14 }]}>เพิ่มข้อมูลสุกรของท่าน</Text>
                </Cover>
                <Content contentContainerStyle={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 100, paddingTop: 14, paddingLeft: 20 }}>
                            <Text style={styles.kanit}>ชนิดสุกร</Text>
                        </View>
                        <View>
                            <Form style={{ width: 200, }}>

                                <Picker
                                    iosHeader="Select one"
                                    mode="dropdown"
                                    selectedValue={this.state.selected1}
                                    onValueChange={this.onValueChange.bind(this)}
                                >
                                    <Item label="สุกรเลียราง" value="key0" />
                                    <Item label="สุกรหย่านม" value="key1" />
                                    <Item label="สุกรรุ่น" value="key2" />
                                    <Item label="สุกรแม่พันธุ์" value="key3" />
                                    <Item label="สุกรพ่อพันธุ์" value="key4" />
                                </Picker>
                            </Form>
                        </View>
                    </View>
                    <Form>
                        <FormItem>
                            <Input style={styles.kanit} placeholder="จำนวนสุกร" />
                        </FormItem>
                    </Form>
                    <View style={{ flex: 1, justifyContent: 'flex-end', }}>
                        <Button style={{ borderRadius: 0 }} block warning>
                            <FontAwesome style={styles.iconButton} name='floppy-o' />
                            <Text style={styles.kanit}>บันทึก</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}
export default AddPig;
