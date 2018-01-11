import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { MyHeader, Cover } from '../common';
import {
    Container,
    Text,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button
} from 'native-base';
import styles from '../styles';

const BGMenu = require('../../../assets/img/menu/menu1_04.png');
const ImgUpload = require('../../../assets/img/icons/uploadbtn.png');
var ImagePicker = require('react-native-image-picker');

<<<<<<< HEAD
class addFarms extends Component {
    componentWillMount(){
        this.setState({
            img: ImgUpload,
            farmName: ''
        });
    }
=======
class AddFarms extends Component {
>>>>>>> 5b15b846057b8f4b8416332445866a7aeda2052b
    render() {
        return (
            <Container>
                <MyHeader title='เพิ่มฟาร์ม' />
                <Cover bgsource={BGMenu}>
                    <Text style={[styles.textPrimary, { fontSize: 26 }]}>Food{' '}
                        <Text style={{ color: 'orange', fontSize: 26 }}>Mixer</Text>{' '}
                        Machine
                        </Text>
                    <Text style={[styles.textPrimary, { fontSize: 14 }]}>เพิ่มข้อมูลฟาร์มของท่าน</Text>
                </Cover>
                <Content contentContainerStyle={{ flex: 1 }}>
                    <View style={[styles.row, { flex: 1, backgroundColor: '#fff' }]}>
                        <Form>
                            <Item floatingLabel>
                                <Label>ชื่อฟาร์ม {this.state.farmName}</Label>
                                <Input onChangeText={(text) => this.setState({farmName: text})} value={this.state.farmName} />
                            </Item>
                        </Form>
                        <View style={[styles.row, { alignItems: 'center', marginTop: 8 }]}>
                            <Text style={styles.textMedium}>รูปฟาร์ม</Text>
                            <TouchableOpacity onPress={() => this.show()}>
                                <Image source={this.state.img} style={{ marginTop: 32, width: 140, height: 140 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Button style={{ borderRadius: 0 }} block warning>
                        <FontAwesome style={styles.iconButton} name='floppy-o' />
                        <Text>บันทึก</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
    show() {
        ImagePicker.showImagePicker((response) => {
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

<<<<<<< HEAD
                this.setState({
                    img: source
                });
            }
        });
    }
}

export default addFarms;
=======
export default AddFarms;
>>>>>>> 5b15b846057b8f4b8416332445866a7aeda2052b
