import { combineReducers } from 'redux';
import updateStepReducer from './configReducer';
import userInfoReducer from './userInfoReducer';
// import { IrootReducer } from './reducer.types';

const rootReducer = combineReducers({
    configData: updateStepReducer,
    userInfo: userInfoReducer
});

export default rootReducer;