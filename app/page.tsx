import { Fragment } from 'react'
import pool from './lib/db'
import { BillObj } from './utils/db_obj'
import initVals from './utils/initial_values'
import DeleteButton from './components/DeleteButton'
import EditButton from './components/EdtiButton'

const checks = (val1: number, val2: number, val3: number) => {
 if ((val1 - val2) > val3) {
  val3 = val1 - val2
 }
 return val3
}

export default async function Home() {
  let total = 0, totalEl = 0, totalGaz = 0
  try {
    const client = await pool.connect()
    //const result = await client.query(`SELECT * FROM bill WHERE "bill"."dateBill" = DATE_TRUNC('year', '2000-01-01'::date)`)
    const result = await client.query(`SELECT * FROM bill`)
    client.release()
    return (
      <div className='px-4 sm:px-10 md:px-20 xl:px-24 flex flex-col'>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-y-5">
          <div>Date</div>
          <div>Electricity</div>
          <div>Gaz</div>
          <div>Electricity Difference</div>
          <div>Gaz Difference</div>
          <div>Gaz kWh</div>
          <div></div>
        </div>    
        <hr className="h-px my-1 mt-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        {result.rows.map((item: BillObj) => {
          totalEl = checks(item.el_cons, initVals.may24.elCons, totalEl)
          totalGaz = checks(item.gaz_cons, initVals.may24.gazCons, totalGaz)
          return (
            <Fragment key={item.id} >
            <div className="grid grid-rows-* grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-y-5 mt-8">
              <div>{new Date(item.dateBill).toLocaleDateString()}</div>
              <div>{item.el_cons}</div>
              <div>{item.gaz_cons}</div>
              <div>{+item.el_cons - +initVals.may24.elCons}</div>
              <div>{+item.gaz_cons - +initVals.may24.gazCons}</div>
              <div>{Math.round((+item.gaz_cons - +initVals.may24.gazCons) * +initVals.conversion).toFixed(2)}</div>
              <div className='flex gap-5'>
                <DeleteButton id={item.id} />
                <EditButton id={item.id} el_cons={1} gaz_cons={2} className={'bg-blue-800 hover:bg-blue-500'} />
              </div>              
            </div>
            <hr className="h-px mt-7 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </Fragment>
        )})}
        

        <div className='mt-5'>Total: {Math.round(+Math.round(totalEl * initVals.may24.elTarif).toFixed(2) + +Math.round(totalGaz * initVals.conversion * initVals.may24.gazTarif).toFixed(2)).toFixed(2)}€</div>
        <div>Electricity total: {Math.round(totalEl * initVals.may24.elTarif).toFixed(2)}€</div>
        <div>Gaz total: {Math.round(totalGaz * initVals.conversion * initVals.may24.gazTarif).toFixed(2)}€</div>
      </div>
    )
  }
  catch (err) {
    console.log('There was an error with connecting to the database: ', err)
  }
}
