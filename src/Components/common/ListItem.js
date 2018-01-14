import React, { Component } from 'react';
import { Text, TouchableOpacity,View, Image } from 'react-native';
import { Card, CardItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Actions} from 'react-native-router-flux';
import styles from '../styles';

const pig01 = require('../../../assets/img/pigs/pig01.png');

class ListItem extends Component {
  render() {
    const farm = this.props.farm;

    return (
      <Grid>
        <Col>
            <Row>
                <Card>
                    <CardItem>
                        <TouchableOpacity onPress={() => Actions.pigs({uid: farm.uid})}>
                            <View>
                                <Image source={pig01} style={{ width: 150, height: 150, borderRadius: 4 }} />
                            </View>
                            <View style={{ borderTopWidth: 0.5, borderColor: '#ddd', marginTop: 8, alignItems: 'center' }}>
                                <Text style={styles.caption}>{farm.name}</Text>
                            </View>
                        </TouchableOpacity>
                    </CardItem>
                </Card>
            </Row>
        </Col>
      </Grid>
    );
  }
}


export { ListItem };