const storage = require('node-persist');

// Initialize storage
const initStorage = async () => {
  await storage.init();
  // Clear tasks on start
  await storage.clear();
};

// Function to get tasks
const getTasks = async () => {
  const tasks = await storage.getItem('tasks') || [];
  return tasks;
};

// Function to add a task
const addTask = async (task) => {
  const tasks = await getTasks();
  tasks.push(task);
  await storage.setItem('tasks', tasks);
};

// Function to clear tasks
const clearTasks = async () => {
  await storage.clear();
};

module.exports = { initStorage, getTasks, addTask, clearTasks };
