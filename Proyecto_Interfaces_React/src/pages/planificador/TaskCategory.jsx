import React from 'react';
import TaskItem from './TaskItem';
import './TaskCategory.css';

const TaskCategory = ({ 
  category, 
  tasks = [], 
  onTaskComplete, 
  onDeleteTask, 
  onAddTask,
  onMenuClick,
  dragHandlers
}) => {
  const categoryColors = {
    'work': '#f4c542',
    'education': '#052946',
    'personal': '#f4c542',
    'health': '#052946',
    'other': '#f4c542'
  };

  const color = categoryColors[category.id] || '#607D8B';
  const categoryTitle = category.title;

  return (
    <div className="category-card">
      <div className="category-header" style={{ borderLeftColor: color }}>
        <h2 className="category-title">{categoryTitle}</h2>
        <div className="category-actions">
          <button 
            className="add-task-btn"
            onClick={onAddTask}
            title="Añadir tarea"
          >
            <i className="fas fa-plus"></i>
          </button>
          <button 
            className="category-menu-btn"
            onClick={onMenuClick}
            title="Opciones de categoría"
          >
            <i className="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </div>

      <div 
        className="task-list"
        onDragOver={dragHandlers.onDragOver}
      >
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <TaskItem 
              key={task.id}
              task={task}
              categoryId={category.id}
              index={index}
              onComplete={onTaskComplete}
              onDelete={onDeleteTask}
              {...dragHandlers}
            />
          ))
        ) : (
          <div className="empty-state">
            <i className="fas fa-tasks empty-icon"></i>
            <p className="empty-message">No hay tareas en esta categoría</p>
            <button 
              className="btn-add-first-task"
              onClick={onAddTask}
            >
              <i className="fas fa-plus"></i> Añadir primera tarea
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskCategory;