import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase';
import { Input, View, Label, Container, Card, CardItem, Content, Button, Text, Picker, Form, Item as FormItem } from 'native-base';
import { MyHeader, Cover } from '../common';
import { typeChange, amountChange } from '../../Actions';
import styles from '../styles';

const BGMenu = require('../../../assets/img/menu/menu1_04.png');
const Item = Picker.Item;

class AddPig extends Component {

    submit(name, picture) {
        firebase.database().ref('pigs').push({ name, picture })
        .then(() => {
            Actions.pop();
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
                    <Text style={[styles.textPrimary, { fontSize: 14 }]}>เพิ่มข้อมูลสุกรของท่าน {this.props.type}</Text>
                </Cover>
                <Content contentContainerStyle={{ flex: 1 }}>
                    <Card>
                        <CardItem>
                            <View style={{ flex: 1 }}>
                                <Form>
                                    <Picker
                                        iosHeader="Select one"
                                        mode="dropdown"
                                        selectedValue={this.props.type}
                                        onValueChange={(value) => this.props.typeChange(value)}
                                    >
                                        <Item label="เลือกประเภทหมู" value="" />
                                        <Item label="สุกรเลียราง" value="1" />
                                        <Item label="สุกรหย่านม" value="2" />
                                        <Item label="สุกรรุ่น" value="3" />
                                        <Item label="สุกรแม่พันธุ์" value="4" />
                                        <Item label="สุกรพ่อพันธุ์" value="5" />
                                    </Picker>
                                    <FormItem floatingLabel>
                                        <Label>จำนวนสุกร</Label>
                                        <Input keyboardType={'numeric'} onChangeText={(text) => this.props.amountChange(text)} value={this.props.amount} />
                                    </FormItem>
                                </Form>
                            </View>

                        </CardItem>
                    </Card>
                    <View style={{ flex: 1, justifyContent: 'flex-end', }}>
                        <Button style={{ borderRadius: 0 }} block warning onPress={() => this.submit()}>
                            <FontAwesome style={styles.iconButton} name='floppy-o' />
                            <Text style={styles.kanit}>บันทึก</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}
const mapStateToProps = ({ pig }) => {
    const { type, amount } = pig;

    return { type, amount };
};

export default connect(mapStateToProps, {
    typeChange,
    amountChange
})(AddPig);
