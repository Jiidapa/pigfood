// manager/src/Router.js
import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Home from './Components/Home';
import Info from './Components/Info';
import Farm from './Components/Farm';
import AboutMe from './Components/AboutMe';

const RouterComponent = () => {
    return (
        <Router navigationBarStyle={{ backgroundColor: '#1E88E5' }} titleStyle={{ fontFamily: 'Kanit-Light', color: 'white' }}>
            <Stack key="root">
                <Scene key="home" component={Home} title="เครื่องผสมอาหารสุกร" init hideNavBar />
                <Scene key="info" component={Info} title="ความรู้สุกร" />
                <Scene key="farm" component={Farm} title="ฟาร์ม" />
                <Scene key="aboutme" component={AboutMe} title="เกี่ยวกับเรา" />
            </Stack>
        </Router>
    );
};

export default RouterComponent;
