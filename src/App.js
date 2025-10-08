import React, { useState } from 'react';
import './App.css';
import './components/TaskForm.css';
import './components/TaskList.css';
import './components/TaskItem.css';
import './components/TaskDueDate.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // ➕ Añadir tarea normal
  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
      important: false,
      dueDate: null, // 👈 añadimos fecha por defecto
    };

    setTasks([...tasks, task]);
    setNewTask('');
  };

  // 🔴 Añadir tarea importante
  const handleAddImportantTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
      important: true,
      dueDate: null, // 👈 añadimos también la fecha
    };

    setTasks([...tasks, task]);
    setNewTask('');
  };

  // ✅ Completar tarea
  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // 📅 Actualizar fecha de una tarea
  const handleUpdateTaskDate = (taskId, newDate) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, dueDate: newDate ? newDate.toISOString() : null }
          : task
      )
    );
  };

  // 🗑️ Eliminar tarea
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app-container">
      <div className="todo-container">
        <h1>La Meva Llista de Tasques</h1>

        <form className="task-form">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Afegeix una nova tasca..."
          />
          <button type="button" onClick={handleAddTask}>
            Afegir
          </button>
          <button
            type="button"
            className="task-importante"
            onClick={handleAddImportantTask}
          >
            Tasca Important
          </button>
        </form>

        <ul className="task-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`${task.completed ? 'completed' : ''} ${
                task.important ? 'important' : ''
              }`}
            >
              <span onClick={() => handleToggleComplete(task.id)}>
                {task.text}
              </span>

              {/* 📅 Selector de fecha */}
              <input
                type="date"
                value={
                  task.dueDate
                    ? new Date(task.dueDate).toISOString().split('T')[0]
                    : ''
                }
                onChange={(e) =>
                  handleUpdateTaskDate(task.id, e.target.valueAsDate)
                }
              />

              <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;