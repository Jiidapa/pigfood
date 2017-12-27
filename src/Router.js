// manager/src/Router.js
import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Home from './Components/Home';
import Info from './Components/Info';
import Farm from './Components/Farm';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="home" component={Home} title="Hello SK" />
                <Scene key="info" component={Info} title="ข้อมูลสุกร" />
                <Scene key="farm" component={Farm} title="ฟาร์ม" />
            </Stack>
        </Router>
    );
};

export default RouterComponent;
