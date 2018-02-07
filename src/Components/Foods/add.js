import React, { Component } from 'react';
import { View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
    Container,
    Content,
    Card,
    CardItem,
    Text,
    Form,
    Item,
    Input,
    Label,
    Button,
    Icon,
    Picker, Item as FormItem
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { MyHeader, Cover } from '../common';
import styles from '../styles';

const BGMenu = require('../../../assets/img/menu/menu1_04.png');

class AddFood extends Component {

    componentWillMount() {
        this.setState({
            counter: 1,
            material: [
                {
                    value: ''
                }
            ]
        });
    }

    setValue(i, value) {
        if (this.state.material[i].value != null) {
            this.state.material[i].value = value;
        }
    }

    addItem() {
        this.setState({
            counter: this.state.counter + 1,
        });
        this.state.material.push({ value: '' });
    }

    delItem() {
        this.setState({
            counter: this.state.counter - 1,
        });
        this.state.material.pop();
    }

    renderDropDown() {
        const items = [];
        for (let i = 0; i < this.state.counter; i++) {
            items.push(
                <View style={{ flexDirection: 'row' }} key={i}>
                    <View style={{ flex: 3 }}>
                        <Picker
                            mode="dropdown"
                            placeholder={`${i + 1} ส่วนผสม`}
                        selectedValue={this.state.material[i].value}
                        onValueChange={(value) => this.setValue(i, value)}
                        >
                            <Item label="ข้าวโพดบด" value="0" />
                            <Item label="รำละเอียด" value="1" />
                            <Item label="กากถั่วเหลือง" value="2" />
                            <Item label="ปลาป่น" value="3" />
                            <Item label="ไดแคลเซียมฟอสเฟส" value="4" />
                            <Item label="เกลือป่น" value="5" />
                            <Item label="ไวตามินแร่ธาตุ(พรีมิกซ์)" value="6" />
                        </Picker>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Item>
                            <Input placeholder="กก." />
                        </Item>
                    </View>

                </View>
            );
        }

        return (
            <View>
                {items}
            </View>
        );
    }

    render() {
        return (
            <Container>
                <MyHeader title='เพิ่มสูตรอาหาร' />
                <Cover bgsource={BGMenu}>
                    <Text style={[styles.textPrimary, { fontSize: 26 }]}>Food{' '}
                        <Text style={{ color: 'orange', fontSize: 26 }}>Mixer</Text>{' '}
                        Machine
                        </Text>
                    <Text style={[styles.textPrimary, { fontSize: 14 }]}>เพิ่มสูตรอาหารของท่าน {this.props.type}</Text>
                </Cover>
                <Content contentContainerStyle={{ flex: 1 }}>
                    <View style={{ flex: 1, padding: 8 }}>
                        <Form>
                            <Item>
                                <Input placeholder="ชื่อสูตรอาหาร" />
                            </Item>
                        </Form>
                        <Card>
                            <CardItem>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Button info onPress={() => this.addItem()}>
                                            <Text>ADD</Text>
                                        </Button>
                                        <Text> </Text>
                                        <Button danger onPress={() => this.delItem()}>
                                            <Text>DEL</Text>
                                        </Button>
                                    </View>
                                    {this.renderDropDown()}
                                </View>
                            </CardItem>
                        </Card>
                    </View>
                    <Button style={{ borderRadius: 0 }} block warning onPress={() => this.submit(this.props.type, this.props.amount)}>
                        <FontAwesome style={styles.iconButton} name='floppy-o' />
                        <Text style={styles.kanit}>บันทึก</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
export default AddFood;
