// backend/src/config/db.ts
import { Pool } from 'pg';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

// Create a new connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Optional: Test the connection when the pool is created
pool.on('connect', () => {
  console.log('Connected to the Supabase PostgreSQL database successfully!');
});

// Export the pool to be used in your controllers
export default pool;