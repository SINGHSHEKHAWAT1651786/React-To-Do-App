import React, { useState, useEffect } from 'react'; // Import React and necessary hooks
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from React Router
import './App.css'; // Import CSS file for styling

function App() {
    const [tasks, setTasks] = useState([]); // State to store tasks
    const [taskInput, setTaskInput] = useState(''); // State to manage input field

    useEffect(() => {
        fetchTasks(); // Fetch tasks when component mounts
    }, []);

    // Function to fetch tasks from the server
    const fetchTasks = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/tasks'); // Replace with your server URL
            if (!response.ok) {
                throw new Error('Failed to fetch tasks');
            }
            const data = await response.json(); // Parse response as JSON
            setTasks(data); // Update tasks state with fetched data
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    // Function to handle adding a new task
    const handleAddTask = async () => {
        if (taskInput.trim() === '') return; // Check if input is empty
        try {
            const response = await fetch('http://localhost:3001/api/tasks', {
                method: 'POST', // Specify POST method for adding a task
                headers: {
                    'Content-Type': 'application/json', // Set headers for JSON content
                },
                body: JSON.stringify({ task: taskInput }), // Send task input as JSON
            });
            if (!response.ok) {
                throw new Error('Failed to add task');
            }
            setTaskInput(''); // Clear input field after adding task
            fetchTasks(); // Refresh the task list after adding a task
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    return (
        <Router> {/* Wrap the entire application in Router component */}
            <div className="App"> {/* Main container for the application */}
                <h1>To Do List App</h1> {/* Application title */}
                <div>
                    <label>
                        Enter the task:
                        <input
                            type="text"
                            value={taskInput}
                            onChange={(e) => setTaskInput(e.target.value)}
                            placeholder="Get groceries"
                        />
                    </label>
                    <button onClick={handleAddTask}>Add Task</button> {/* Button to add a new task */}
                </div>
                <Routes> {/* Router component to define routes */}
                    <Route path="/" element={<Home tasks={tasks} />} /> {/* Route for the home page */}
                    {/* Additional routes can be added here */}
                </Routes>
            </div>
        </Router>
    );
}

function Home({ tasks }) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>{task.task}</li> // Render each task as a list item
            ))}
        </ul>
    );
}

export default App; // Export the App component as the default export

