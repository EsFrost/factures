import Link from 'next/link'
import React, { useState } from 'react'
import EditButton from '../../components/EdtiButton'
import pool from '../../lib/db'
import EditClient from '@/app/components/EditClient';

interface PageProps {
  searchParams: { [key: string]: string | string[] };
}

interface FormValues {
  el_consInput?: number;
  gaz_consInput?: number;
}

/*const test = () => {
  const pathname = usePathname()
  return pathname
}*/


export default async function EditPage({ searchParams }: PageProps) {
  const id = searchParams?.id || ''

  try {
    const client = await pool.connect()
    const result = await client.query(`SELECT * FROM bill WHERE "id" = $1`, [id])
    client.release()
    const res = result.rows[0]
    return (
      <>

        <div className='px-4 sm:px-10 md:px-20 xl:px-24 flex flex-col'>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-5 gap-x-2">
                <div>Date</div>
                <div>Electricity</div>
                <div>Gaz</div>
                <div></div>
                
            </div>

            <EditClient id={res.id} dateBill={new Date(res.dateBill).toLocaleDateString()} el_cons={res.el_cons} gaz_cons={res.gaz_cons}/>
        </div>

        <div className='mt-4'>
          <Link href={'/'} className='px-4'>Back</Link>
        </div>
      </>
    )
  }
  catch (err) {
    console.log('There was an error with connecting to the database: ', err)
  }

}