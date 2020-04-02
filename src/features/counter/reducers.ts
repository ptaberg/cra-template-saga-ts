import { 
    INCREMENT, 
    DECREMENT
} from './actions';

import {SystemState, IAction} from './types';

const initialState: SystemState = {
    value: 3
};

const counterReducer = (state: SystemState = initialState, action: IAction) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1
            };
        case DECREMENT:
            return {
                ...state,
                value: state.value - 1
            };
        default:
            return state;
    }
};

export default counterReducer;