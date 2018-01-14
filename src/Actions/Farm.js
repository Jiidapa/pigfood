import {
    FARM_NAME_CHANGE,
    FARM_PICTURE_CHANGE,
    FARM_FETCH_SUCCESS
} from './types';

import firebase from 'react-native-firebase';

export const nameChange = (text) => {
    return {
        type: FARM_NAME_CHANGE,
        payload: text
    };
};

export const pictureChange = (text) => {
    return {
        type: FARM_PICTURE_CHANGE,
        payload: text
    };
};

export const farmFetch = () => {
    const farm = firebase.database().ref(`farms`);
    return (dispatch) => {
        farm.on('value', snapshot => {
            dispatch({
                type: FARM_FETCH_SUCCESS,
                payload: snapshot.val()
            });
        });
    };
};