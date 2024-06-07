import { Fragment } from 'react'
import pool from './lib/db'
import { BillObj } from './utils/db_obj'
import initVals from './utils/initial_values'
import DeleteButton from './components/DeleteButton'

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
      <div className='px-5 flex flex-col'>
        <div className="grid grid-rows-* grid-cols-7">
          <div>Date</div>
          <div>Electricity</div>
          <div>Gaz</div>
          <div>Electricity Difference</div>
          <div>Gaz Difference</div>
          <div>Gaz kWh</div>
          <div></div>       
          {result.rows.map((item: BillObj) => {
            totalEl = checks(item.el_cons, initVals.may24.elCons, totalEl)
            totalGaz = checks(item.gaz_cons, initVals.may24.gazCons, totalGaz)
            return (
            <Fragment key={item.id}>
              <div>{new Date(item.dateBill).toLocaleDateString()}</div>
              <div>{item.el_cons}</div>
              <div>{item.gaz_cons}</div>
              <div>{+item.el_cons - +initVals.may24.elCons}</div>
              <div>{+item.gaz_cons - +initVals.may24.gazCons}</div>
              <div>{Math.round((+item.gaz_cons - +initVals.may24.gazCons) * +initVals.conversion).toFixed(2)}</div>
              <DeleteButton id={item.id} />
            </Fragment>
          )})}
        </div>

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
