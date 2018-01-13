import {
    FARM_NAME_CHANGE,
    FARM_PICTURE_CHANGE
} from './types';

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
