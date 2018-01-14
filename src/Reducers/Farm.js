// manager/src/reducers/AuthReducers.js
import {
    FARM_NAME_CHANGE,
    FARM_PICTURE_CHANGE,
    FARM_FETCH_SUCCESS
} from '../Actions/types';

const ImgUpload = require('../../assets/img/icons/uploadbtn.png');

const INITIAL_STATE = {
    name: '',
    picture: ImgUpload,
    farms: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FARM_NAME_CHANGE:
            return { ...state, name: action.payload };
        case FARM_PICTURE_CHANGE:
            return { ...state, picture: action.payload };
        case FARM_FETCH_SUCCESS:
            console.log(action);
            return action.payload;
        default:
            return state;
    }
};
