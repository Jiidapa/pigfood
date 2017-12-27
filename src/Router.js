// manager/src/Router.js
import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Home from './Components/Home';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="home" component={Home} title="Hello world" />
            </Stack>
        </Router>
    );
};

export default RouterComponent;
