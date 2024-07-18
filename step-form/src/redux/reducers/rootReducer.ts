import { combineReducers } from 'redux';
import updateStepReducer from './configReducer';
import activeStepIdReducer from './currentStep';

const rootReducer = combineReducers({
    steps: updateStepReducer,
    activeStepId: activeStepIdReducer
});

export default rootReducer;