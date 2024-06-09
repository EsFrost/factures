'use client'
import React, { useState } from 'react'
import Button from './Button';

function EditButton({ id, className, el_cons, gaz_cons } : {id: string, className?: string, el_cons: number, gaz_cons: number}) {
    const [editStatus, setEditStatus] = useState<string | null>(null)

    const handleEdit = async (id: string, el_cons: number, gaz_cons: number) => {
        try {
            const response = await fetch('/api/methodsBill', {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, el_cons, gaz_cons }),
            })
        
            const data = await response.json()
        
            if (data.success) {
                setEditStatus('Edit successful')
                window.location.reload()
            } else {
                setEditStatus('Edit failed')
            }
            } catch (err) {
            console.error(err)
            setEditStatus('Error occurred')
            }
    }
    return (

        <Button text={'Edit'} onClick={() => handleEdit(id, el_cons, gaz_cons)} className={className} />
            
    )
}

export default EditButton