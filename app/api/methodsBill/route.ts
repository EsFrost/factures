import pool from '../../lib/db'; // Adjust the import path according to your project structure
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();

  try {
    const client = await pool.connect();
    const result = await client.query('DELETE FROM bill WHERE "bill"."id" = $1', [id])
    client.release();

    return NextResponse.json({ success: true, result })
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err)
      return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    } else {
      console.error('Unknown error', err)
      return NextResponse.json({ success: false, error: 'Unknown error occurred' }, { status: 500 })
    }
  }
}