// backend/src/index.ts
import express from 'express';
import pool from './config/db'; 
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// A simple route to test the database
app.get('/api/test-db', async (req, res) => {
  try {
    // This asks PostgreSQL for the current time
    const result = await pool.query('SELECT NOW()'); 
    res.status(200).json({ 
      success: true, 
      message: 'Supabase connected successfully!', 
      databaseTime: result.rows[0].now 
    });
  } catch (error) {
    console.error('Database connection failed:', error);
    res.status(500).json({ success: false, message: 'Connection failed.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});