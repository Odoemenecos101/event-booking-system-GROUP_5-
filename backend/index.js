// Look! We are using ES6 'import' instead of 'require'
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Endpoint 1: Get all events (Arrow function used!)
app.get('/api/events', (req, res) => {
    res.json({ message: "Fetching all events" });
});

// Endpoint 2: Get a specific event
app.get('/api/events/:id', (req, res) => {
    // Destructuring used!
    const { id } = req.params; 
    res.json({ message: `Fetching event details for ID: ${id}` });
});

// Endpoint 3: Create a new event
app.post('/api/events', (req, res) => {
    res.json({ message: "Event created successfully" });
});

// Endpoint 4: Delete an event
app.delete('/api/events/:id', (req, res) => {
    res.json({ message: "Event deleted" });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});