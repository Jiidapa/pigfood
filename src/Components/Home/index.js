import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

class Home extends Component {
    linkToInfo() {
        Actions.info();
    }
    linkToFarm() {
        Actions.farm();
    }
    
    render() {
        return (
            <View>
                <Text> Hello 555555 </Text>
                <Button onPress={() => this.linkToInfo()}><Text>ข้อมูลสุกร</Text></Button>
                <Button onPress={() => this.linkToFarm()}><Text>ข้อมูลฟาร์ม</Text></Button>
            </View>
        );
    }
}
export default Home;
