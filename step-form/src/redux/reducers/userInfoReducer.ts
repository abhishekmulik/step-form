import { UpdateUserInfoAction } from "../actions/actions.types";
import { UPDATE_FORM, UPDATE_USER_INFO } from "../constants/constants"
import { updateUserInfo } from "../helper"

const initialState = [
    {
        firstName: '',
        lastName: '',
        email: '',
        streetAddress: '',
        city: '',
        state: '',
        pinCode: 0,
    },
    {
        education: [
            {
                id: '123',
                schoolName: 'St Jude High School',
                univeristyName: 'SSC',
                CGPA: '9.0',
                passingYear: 1999
            },
            {
                id: '1234r234',
                schoolName: 'Jai hind School',
                univeristyName: 'HSC',
                CGPA: '9.0',
                passingYear: 1999
            }
        ]
    },
    {
        experience: [
            {
                id: '1234',
                company: 'Coditas Solutions',
                jobTitle: 'Software Engineer',
                duration: '1year'
            }
        ]
    },
    {
        skills: [],
        certification: []
    },
    {
        resume: '',
        coverLetter: ''
    }
]

const userInfoReducer = (state = initialState, action: UpdateUserInfoAction) => {
    switch (action?.type) {
        case UPDATE_USER_INFO: {
            return updateUserInfo(state, action.activeStepId, action.updatedObject);
        }
        default:
            return state
    }
}

export default userInfoReducer;