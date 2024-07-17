import { combineReducers } from 'redux';
import updateStepReducer from './configReducer';

const rootReducer = combineReducers({
    steps: updateStepReducer,
});

export default rootReducer;