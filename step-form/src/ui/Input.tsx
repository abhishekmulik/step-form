import React from 'react'
import { Iinput } from './ui.types'
import { classNames } from '../utils/common-utils'

function Input({ label, type, name, className }: Iinput) {
    return (
        <>
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <input
                    id="last-name"
                    name={name}
                    type={type}
                    autoComplete="family-name"
                    className={classNames(`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`,
                        className ? className : ''
                    )}
                />
            </div>
        </>
    )
}

export default Input