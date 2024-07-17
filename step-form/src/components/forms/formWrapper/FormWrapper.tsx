import React from 'react'
import { IFormWrapper } from './formWrapper.types'
import PersonalInfo from '../personalnfo/PersonalInfo'
import Education from '../education/Education'

function FormWrapper(props: IFormWrapper) {
    return (
        <div>
            <Education />
        </div>
    )
}

export default FormWrapper