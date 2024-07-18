import { combineReducers } from 'redux';
import updateStepReducer from './configReducer';
// import { IrootReducer } from './reducer.types';

const rootReducer = combineReducers({
    configData: updateStepReducer,
});

export default rootReducer;