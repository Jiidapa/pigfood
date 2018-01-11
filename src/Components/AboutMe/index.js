import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container } from 'native-base';
import { MyHeader } from '../common';

class AboutMe extends Component {
    render() {
        return (
            <Container>
                <MyHeader title='เกี่ยวกับฉัน' />
                <Text> Hello 555555 </Text>
            </Container>
        );
    }
}
export default AboutMe;
