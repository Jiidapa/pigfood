// manager/src/reducers/AuthReducers.js
import {
    PIG_TYPE_CHANGE,
    PIG_AMOUNT_CHANGE
} from '../Actions/types';


const INITIAL_STATE = {
    type: '',
    amount: '',
    pigs: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PIG_TYPE_CHANGE:
            return { ...state, type: action.payload };
        case PIG_AMOUNT_CHANGE:
            return { ...state, amount: action.payload };
        default:
            return state;
    }
};
