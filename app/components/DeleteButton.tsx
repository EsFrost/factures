'use client'
import React, { useState } from 'react'
import Button from './Button';

function DeleteButton({ id, className } : {id: string, className?: string}) {
  const [deleteStatus, setDeleteStatus] = useState<string | null>(null)

  const handleDelete = async (id: string) => {
      try {
          const response = await fetch('/api/methodsBill', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
          })
    
          const data = await response.json()
    
          if (data.success) {
            setDeleteStatus('Delete successful')
            window.location.reload()
          } else {
            setDeleteStatus('Delete failed')
          }
        } catch (err) {
          console.error(err);
          setDeleteStatus('Error occurred')
        }
  }
  return (

    <Button text={'Delete'} onClick={() => handleDelete(id)} className={className} />
        
  )
}

export default DeleteButton