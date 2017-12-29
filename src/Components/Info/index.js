import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
const knowledge = require('../../../assets/img/knowledge/knowledge_header.png');


class Info extends Component {
    linkToHome() {
        Actions.home();
    }
    render() {
        return (
            <Container>                
                    <Content>
                        <Image style={{height:60, width:100, margin: 100}} source={knowledge} />
                        <Text>
                            This is Content Section
                        </Text>
                    </Content>               
            </Container>
        );
    }
}
export default Info;
