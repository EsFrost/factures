'use client'
import React, { useState } from 'react'
import EditButton from './EdtiButton';

interface EditClientFields {
    id: string;
    dateBill: string;
    el_cons: number;
    gaz_cons: number;
}

interface FormValues {
    el_consF: number;
    gaz_consF: number;
}

function EditClient({id, dateBill, el_cons, gaz_cons}: EditClientFields) {
    const [formValues, setFormValues] = useState<FormValues>({ el_consF: 0, gaz_consF: 0 })
    return (
        <div className='grid grid-cols-3 sm:grid-cols-4 gap-y-5 gap-x-2 mt-2'>
            <div>{dateBill}</div>
            <input name='el_consInput' id='el_consInput' onChange={(e) => {setFormValues({...formValues, el_consF: parseFloat(e.target.value)})}} className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none' placeholder={el_cons as unknown as string} />
            <input name='gaz_consInput' id='gaz_consInput' onChange={(e) => {setFormValues({...formValues, gaz_consF: parseFloat(e.target.value)})}} className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none' placeholder={gaz_cons as unknown as string}/>
            <EditButton id={id as string} el_cons={formValues.el_consF} gaz_cons={formValues.gaz_consF} className='bg-blue-800 hover:bg-blue-500 w-20 text-center'/>
        </div>
    )
}

export default EditClient