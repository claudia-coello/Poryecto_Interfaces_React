import React from 'react';
import './TaskItem.css';

const TaskItem = ({ 
  task, 
  categoryId,
  index,
  onComplete,
  onDelete,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDrop
}) => {
  const progressPercentage = task.completed ? 100 : (task.progress / task.time) * 100;
  const progressText = task.completed ? 
    `${task.time}/${task.time} min` : 
    `${task.progress}/${task.time} min`;

  return (
    <div 
      className={`task-item ${task.completed ? 'completed' : ''}`}
      draggable
      onDragStart={(e) => onDragStart(e, task.id, categoryId)}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, categoryId, index)}
      data-task-id={task.id}
    >
      <div className="task-info">
        <div className="task-header">
          <h3 className="task-title">{task.title}</h3>
          <div className="task-timer">
            <i className="far fa-clock"></i>
            <span>{task.time} min</span>
          </div>
        </div>
        <div className="task-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <span className="progress-text">{progressText}</span>
        </div>
      </div>
      <div className="task-actions">
        <button 
          className={`task-check ${task.completed ? 'completed' : ''}`}
          onClick={() => onComplete(task.id)}
          title={task.completed ? "Marcar como pendiente" : "Marcar como completada"}
        >
          <i className={task.completed ? "fas fa-check" : "far fa-circle"}></i>
        </button>
        <button 
          className="task-delete"
          onClick={() => onDelete(task.id)}
          title="Eliminar tarea"
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default TaskItem;