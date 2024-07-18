import React from 'react'
import { IFormLayout } from './formWrapper.types'
import { useDispatch, useSelector } from 'react-redux'
import { updateActiveStepId, updateStep } from '../../../redux/actions/updateStep.action';

function FormLayout({ children, label }: IFormLayout) {
    const { activeStepId = 0, steps } = useSelector(state => state?.configData)
    const dispatch = useDispatch();
    const handleNext = () => {
        dispatch(updateStep({ steps, id: activeStepId + 1 }));
    }
    const handlePrev = () => {
        dispatch(updateStep({ steps, id: activeStepId - 1 }));
    }
    return (
        <form>
            <div className="space-y-12">

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">{label}</h2>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        {children}
                    </div>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={(e: any) => {
                    e.stopPropagation();
                    handlePrev()
                }}>
                    Back
                </button>
                <button
                    // type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={(e: any) => {
                        e.stopPropagation();
                        handleNext()
                    }}
                >
                    Next
                </button>
            </div>
        </form>
    )
}

export default FormLayout