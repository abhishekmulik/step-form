import { useState } from 'react'
import Table from '../../../ui/Table'
import { ITableHeader } from '../../../ui/ui.types'
import useGetStepConfigs from '../../../hooks/useGetStepConfigs'
import { useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { CheckCircleIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid';


function EducationForm() {
    const { handleNext, handlePrev, activeStepId, steps } = useGetStepConfigs();
    const data = useSelector(state => state?.userInfo);
    const [educationData, setEducationData] = useState(data[activeStepId]?.education);
    console.log(educationData);
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
    const [editId, setEditId] = useState('');

    const educationFactory = () => ({
        id: uniqid(),
        schoolName: '',
        univeristyName: '',
        CGPA: '',
        passingYear: ''
    })

    const handleOnChange = (editId: string, prop: string, value: string) => {
        const rowIndex = educationData?.findIndex(edu => edu.id === editId)
        const updatedData = JSON.parse(JSON.stringify(educationData));
        updatedData[rowIndex][prop] = value;
        setEducationData(updatedData);
    }

    const createNewEducation = () => {
        const newEducation = educationFactory();
        const updatedEducation = [...educationData]
        updatedEducation.push(newEducation)
        console.log({ updatedEducation })
        setEducationData(updatedEducation);
        setEditId(newEducation.id)
    }

    const handleDelete = (id: string) => {
        const rowIndex = educationData?.findIndex(edu => edu.id === id)
        const updatedEducation = [...educationData]
        updatedEducation.splice(rowIndex, 1);
        console.log({ updatedEducation })
        setEducationData(updatedEducation);
        setEditId('')
    }

    return (
        <>
            <Table label='Education' description='Add education from latest to oldest.' headers={headers} createNew={createNewEducation}>
                {
                    educationData?.map((edu) => (
                        <tr key={edu.id} id={edu.id}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                {editId === edu.id ? <input
                                    className="w-full p-2 border border-gray-300 rounded text-sm font-medium text-gray-900"
                                    defaultValue={edu.schoolName}
                                    onChange={(e) => handleOnChange(edu.id, 'schoolName', e.target.value)}
                                /> : <span className="w-full p-2 inline-block text-sm font-medium text-gray-900">{edu.schoolName}</span>}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {editId === edu.id ? <input
                                    className="w-full p-2 border border-gray-300 rounded text-sm font-medium text-gray-900"
                                    defaultValue={edu.univeristyName} onChange={(e) => handleOnChange(edu.id, 'universityName', e.target.value)} /> :
                                    <span className="w-full p-2 inline-block text-sm font-medium text-gray-900">{edu.universityName}</span>}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {editId === edu.id ? <input
                                    className="w-full p-2 border border-gray-300 rounded text-sm font-medium text-gray-900"
                                    defaultValue={edu.CGPA} onChange={(e) => handleOnChange(edu.id, 'CGPA', e.target.value)}
                                /> : <span className="w-full p-2 inline-block text-sm font-medium text-gray-900">{edu.CGPA}</span>}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {editId === edu.id ? <input
                                    className="w-full p-2 border border-gray-300 rounded text-sm font-medium text-gray-900"
                                    defaultValue={edu.passingYear} onChange={(e) => handleOnChange(edu.id, 'passingYear', e.target.value)} /> :
                                    <span className="w-full p-2 inline-block text-sm font-medium text-gray-900">{edu.passingYear}</span>}
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0 flex gap-2 items-center">
                                {
                                    editId !== edu.id ?
                                        <button onClick={(e) => {
                                            e.stopPropagation();
                                            setEditId(edu.id);
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
                                    handleDelete(edu.id);
                                }} className="text-indigo-600 hover:text-indigo-900">
                                    <span className='inline-block w-4'>
                                        <TrashIcon />
                                    </span>
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </Table >
            <div className="mt-6 flex items-center justify-end gap-x-6 w-full">
                <button className="text-sm font-semibold leading-6 text-gray-900" onClick={(e: any) => {
                    e.stopPropagation();
                    handlePrev({ education: educationData })
                }}>
                    Back
                </button>
                <button
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={(e: any) => {
                        e.stopPropagation();
                        handleNext({ education: educationData })
                    }}
                >
                    Next
                </button>
            </div>
        </>
    )
}

export default EducationForm