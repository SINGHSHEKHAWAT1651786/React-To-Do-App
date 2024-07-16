const express = require('express'); // Import Express framework
const cors = require('cors'); // Import CORS middleware for handling Cross-Origin Resource Sharing
const { initStorage, getTasks, addTask, clearTasks } = require('./storage'); // Import functions from storage module

const app = express(); // Create an Express application
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies in requests

const startServer = async () => {
  await initStorage(); // Initialize storage (assuming this sets up your database or storage mechanism)
  await clearTasks(); // Clear any existing tasks (assuming this initializes your data)

  // Endpoint to get tasks
  app.get('/api/tasks', async (req, res) => {
    const tasks = await getTasks(); // Retrieve tasks from storage
    res.json(tasks); // Send tasks as JSON response
  });

  // Endpoint to add a new task
  app.post('/api/tasks', async (req, res) => {
    const { task } = req.body; // Extract task from request body
    await addTask(task); // Add the task to storage
    res.status(201).json({ message: 'Task added' }); // Respond with success message
  });

  const PORT = process.env.PORT || 3001; // Define the port for the server to listen on
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // Start the server and log the port it's running on
  });
};

startServer(); // Call the function to start the server

