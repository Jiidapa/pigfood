import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, TouchableOpacity, Platform } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';
import firebase from 'react-native-firebase';
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
import RNFetchBlob from 'react-native-fetch-blob';
import { MyHeader, Cover } from '../common';
import { nameChange, pictureChange } from '../../Actions';
import styles from '../styles';

// Prepare Blob support
const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;
const BGMenu = require('../../../assets/img/menu/menu1_04.png');
const sessionId = new Date().getTime();

class AddFarm extends Component {

    uploadImage(uri, mime = 'image/jpg') {
        return new Promise((resolve, reject) => {
          const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
          let uploadBlob = null;
    
          const imageRef = firebase.storage().ref('images').child(`${sessionId}`);
    
          fs.readFile(uploadUri, 'base64')
            .then((data) => {
              return Blob.build(data, { type: `${mime};BASE64` });
            })
            .then((blob) => {
              uploadBlob = blob;
              return imageRef.put(blob._ref, { contentType: mime });
            })
            .then(() => {
              uploadBlob.close();
              return imageRef.getDownloadURL();
            })
            .then((url) => {
              resolve(url);
            })
            .catch((error) => {
              reject(error);
          });
        });
      }

    show() {
        ImagePicker.showImagePicker((response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                this.uploadImage(response.uri)
                .then(url => { 
                    alert('uploaded'); 
                    this.props.pictureChange({ uri: url });
                })
                .catch(error => console.log(error));
            }
        });
    }

    submit(name, picture) {
        firebase.database().ref('farms').push({ name, picture: picture.uri})
        .then(() => {
            Actions.pop();
        });
    }

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
                                <Label>ชื่อฟาร์ม {this.props.name}</Label>
                                <Input onChangeText={this.props.nameChange.bind()} value={this.props.name} />
                            </Item>
                        </Form>
                        <View style={[styles.row, { alignItems: 'center', marginTop: 8 }]}>
                            <Text style={styles.textMedium}>รูปฟาร์ม</Text>
                            <TouchableOpacity onPress={() => this.show()}>
                                <Image source={this.props.picture} style={{ marginTop: 32, width: 140, height: 140 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Button style={{ borderRadius: 0 }} block warning onPress={() => this.submit(this.props.name, this.props.picture)}>
                        <FontAwesome style={styles.iconButton} name='floppy-o' />
                        <Text style={styles.kanit}>บันทึก</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = ({ farm }) => {
    const { name, picture } = farm;

    return { name, picture };
};

export default connect(mapStateToProps, {
    nameChange,
    pictureChange
})(AddFarm);
