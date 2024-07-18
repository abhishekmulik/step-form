import React, { useState } from 'react'
import { ITableHeader } from '../../../ui/ui.types'
import Table from '../../../ui/Table'
import uniqid from 'uniqid';
import useGetStepConfigs from '../../../hooks/useGetStepConfigs';
import { useSelector } from 'react-redux';
import { CheckCircleIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

function ExperienceForm() {
    const { handleNext, handlePrev, activeStepId, steps } = useGetStepConfigs();
    const data = useSelector(state => state?.userInfo);
    const [experienceData, setExperienceData] = useState(data[activeStepId]?.experience);
    const [editId, setEditId] = useState('');
    const headers: ITableHeader[] = [
        {
            id: 'companyName',
            name: 'Company Name'
        },
        {
            id: 'jobTitle',
            name: 'Job Title'
        },
        {
            id: 'duration',
            name: 'Duration'
        },
    ]
    const experienceFactory = () => ({
        id: uniqid(),
        company: '',
        jobTitle: '',
        duration: ''
    })
    const createNewExperience = () => {
        const newExperience = experienceFactory();
        const updatedExperience = [...experienceData]
        updatedExperience.push(newExperience)
        console.log({ updatedExperience })
        setExperienceData(updatedExperience);
        setEditId(newExperience.id)
    }
    const handleDelete = (id: string) => {
        const rowIndex = experienceData?.findIndex(exp => exp.id === id)
        const updatedExperience = [...experienceData]
        updatedExperience.splice(rowIndex, 1);
        console.log({ updatedExperience })
        setExperienceData(updatedExperience);
        setEditId('')
    }

    const handleOnChange = (editId: string, prop: string, value: string) => {
        const rowIndex = experienceData?.findIndex(exp => exp.id === editId)
        const updatedData = JSON.parse(JSON.stringify(experienceData));
        updatedData[rowIndex][prop] = value;
        setExperienceData(updatedData);
    }
    console.log({ experienceData })
    return (
        <div>
            <Table label='Relevant experinece' description='Enter work experience from latest to oldest.' headers={headers} createNew={createNewExperience}>
                {
                    experienceData?.map((exp) => (
                        <tr key={exp.id} id={exp.id}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                {editId === exp.id ? <input
                                    className="w-full p-2 border border-gray-300 rounded text-sm font-medium text-gray-900"
                                    defaultValue={exp.company}
                                    onChange={(e) => handleOnChange(exp.id, 'company', e.target.value)}
                                /> : <span className="w-full p-2 inline-block text-sm font-medium text-gray-900">{exp.company}</span>}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {editId === exp.id ? <input
                                    className="w-full p-2 border border-gray-300 rounded text-sm font-medium text-gray-900"
                                    defaultValue={exp.jobTitle} onChange={(e) => handleOnChange(exp.id, 'jobTitle', e.target.value)} /> :
                                    <span className="w-full p-2 inline-block text-sm font-medium text-gray-900">{exp.jobTitle}</span>}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {editId === exp.id ? <input
                                    className="w-full p-2 border border-gray-300 rounded text-sm font-medium text-gray-900"
                                    defaultValue={exp.duration} onChange={(e) => handleOnChange(exp.id, 'duration', e.target.value)}
                                /> : <span className="w-full p-2 inline-block text-sm font-medium text-gray-900">{exp.duration}</span>}
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0 flex gap-2 items-center">
                                {
                                    editId !== exp.id ?
                                        <button onClick={(e) => {
                                            e.stopPropagation();
                                            setEditId(exp.id);
                                        }}
                                            className="text-indigo-600 hover:text-indigo-900">
                                            <span className='inline-block w-4'>
                                                <PencilIcon />
                                            </span>
                                        </button> :
                                        <button onClick={(e) => {
                                            e.stopPropagation();
                                            setEditId('');
                                        }}
                                            className="text-indigo-600 hover:text-indigo-900">
                                            <span className='inline-block w-4'>
                                                <CheckCircleIcon />
                                            </span>
                                        </button>}
                                <button onClick={(e) => {
                                    e.stopPropagation();
                                    handleDelete(exp.id);
                                }} className="text-indigo-600 hover:text-indigo-900">
                                    <span className='inline-block w-4'>
                                        <TrashIcon />
                                    </span>
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </Table>
            <div className="mt-6 flex items-center justify-end gap-x-6 w-full">
                <button className="text-sm font-semibold leading-6 text-gray-900" onClick={(e: any) => {
                    e.stopPropagation();
                    handlePrev({ experience: experienceData })
                }}>
                    Back
                </button>
                <button
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={(e: any) => {
                        e.stopPropagation();
                        handleNext({ experience: experienceData })
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default ExperienceForm