import { PhotoIcon, UserCircleIcon } from "@heroicons/react/16/solid";
import Input from "../../../ui/Input";
import FormLayout from "../formWrapper/FormLayout";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, useState } from "react";
import { updateStep } from "../../../redux/actions/updateStep.action";
import { updateUserInfo } from "../../../redux/actions/updateUserInfo.action";
import { UpdateUserInfoAction } from "../../../redux/actions/actions.types";
import useGetStepConfigs from "../../../hooks/useGetStepConfigs";
import FormFooter from "../formWrapper/FormFooter";


export default function InfoForm() {
    const { activeStepId = 0, steps, handleNext, handlePrev } = useGetStepConfigs();
    const data = useSelector(state => state?.userInfo);
    const [personalInfo, setPersonalInfo] = useState<Record<string, string>>(data[activeStepId]);
    const getValue = (prop: string) => personalInfo?.[prop] || ''
    const handleChange = (prop: string, value: string) => {
        setPersonalInfo(prev => ({
            ...prev,
            [prop]: value
        }))
    }

    return (
        <FormLayout label="Personal Information">
            <div className="sm:col-span-3">
                <Input label="First name" name="first-name" type="text"
                    value={getValue('firstName')}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        e.stopPropagation();
                        handleChange('firstName', e.target.value)
                    }}
                />
            </div>

            <div className="sm:col-span-3">
                <Input label="Last name" name="last-name" type="text"
                    value={getValue('lastName')}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        e.stopPropagation();
                        handleChange('lastName', e.target.value)
                    }}
                />
            </div>

            <div className="sm:col-span-4">
                <Input label="Email" name="email" type="email"
                    value={getValue('email')}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        e.stopPropagation();
                        handleChange('email', e.target.value)
                    }} />
            </div>

            <div className="col-span-full">
                <Input label="Street Address" name="street-address" type="text"
                    value={getValue('streetAddress')}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        e.stopPropagation();
                        handleChange('streetAddress', e.target.value)
                    }} />
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
                <Input label="City" name="city" type="text"
                    value={getValue('city')}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        e.stopPropagation();
                        handleChange('city', e.target.value)
                    }} />
            </div>

            <div className="sm:col-span-2">
                <Input label="State / Proviance" name="city" type="text"
                    value={getValue('state')}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        e.stopPropagation();
                        handleChange('state', e.target.value)
                    }} />
            </div>

            <div className="sm:col-span-2">
                <Input label="Zip / Postal code" name="zip" type="number"
                    value={getValue('pinCode')}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        e.stopPropagation();
                        handleChange('pinCode', e.target.value)
                    }} />
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6 w-full">
                <button className="text-sm font-semibold leading-6 text-gray-900" onClick={(e: any) => {
                    e.stopPropagation();
                    handlePrev(personalInfo)
                }}>
                    Back
                </button>
                <button
                    // type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={(e: any) => {
                        e.stopPropagation();
                        handleNext(personalInfo)
                    }}
                >
                    Next
                </button>
            </div>
        </FormLayout>

    )
}
