'use client'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AddButton from '../components/AddButton';

interface FormValues {
    dateInput?: string;
    el_consInput?: number;
    gaz_consInput?: number;
}

function AddPage() {
    const [formValues, setFormValues] = useState<FormValues>({})
    const test = uuidv4()
    return (
        <div className='px-4 sm:px-10 md:px-20 xl:px-24 flex flex-col'>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-5 gap-x-2">
                <div>Date</div>
                <div>Electricity</div>
                <div>Gaz</div>
                <div></div>
                
            </div>

            <div className='grid grid-cols-3 sm:grid-cols-4 gap-y-5 gap-x-2 mt-2'>
                <input name='dateInput' id='dateInput' onChange={(e) => {setFormValues({...formValues, dateInput: e.target.value})}} type="text" className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none' />
                <input name='el_consInput' id='el_consInput' onChange={(e) => {setFormValues({...formValues, el_consInput: parseFloat(e.target.value)})}} type="text" className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none' />
                <input name='gaz_consInput' id='gaz_consInput' onChange={(e) => {setFormValues({...formValues, gaz_consInput: parseFloat(e.target.value)})}} type="text" className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none' />
                <AddButton id={test} el_cons={formValues.el_consInput} gaz_cons={formValues.gaz_consInput} dateInput={formValues.dateInput} className='bg-green-700 hover:bg-green-400 text-center w-1/3'/>
            </div>
        </div>
    )
}

export default AddPage

// <div onClick={() => console.log(formValues)}>Add</div>