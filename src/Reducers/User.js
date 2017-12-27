// manager/src/reducers/AuthReducers.js
import {
    FETCH_ALL_USERS
} from '../Actions/types';

const INITIAL_STATE = {
    users: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ALL_USERS:
            return { ...state, users: action.payload };
    }
};
