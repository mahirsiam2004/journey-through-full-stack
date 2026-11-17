import express, { json, type Express, type Request, type Response } from 'express';
import dotenv from 'dotenv';
import {Pool} from 'pg'

import { config } from '../node_modules/dotenv/dist/index.d';
dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}));

const pool = new Pool({
  connectionString:process.env.PG_URI
})
// console.log(pool)

const initDB= async ()=>{
  try{
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      AGE INT,
      Is_Active BOOLEAN DEFAULT true,
      created_at TIMESTAMP DEFAULT NOW(),
      update_at TIMESTAMP DEFAULT NOW());
      `)
console.log("Database Connected")
  }
  catch(error){
console.log(error)
  }
}

initDB()




const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.post('/api/v1/users',async (req,res)=>{
  // const body = req.body
try{
  const {name,email,password,age} = req.body

  const result = await pool.query(`
    INSERT INTO users (name,email,password,age) VALUES
    ($1,$2,$3,$4) RETURNING *
    `,[name,email,password,age]);

    console.log(result)

  res.status(201).json({
    success:true,
    message:"USER CREATED",
    data:result.rows[0]
    
   
  })
}catch(error:any){
    res.status(500).json({
    success:false,
   error:error
    
   
  })


}
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); 

