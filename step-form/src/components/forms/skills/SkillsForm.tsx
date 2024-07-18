import React, { useState } from 'react'
import Input from '../../../ui/Input'
import { XMarkIcon } from '@heroicons/react/24/solid';
import useGetStepConfigs from '../../../hooks/useGetStepConfigs';
import { useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

function SkillsForm() {
    const { handleNext, handlePrev, activeStepId, steps } = useGetStepConfigs();
    const data = useSelector(state => state?.userInfo);
    const [skills, setSkills] = useState<string[]>(data[activeStepId]?.skills);
    const [certification, setCert] = useState<string[]>(data[activeStepId]?.certification);

    const [newSkill, setNewSkill] = useState('');
    const [newCertification, setNewCertification] = useState({
        description: '',
        organization: '',
        url: '',
        id: ''
    });

    const createCertification = () => ({
        description: '',
        organization: '',
        url: '',
        id: uniqid()
    })

    const deleteSkill = (skill: string) => {
        const ind = skills.findIndex(s => s === skill);
        const updatedSkills = [...skills];
        updatedSkills.splice(ind, 1);
        setSkills(updatedSkills)
    }

    const addSkill = (skill: string) => {
        const prevSkills = skills;
        prevSkills.push(skill);
        const newSkills = new Set(prevSkills);
        setSkills([...newSkills])
        setNewSkill('')
    }

    return (
        <div>
            <div className='w-1/4'>
                <Input type='text' label='Skills' onChange={(e) => setNewSkill(e.target.value)} value={newSkill} placeholder='Enter skills and press enter' onKeyDown={e => {
                    if (e.key === 'Enter') {
                        addSkill(newSkill || 'pressed');
                    }
                }} />
            </div>
            <div className='mt-4'>
                <ul className='flex flex-wrap gap-2'>
                    {
                        skills?.map(skill => <li key={skill} className='py-2 px-6 rounded-[25px] ring-1 ring-inset ring-gray-300 flex items-center'>
                            <span className='inline-block mr-2'>{skill}</span>
                            <span className='w-4 inline-block cursor-pointer' onClick={(e) => {
                                e.stopPropagation();
                                deleteSkill(skill);
                            }}><XMarkIcon /></span>
                        </li>)
                    }
                </ul>
            </div>
            <div className='mt-4 flex gap-4'>
                <div className='w-full'>
                    <Input type='string' label='Organisation' />
                </div>
                <div className='w-full flex justify-between items-center'>
                    <div className='w-full'>
                        <Input type='link' label='Certification' />
                    </div>

                    <span className='w-12 inline-block'>
                        <PlusCircleIcon className="stroke-indigo-600 opacity-50 hover:opacity-100 hover:stroke-indigo-900 cursor-pointer" />
                    </span>
                </div>


            </div>


        </div>
    )
}

export default SkillsForm