import {TAction, IActionCounter} from './types';

export const INCREMENT: TAction = 'INCREMENT';
export const DECREMENT: TAction = 'DECREMENT';
export const INCREMENT_ASYNC: TAction = 'INCREMENT_ASYNC';
export const ADD_AMOUNT: TAction = 'ADD_AMOUNT';
export const ADD_AMOUNT_ASYNC: TAction = 'ADD_AMOUNT_ASYNC';

export const addAmount = (count: number): IActionCounter => {
    return {
        type: ADD_AMOUNT,
        count
    }
}