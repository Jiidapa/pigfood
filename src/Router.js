// manager/src/Router.js
import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';

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

const RouterComponent = () => {
    return (
        <Router navigationBarStyle={{ backgroundColor: '#1E88E5' }} titleStyle={{ fontFamily: 'Kanit-Light', color: 'white' }}>
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
                <Scene key="Foods" component={Foods} title="สูตรอาหาร" />
                <Scene key="addFood" component={AddFood} title="เพิ่มสูตรอาหาร" />
                <Scene key="editFood" component={EditFood} title="แก้ไขสูตรอาหาร" />
            </Stack>
        </Router>
    );
};

export default RouterComponent;
