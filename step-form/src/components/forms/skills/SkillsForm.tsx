import React, { useState } from 'react';
import Input from '../../../ui/Input';
import { XMarkIcon } from '@heroicons/react/24/solid';
import useGetStepConfigs from '../../../hooks/useGetStepConfigs';
import { useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';

function SkillsForm() {
    const { handleNext, handlePrev, activeStepId, steps } = useGetStepConfigs();
    const data = useSelector(state => state?.userInfo);
    const [skills, setSkills] = useState(data[activeStepId]?.skills);
    const [certification, setCertification] = useState(data[activeStepId]?.certification || []);
    const [newSkill, setNewSkill] = useState('');

    const createCertification = () => ({
        organization: '',
        url: '',
        id: uniqid()
    });

    const deleteSkill = (skill) => {
        const updatedSkills = skills.filter(s => s !== skill);
        setSkills(updatedSkills);
    };

    const addSkill = (skill) => {
        const updatedSkills = [...new Set([...skills, skill])];
        setSkills(updatedSkills);
        setNewSkill('');
    };

    const addCertifications = () => {
        const newCertificate = createCertification();
        setCertification([...certification, newCertificate]);
    };

    const handleChange = (id: string, prop: 'url' | 'organization', value: string) => {
        console.log({ [prop]: value })
        const updatedCertification = certification.map(cert =>
            cert.id === id ? { ...cert, [prop]: value } : cert
        );
        setCertification(updatedCertification);
    };

    const deleteCertification = (id: string) => {
        const updatedCertification = certification.filter(cert => cert.id !== id);
        setCertification(updatedCertification);
    };
    return (
        <>
            <div>
                <div className='w-1/4'>
                    <Input
                        type='text'
                        label='Skills'
                        onChange={(e) => setNewSkill(e.target.value)}
                        value={newSkill}
                        placeholder='Enter skills and press enter'
                        onKeyDown={e => {
                            if (e.key === 'Enter') {
                                addSkill(newSkill || 'pressed');
                            }
                        }}
                    />
                </div>
                <div className='mt-4'>
                    <ul className='flex flex-wrap gap-2'>
                        {skills?.map(skill => (
                            <li key={skill} className='py-2 px-6 rounded-[25px] ring-1 ring-inset ring-gray-300 flex items-center'>
                                <span className='inline-block mr-2'>{skill}</span>
                                <span className='w-4 inline-block cursor-pointer' onClick={(e) => {
                                    e.stopPropagation();
                                    deleteSkill(skill);
                                }}>
                                    <XMarkIcon />
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    {certification.length ? (
                        <>
                            {certification.map((details: any, i) => (
                                <div key={details.id}>
                                    <div className='mt-4 flex gap-4'>
                                        <div className='w-full'>
                                            <Input
                                                type='string'
                                                label='Organisation'
                                                value={details.organization}
                                                onChange={(e) => handleChange(details.id, 'organization', e.target.value)}
                                            />
                                        </div>
                                        <div className='w-full flex justify-between items-center'>
                                            <div className='w-full'>
                                                <Input
                                                    type='link'
                                                    label='Certification'
                                                    value={details.url}
                                                    onChange={(e) => handleChange(details.id, 'url', e.target.value)}
                                                />
                                            </div>
                                            {
                                                certification.length - 1 === i ?
                                                    <button onClick={(e) => {
                                                        e.stopPropagation();
                                                        addCertifications();
                                                    }}>
                                                        <span className='w-6 inline-block'>
                                                            <PlusCircleIcon className="stroke-indigo-600 opacity-50 hover:opacity-100 hover:stroke-indigo-900 cursor-pointer" />
                                                        </span>
                                                    </button>
                                                    :
                                                    <button onClick={(e) => {
                                                        e.stopPropagation();
                                                        deleteCertification(details.id);
                                                    }}>
                                                        <span className='w-6 inline-block'>
                                                            <TrashIcon className="stroke-indigo-600 opacity-50 hover:opacity-100 hover:stroke-indigo-900 cursor-pointer" />
                                                        </span>
                                                    </button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <div className='flex items-center flex-col'>
                            <span className='w-16 inline-block' onClick={(e) => {
                                e.stopPropagation();
                                addCertifications();
                            }}>
                                <PlusCircleIcon className="stroke-indigo-600 opacity-50 hover:opacity-100 hover:stroke-indigo-900 cursor-pointer" />
                            </span>
                                <span>Add certificates</span>
                            </div>
                    )}
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6 w-full">
                <button className="text-sm font-semibold leading-6 text-gray-900" onClick={(e) => {
                    e.stopPropagation();
                    handlePrev({
                        skills,
                        certification
                    });
                }}>
                    Back
                </button>
                <button
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleNext({
                            skills,
                            certification
                        });
                    }}
                >
                    Next
                </button>
            </div>
        </>
    );
}

export default SkillsForm;
