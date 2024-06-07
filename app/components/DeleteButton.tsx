'use client'
import React, { useState } from 'react'

function DeleteButton({ id } : {id: string}) {
    const [deleteStatus, setDeleteStatus] = useState<string | null>(null);

    const handleDelete = async (id: string) => {
        try {
            const response = await fetch('/api/deleteBill', {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ id }),
            })
      
            const data = await response.json();
      
            if (data.success) {
              setDeleteStatus('Delete successful');
              window.location.reload()
            } else {
              setDeleteStatus('Delete failed');
            }
          } catch (err) {
            console.error(err);
            setDeleteStatus('Error occurred');
          }
    }
    return (
        <div onClick={() => handleDelete(id)}>X</div>
    )
}

export default DeleteButton