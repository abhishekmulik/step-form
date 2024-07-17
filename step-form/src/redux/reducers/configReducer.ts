import { UPDATE_STEP } from "../constants/constants"
import { updateStep } from "../helper"
import { Step } from "../types"


const initialState: Step[] = [
    { id: '01', name: 'Personal Info', href: '#', status: 'current' },
    { id: '02', name: 'Education', href: '#', status: 'upcoming' },
    { id: '03', name: 'Work Experience', href: '#', status: 'upcoming' },
    { id: '04', name: 'Skills and Qualifications', href: '#', status: 'upcoming' },
    { id: '05', name: 'Additional Information', href: '#', status: 'upcoming' },
    { id: '06', name: 'Review and Submit', href: '#', status: 'upcoming' },
]


const updateStepReducer = (state: Step[] = initialState, action: any) => {
    switch (action?.type) {
        case UPDATE_STEP: {
            return updateStep(action.steps, action.id);
        }
        default:
            return state;
    }
}

export default updateStepReducer;