import React from 'react';

// Rep la tasca i les funcions de manipulació per 'props'
const TaskItem = ({ task, onToggleComplete, onDeleteTask }) => {
  return (
    <li key={task.id} className={task.completed ? 'completed' : ''}>
      {/* Quan es fa clic a l'span, crida la funció rebuda per props */}
      <span onClick={() => onToggleComplete(task.id)}>
        {task.text}
      </span>
      {/* Aquí s'afegirà el selector de data a la Millora 3 */}
      <button onClick={() => onDeleteTask(task.id)}>Eliminar</button>
    </li>
  );
};
 
export default TaskItem;
 
