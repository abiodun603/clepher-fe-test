import React, { FC } from 'react'

import clsx from 'clsx'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
  disabled?: boolean;
}

const Input: FC<InputProps> = ({label, id, type, required, register, errors, disabled}) => {
  return (
    <div>
      <label htmlFor={id} className='block text-sm font-medium leading-6 text-gray-600'>{label}</label>
      <div className="mt-2">
        <input 
          id = {id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {...register(id, {required})}
          className={clsx(`
            form-input block border-0 rounded-md w-full py-1.5 px-3 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6
          `, 
            errors[id] && 'focus:ring-rose-500',
            errors[id] && 'opacity-50 cursor-default'
          )}
        />
      </div>
    </div>
  )
}

Input.displayName = "Input"

export { Input }