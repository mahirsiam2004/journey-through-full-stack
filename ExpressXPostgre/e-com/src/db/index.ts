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
