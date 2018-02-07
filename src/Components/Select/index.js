import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { View, TouchableOpacity, ImageBackground, StyleSheet, Image, Alert} from 'react-native';
import { Container, Content, Text, Card, CardItem, Button, Picker, Item, Input } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { MyHeader, Cover } from '../common';
import styles from '../styles';

const BGMenu = require('../../../assets/img/menu/menu1_05.png');

class Select extends Component {
    componentWillMount() {
        this.setState({
            type: 'สุกรเลียราง',
            amount: 0,
            food: '1'
        });
    }

    onBackPress = () => {
        if (Actions.state.index === 0) {
            return false;
        }
        Actions.pop();
        return true;
    }

    goMixer() {
        if (this.state.type === '') {
            Alert.alert('กรุณาเลือกประเภทสุกร');
        } else
            if (this.state.amount <= 0) {
                Alert.alert('กรุณาระบุจำนวนสุกรมากกว่า 0');
            } else {
                Actions.mixer();
            }
    }

    render() {
        return (
            <Container>
                <MyHeader title='เลือกสูตรอาหาร' />
                <Cover bgsource={BGMenu}>
                    <Text style={[styles.textPrimary, { fontSize: 26 }]}>Food{' '}
                        <Text style={{ color: 'orange', fontSize: 26 }}>Mixer</Text>{' '}
                        Machine
                        </Text>
                    <Text style={[styles.textPrimary, styles.kanit, { fontSize: 16 }]}>เลือกสูตรอาหาร</Text>
                </Cover>
                <Content contentContainerStyle={{ flex: 1 }}>
                    <View style={{ flex: 1, padding: 8 }}>
                        <Card>
                            <CardItem>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ color: '#999' }}>ประเภทสุกร</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 3 }}>
                                            <Picker
                                                iosHeader="เลือกประเภทสุกร"
                                                mode="dropdown"
                                                selectedValue={this.state.type}
                                                onValueChange={(val) => this.setState({ type: val })}
                                            >
                                                <Item label="เลือกประเภทสุกร" value="" />
                                                <Item label="สุกรเลียราง" value="สุกรเลียราง" />
                                                <Item label="สุกรหย่านม" value="สุกรหย่านม" />
                                                <Item label="สุกรรุ่น" value="สุกรรุ่น" />
                                                <Item label="สุกรขุน" value="สุกรขุน" />
                                                <Item label="สุกรแม่พันธุ์" value="สุกรแม่พันธุ์" />
                                                <Item label="สุกรพ่อพันธุ์" value="สุกรพ่อพันธุ์" />
                                            </Picker>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Input
                                                placeholder={'จำนวน'}
                                                onChangeText={(val) => this.setState({ amount: val })}
                                                keyboardType={'numeric'}
                                            />
                                        </View>
                                    </View>
                                    <Text style={{ color: '#999' }}>สูตรอาหาร</Text>
                                    <Picker
                                        iosHeader="สูตรอาหาร"
                                        mode="dropdown"
                                        selectedValue={this.state.food}
                                        onValueChange={(val) => this.setState({ type: val })}
                                    >
                                        <Item label="ค่าเริ่มต้น" value="1" />
                                        <Item label="อาหาร 308" value="อาหาร 308" />
                                        <Item label="อาหาร 402" value="อาหาร 402" />
                                        <Item label="อาหาร 117" value="อาหาร 117" />
                                    </Picker>
                                </View>
                            </CardItem>
                        </Card>
                    </View>
                    <View style={{ height: 45 }}>
                        <Button info block style={{ borderRadius: 0 }} onPress={() => this.goMixer()}>
                            <Text style={styles.kanit}>ตกลง</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}
export default Select;
