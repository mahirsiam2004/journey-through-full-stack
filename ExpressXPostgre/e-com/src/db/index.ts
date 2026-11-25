import { Pool } from "pg";
import config from "../config";

export const pool = new Pool({
  connectionString: config.connection_string
});

export const initDB = async () => {
  try {
    const result = await pool.query(`SELECT NOW()`);
    console.log("DB is connected")
  } catch (error) {
  console.log("Database connection failed:", error);
  throw error;
}
};

export const createTables = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) UNIQUE NOT NULL,
      password TEXT NOT NULL
    )
  `);

  console.log("Users table created successfully");
};
