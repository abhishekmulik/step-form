import React from 'react'
import { IFormWrapper } from './formWrapper.types'
import PersonalInfo from '../personalnfo/PersonalInfo'
import Education from '../education/Education'
import { useSelector } from 'react-redux'
import AdditionalInfo from '../additionalInformation/AdditionalInfo'

const selectFormSection = (id: number) => {
    switch (id) {
        case 0:
            return <PersonalInfo />
        case 1:
            return <Education />
        case 4:
            return <AdditionalInfo />
        default:
            return <></>
    }
}

function FormWrapper(props: IFormWrapper) {
    const { activeStepId = 0 } = useSelector((state) => state);
    return (
        <div>
            {selectFormSection(activeStepId)}
        </div>
    )
}

export default FormWrapper