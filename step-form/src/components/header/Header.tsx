import React from 'react'
import SectionHeading from '../../ui/SectionHeadings'
import Panels from '../../ui/Panels';
import { Iheader } from './header.types';
import { useDispatch, useSelector } from 'react-redux';
import { updateStep } from '../../redux/actions/updateStep.action';
import { Step } from '../../redux/types';

function Header() {
    const dispatch = useDispatch();
    const steps = useSelector(state => state?.steps)
    // console.log(steps)
    const handleUpdateStep = (id: string, steps: Step[]) => {
        console.log(id, steps)
        dispatch(updateStep({ id, steps }));
    }
    return (
        <header className='px-4'>
            <Panels steps={steps} handleUpdateStep={handleUpdateStep} />
        </header>
    )
}

export default Header;