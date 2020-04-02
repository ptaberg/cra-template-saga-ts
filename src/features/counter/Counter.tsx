import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {INCREMENT, DECREMENT, INCREMENT_ASYNC} from './actions';
import {counterValueSelect} from './selector';

export const Counter = () => {
    const dispatch = useDispatch();
    const store = useSelector(counterValueSelect);

    return <div>
        <button
            onClick={() => dispatch({type: INCREMENT})}
        >
            +
        </button>
        <button
            onClick={() => dispatch({type: DECREMENT})}
        >
            -
        </button>
        <button
            onClick={() => dispatch({type: INCREMENT_ASYNC})}
        >
            + async
        </button>
        {JSON.stringify(store)}
    </div>
}