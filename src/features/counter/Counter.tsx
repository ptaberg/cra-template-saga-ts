import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {INCREMENT, DECREMENT, INCREMENT_ASYNC, ADD_AMOUNT_ASYNC, ADD_AMOUNT, addAmount} from './actions';
import {selectValue} from './selectors'
import styles from './Counter.module.css';
import { type } from 'os';

export const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(selectValue);
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <div>
            <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch({type: INCREMENT})}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch({type: DECREMENT})}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch({
              type: ADD_AMOUNT_ASYNC,
              count: 4
          })}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(addAmount(5))}
        >
          Add Async
        </button>
      </div>
    </div>
    )
}