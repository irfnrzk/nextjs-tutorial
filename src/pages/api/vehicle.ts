import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

export default async function getVehicle(req: NextApiRequest, res: NextApiResponse) {

  const db = await sqlite.open('./mydb.sqlite');
  const vehicles = await db.all('select * from vehicle');

  res.json(vehicles)
}