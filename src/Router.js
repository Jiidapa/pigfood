// manager/src/Router.js
import React from 'react';
import { ToastAndroid, BackHandler } from 'react-native';
import { Actions, Scene, Router, Stack, Reducer } from 'react-native-router-flux';

import Home from './Components/Home';
import Info from './Components/Info';
import About from './Components/About';
// farms management
import Farms from './Components/Farms';
import AddFarm from './Components/Farms/add';
import EditFarm from './Components/Farms/edit';
// pigs management
import Pigs from './Components/Pigs';
import AddPig from './Components/Pigs/add';
import EditPig from './Components/Pigs/edit';
// foods management
import Foods from './Components/Foods';
import AddFood from './Components/Foods/add';
import EditFood from './Components/Foods/edit';

import Mixer from './Components/Mixer';
import Select from './Components/Select';

let backLoginScene = false;

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);

    return (state, action) => {
        // Open this up in your console of choice and dive into this action variable
        console.log('ACTION:', action);
        // Add some lines like this to grab the action you want
        if (action.type === 'Navigation/BACK' && state.index === 0) {
            BackHandler.exitApp();
        }
        return defaultReducer(state, action);
    };
};

const RouterComponent = () => {
    return (
        <Router
            navigationBarStyle={{ backgroundColor: '#1E88E5' }} titleStyle={{ fontFamily: 'Kanit-Light', color: 'white' }}
            createReducer={reducerCreate}
            backAndroidHandler={() => {
                if (Actions.state.index === 0) {
                    if (backLoginScene === false) {
                        ToastAndroid.show('Click back again to exit.', ToastAndroid.SHORT);
                        backLoginScene = !backLoginScene;
                        setTimeout(() => {
                            backLoginScene = false;
                        }, 2000);
                        return true;
                    }
                    backLoginScene = false;

                    BackHandler.exitApp();
                    return false;
                } else {
                    Actions.pop();
                    return true;
                }
            }}
        >
            <Stack key="root" hideNavBar>
                <Scene key="home" component={Home} title="เครื่องผสมอาหารสุกร" init />
                <Scene key="info" component={Info} title="ความรู้สุกร" />
                <Scene key="about" component={About} title="เกี่ยวกับเรา" />
                {/* farm management */}
                <Scene key="addFarm" component={AddFarm} title="เพิ่มฟาร์ม" />
                <Scene key="editFarm" component={EditFarm} title="แก้ไขฟาร์ม" />
                <Scene key="farms" component={Farms} title="ฟาร์ม" />
                {/* pigs management */}
                <Scene key="addPig" component={AddPig} title="เพิ่มสุกร" />
                <Scene key="editPig" component={EditPig} title="แก้ไขสุกร" />
                <Scene key="pigs" component={Pigs} title="สุกร" />
                {/* foods management */}
                <Scene key="foods" component={Foods} title="สูตรอาหาร" />
                <Scene key="addFood" component={AddFood} title="เพิ่มสูตรอาหาร" />
                <Scene key="editFood" component={EditFood} title="แก้ไขสูตรอาหาร" />

                <Scene key="mixer" component={Mixer} title="ผสมอาหาร" />
                <Scene key="select" component={Select} title="เลือกสูตรอาหาร" />
            </Stack>
        </Router>
    );
};

export default RouterComponent;
