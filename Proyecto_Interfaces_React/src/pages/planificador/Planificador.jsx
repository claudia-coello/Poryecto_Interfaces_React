import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from './Sidebar';
import TaskCategory from './TaskCategory';
import ModalAddTask from './ModalAddTask';
import CategoryMenu from './CategoryMenu';
import Notification from './Notification';
import { useTasks } from './useTasks';
import { useDate } from './useDate';
import { useDragAndDrop } from './useDragAndDrop';
import NavbarReloj from "../../components/navbarReloj/NavbarReloj";
import './Planificador.css';

const Planificador = () => {
  const [showModal, setShowModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState('success');
  const [activeCategory, setActiveCategory] = useState('');
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);

  const { 
    tasks, 
    categoryTitles,
    currentCategory,
    setCurrentCategory,
    loadUserData,
    addTask, 
    toggleTaskComplete, 
    deleteTask,
    clearCategory,
    renameCategory,
    deleteCategory,
    getCategories,
    getCategoryValue
  } = useTasks();

  const { currentDate, todayNumber, weekDays } = useDate();

  const handleReorder = (sourceCategory, targetCategory, taskId, targetIndex) => {
    console.log(`Reordenar tarea ${taskId} de ${sourceCategory} a ${targetCategory} en posición ${targetIndex}`);
    // Implementar lógica de reordenamiento aquí
  };

  const { handleDragStart, handleDragOver, handleDrop, handleDragEnd } = useDragAndDrop(handleReorder);

  const handleAddTask = (taskData) => {
    try {
      addTask(taskData);
      setShowModal(false);
      showNotificationMessage('¡Tarea añadida exitosamente!', 'success');
    } catch (error) {
      showNotificationMessage('Error al añadir tarea', 'error');
    }
  };

  const handleOpenModal = (categoryId) => {
    setCurrentCategory(categoryId);
    setActiveCategory(categoryId);
    setShowModal(true);
  };

  const handleCategoryMenuClick = (e, category) => {
    e.preventDefault();
    setSelectedCategory(category);
    setMenuPosition({ x: e.pageX, y: e.pageY });
    setShowCategoryMenu(true);
  };

  const handleRenameCategory = (categoryId, newTitle) => {
    renameCategory(categoryId, newTitle);
    showNotificationMessage('Categoría renombrada', 'success');
  };

  const handleDeleteCategory = (categoryId) => {
    deleteCategory(categoryId);
    showNotificationMessage('Categoría eliminada', 'success');
  };

  const handleClearCategory = (categoryId) => {
    clearCategory(categoryId);
    showNotificationMessage('Tareas limpiadas', 'success');
  };

  const showNotificationMessage = (message, type = 'success') => {
    setNotificationMessage(message);
    setNotificationType(type);
    setShowNotification(true);
  };

  const categories = getCategories();

  return (
    
    <div className="planificador-container">
      <NavbarReloj />
      
      <div className="dashboard-container">
        <Sidebar 
          currentDate={currentDate}
          todayNumber={todayNumber}
          weekDays={weekDays}
          username={loadUserData()}
        />
        
        <main className="main-content">
          <div className="content-header">
            <h1 className="page-title">Planificador de Tareas</h1>
            <button 
              className="btn-add-new-task"
              onClick={() => {
                setActiveCategory('work');
                setShowModal(true);
              }}
            >
              <i className="fas fa-plus-circle"></i>
              Nueva Tarea
            </button>
          </div>

          <div className="categories-grid">
            {categories.map(category => (
              <TaskCategory 
                key={`${category.id}-${category.title}`}
                category={category}
                tasks={tasks[category.id]}
                onTaskComplete={(taskId) => {
                  toggleTaskComplete(category.id, taskId);
                  showNotificationMessage('Tarea actualizada', 'success');
                }}
                onDeleteTask={(taskId) => {
                  deleteTask(category.id, taskId);
                  showNotificationMessage('Tarea eliminada', 'success');
                }}
                onAddTask={() => handleOpenModal(category.id)}
                onMenuClick={(e) => handleCategoryMenuClick(e, category)}
                dragHandlers={{
                  onDragStart: handleDragStart,
                  onDragEnd: handleDragEnd,
                  onDragOver: handleDragOver,
                  onDrop: handleDrop
                }}
              />
            ))}
          </div>
        </main>
      </div>

      {showModal && (
        <ModalAddTask 
          onClose={() => setShowModal(false)}
          onSubmit={handleAddTask}
          defaultCategory={activeCategory}
        />
      )}

      {showCategoryMenu && selectedCategory && (
        <CategoryMenu 
          category={selectedCategory}
          onRename={handleRenameCategory}
          onDelete={handleDeleteCategory}
          onClear={handleClearCategory}
          position={menuPosition}
          onClose={() => setShowCategoryMenu(false)}
        />
      )}

      {showNotification && (
        <Notification 
          message={notificationMessage}
          type={notificationType}
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  );
};

export default Planificador;