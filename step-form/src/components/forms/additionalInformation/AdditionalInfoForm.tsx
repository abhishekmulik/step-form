import React from 'react'
import FileUpload from '../../../ui/FileUpload'
import FormLayout from '../formWrapper/FormLayout'

function AdditionalInfoForm() {
    return (
        <FormLayout label="Additional Informtion">
            <FileUpload label='Upload Resume' />
        </FormLayout>
    )
}

export default AdditionalInfoForm