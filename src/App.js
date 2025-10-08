import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import TaskForm from './components/TaskForm.js';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Comprar pa', completed: false, dueDate: null, important: false },
    { id: 2, text: 'Acabar informe', completed: true, dueDate: new Date().toISOString(), important: false },
  ]);

  const handleAddTask = (text, isImportant = false) => {
    const task = {
      id: Date.now(),
      text: text,
      completed: false,
      dueDate: null,
      important: isImportant, // ✅ canviat: coherent amb TaskList i CSS
    };
    setTasks([...tasks, task]);
  };

  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleUpdateTaskDate = (taskId, newDate) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, dueDate: newDate ? newDate.toISOString() : null } : task
      )
    );
  };

  return (
    <div className="app-container">
      <div className="todo-container">
        <h1>La Meva Llista de Tasques</h1>
        <TaskForm onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
          onDeleteTask={handleDeleteTask}
          onUpdateTaskDate={handleUpdateTaskDate}
        />
      </div>
    </div>
  );
}

export default App;
