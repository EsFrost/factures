'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from './Button'

function AddButton({ id, className, el_cons, gaz_cons, dateInput } : {id: string, className?: string, el_cons?: number, gaz_cons?: number, dateInput?: string}) {
    const router = useRouter()
    const [addtStatus, setAddStatus] = useState<string | null>(null)
    let text: string

    const handleAdd = async (id: string, el_cons: number, gaz_cons: number, dateInput: string) => {
        if (el_cons === undefined || gaz_cons === undefined || dateInput === undefined) {
            return
        }
        try {
            const response = await fetch('/api/methodsBill', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, el_cons, gaz_cons, dateInput }),
            })
        
            const data = await response.json()
        
            if (data.success) {
                setAddStatus('Addition successful')
                //window.location.reload()
                router.push('/')
            } else {
                setAddStatus('Addition failed')
            }
            } catch (err) {
            console.error(err)
            setAddStatus('Error occurred')
            }
    }
    return (

        <Button text={'Add'} onClick={() => handleAdd(id, el_cons!, gaz_cons!, dateInput!)} className={className} />
            
    )
}

export default AddButton