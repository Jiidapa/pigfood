import {
    PIG_TYPE_CHANGE,
    PIG_AMOUNT_CHANGE
} from './types';

export const typeChange = (text) => {
    return {
        type: PIG_TYPE_CHANGE,
        payload: text
    };
};

export const amountChange = (text) => {
    return {
        type: PIG_AMOUNT_CHANGE,
        payload: text
    };
};
