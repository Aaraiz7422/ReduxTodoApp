import {combineReducers} from 'redux';

import {todoReducer} from './todos';

const appReducer = combineReducers({
  todoReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
