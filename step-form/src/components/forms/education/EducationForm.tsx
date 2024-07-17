import React from 'react'
import Input from '../../../ui/Input'
import FormLayout from '../formWrapper/FormLayout'

function EducationForm() {
    return (
        <FormLayout label="Education">
            <Input type='text' name='school' />
        </FormLayout>
    )
}

export default EducationForm