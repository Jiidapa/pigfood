import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, ListView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Text, Card, CardItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { MyHeader, ListItem } from '../common';
import styles from '../styles';
import { farmFetch } from '../../Actions';
import { connect } from 'react-redux';
import _ from 'lodash';

const farm1 = require('../../../assets/img/menu/menu1_02.png');
const farm2 = require('../../../assets/img/menu/menu1_03.png');

class Farms extends Component {
    componentWillMount() {
        this.props.farmFetch();
        this.createDataSource(this.props);
    }
    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component
        // will be rendered with
        // this.props is still the old set of props

        this.createDataSource(nextProps);
    }

    createDataSource({ farm }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.datasource = ds.cloneWithRows(farm);
    }
    renderRow(farm) {
        return <ListItem farm={farm} />;
    }
    render() {
        console.log(this.props);
        return (
            <Container>
                <MyHeader title='ฟาร์ม'>
                    <TouchableOpacity onPress={() => Actions.addFarm()}>
                        <FontAwesome name="plus-circle" style={[styles.icon]} />
                    </TouchableOpacity>
                </MyHeader>
                <Content>
                    <ListView
                        enableEmptySections
                        dataSource={this.datasource}
                        renderRow={this.renderRow}
                    />
                </Content>
            </Container>
        );
    }
}
const mapStateToProps = state => {
    const farm = _.map(state.farm, (val, uid) => {
        var temp = {
            name: val.name,
            picture: val.picture,
            uid: uid
        }
        return temp;
        // { shift: 'Monday', phone: '333-333-3333', name: 'Him', uid: '1jdksl' }
    });

    return { farm };
};
export default connect(mapStateToProps, { farmFetch })(Farms);
