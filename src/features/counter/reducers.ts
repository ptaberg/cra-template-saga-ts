import {INCREMENT, DECREMENT, ADD_AMOUNT} from './actions';
import {SystemState, IActionCounter} from './types';

const counterReducer = (
    state: SystemState = {
        value: 3
    }, 
    action: IActionCounter
) => {
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
        case ADD_AMOUNT: {
            return {
                ...state,
                value: state.value + action.count
            }
        }
        default:
            return state;
    }
};

export default counterReducer;