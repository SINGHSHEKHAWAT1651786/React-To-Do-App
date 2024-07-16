To-Do List Application
This project is a simple To-Do list application built with Node.js and React. It allows users to add tasks, store them using Node-persist, and display them in a list format.

Project Structure
The project is structured into two main folders:

frontend: Contains the React frontend application.

package.json: Manages frontend dependencies and scripts.
src/: Source folder for frontend React components and assets.
backend: Contains the Node.js backend server.

package.json: Manages backend dependencies and scripts.
server.js: Entry point for the Node.js server.
storage.js: Handles task storage using Node-persist.
Each folder has its own package.json file, specifying project dependencies and scripts.

Installation and Setup
To run the application locally, follow these steps:

Frontend Setup
Navigate to the frontend folder:

cd frontend
Install dependencies:

npm install
This command installs all necessary dependencies specified in package.json.

Backend Setup
Navigate back to the main folder:

cd ..
Navigate to the backend folder:

cd backend
Install dependencies:

npm install
This command installs all necessary dependencies specified in package.json.

Running the Application
Start the backend server:

npm start
This command starts the Node.js backend server. It will run on http://localhost:3001.

Start the frontend development server:

cd ../frontend

npm start
This command starts the React development server for the frontend. It will run on http://localhost:3000.

Access the application in your browser:

Open your web browser and navigate to http://localhost:3000 to view the To-Do list application.

Functionality

Adding Tasks: Enter a task in the input box and click "Add Task". The task will be stored using Node-persist and displayed below in the tasks list section.

Restarting Application: On restarting the application, the old Node-persist data is cleared using storage.clear().

Additional Information

Technologies Used:

Frontend: React, React Router, JavaScript, CSS
Backend: Node.js, Express.js, Node-persist, JavaScript
Database: Local storage using Node-persist
Deployment: The application is designed to run locally. For deployment to production, additional setup and configurations would be necessary.
Project Structure: The project follows a modular structure with separate frontend and backend components, facilitating easier maintenance and scalability.
