import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    onAddTask(newTask); // Afegeix tasca normal
    setNewTask('');
  };

  const handleAddImportant = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    onAddTask(newTask, true); // Afegeix com a important
    setNewTask('');
  };

  return (
    <form onSubmit={handleAdd} className="task-form">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Afegeix una nova tasca..."
      />
      <button type="submit">Afegir</button>
      <button type="button" className="important-btn" onClick={handleAddImportant}>
        Tasca important
      </button>
    </form>
  );
}

export default TaskForm;
