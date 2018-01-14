import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Container, Content, Text, Card, CardItem } from 'native-base';
import { MyHeader } from '../common';
import styles from '../styles';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Swipeout from 'react-native-swipeout';


let swipeBtns = [
    {
        text: 'Edit',
        backgroundColor: 'orange',
        underlayColor: 'rgba(0, 0, 0, 1, 0.6)'
        // onPress: () => { this.duplicateNote(rowData) }
     },
    {
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'rgba(0, 0, 0, 1, 0.6)'
    //   onPress: () => { this.deleteNote(rowData) }
   }
  ];
class Pigs extends Component {
    render() {
        return (
            <Container>
                <MyHeader title='แสดงรายการหมู'>
                    <TouchableOpacity onPress={() => Actions.addPig()}>
                        <FontAwesome name="plus-circle" style={[styles.icon]} />
                    </TouchableOpacity>
                </MyHeader>
                <Content>
                    <Grid>
                        <Col>
                        <Swipeout right={swipeBtns} backgroundColor= 'transparent'>
                        <TouchableOpacity onPress={() => Actions.Foods()}>
                            <Row>
                                <Card>
                                    <CardItem>
                                            <View style={{paddingLeft: 20}}>
                                                <Text>ประเภท : หมูอาย</Text>
                                                <Text>จำนวน : 1 ตัว</Text>
                                            </View>
                                    </CardItem>
                                </Card>
                            </Row>
                            </TouchableOpacity>
                        </Swipeout>
                            <TouchableOpacity>
                            <Row>
                                <Card>
                                    <CardItem>
                                        <View style={{paddingLeft: 20}}>
                                            <Text>ประเภท : หมูดรีม</Text>
                                            <Text>จำนวน : 1 ตัว</Text>
                                        </View>
                                    </CardItem>
                                </Card>
                            </Row>
                            </TouchableOpacity>
                        </Col>
                    </Grid>
                </Content>
            </Container>
        );
    }
}
const styles_in = StyleSheet.create({
    section: {
        flexDirection: 'row'
    }
});
export default Pigs;
