import { createStore, combineReducers } from  'redux';
import todos from '../reducers/todoReducer';
import counter from '../reducers/counterReducer';
import filter from '../reducers/filterReducer';

const reducers = combineReducers({
    todos: todos,
    counter: counter,
    filter: filter,
});

const store = createStore(reducers);

export default store;