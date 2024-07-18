import React from 'react'
import Input from '../../../ui/Input'
import FormLayout from '../formWrapper/FormLayout'
import Table from '../../../ui/Table'
import { ITableHeader } from '../../../ui/ui.types'


function EducationForm() {
    const headers: ITableHeader[] = [
        {
            id: 'schoolName',
            name: 'School/ Institute Name'
        },
        {
            id: 'universityName',
            name: 'Board/ University Name'
        },
        {
            id: 'cgpa',
            name: 'CGPA'
        },
        {
            id: 'passingYear',
            name: 'Passing Year'
        }
    ]
    return (
        <>
            <Table label='Education' description='Add education from latest to oldest.' headers={headers} />
        </>
    )
}

export default EducationForm