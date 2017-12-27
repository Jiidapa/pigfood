import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Content, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
class Info extends Component {
    linkToHome() {
        Actions.home();
    }
    render() {
        return (
            <View>
                <Text> Hello </Text>
                <Button onPress={() => this.linkToHome()}>
                    <Text>Click Me! </Text>
                </Button>
            </View>
        );
    }
}
export default Info;
