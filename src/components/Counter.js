import React from 'react';
import { connect } from 'react-redux';
import {addCounter, minusCounter} from '../actions';

const Counter = ({counter, addCounter, minusCounter, payload}) => {
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => addCounter(payload)}>+</button>
            <button onClick={() => minusCounter(payload)}>-</button>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        ...state,
        counter: state.counter,
        payload: ownProps.payload
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCounter: playload => {
            dispatch(addCounter(playload))
        },
        minusCounter: playload => {
            dispatch(minusCounter(playload))
        }
    }
}
const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default ConnectedCounter;