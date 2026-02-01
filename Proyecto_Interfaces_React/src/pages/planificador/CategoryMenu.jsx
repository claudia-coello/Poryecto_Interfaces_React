import React, { useRef, useEffect } from 'react';
import './CategoryMenu.css';

const CategoryMenu = ({ 
  category, 
  onRename, 
  onDelete, 
  onClear,
  position,
  onClose 
}) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleAction = (action) => {
    switch (action) {
      case 'rename':
        const newTitle = prompt('Nuevo nombre para la categoría:', category.title);
        if (newTitle && newTitle.trim() !== '') {
          onRename(category.id, newTitle.trim().toUpperCase());
        }
        break;
      case 'delete':
        if (window.confirm(`¿Estás seguro de eliminar la categoría "${category.title}"?`)) {
          onDelete(category.id);
        }
        break;
      case 'clear':
        if (window.confirm(`¿Estás seguro de limpiar todas las tareas de "${category.title}"?`)) {
          onClear(category.id);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div 
      ref={menuRef}
      className="context-menu"
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 1000
      }}
    >
      <button 
        className="menu-item"
        onClick={() => handleAction('rename')}
      >
        <i className="fas fa-edit menu-icon"></i>
        Renombrar categoría
      </button>
      <button 
        className="menu-item"
        onClick={() => handleAction('clear')}
      >
        <i className="fas fa-broom menu-icon"></i>
        Limpiar tareas
      </button>
      <button 
        className="menu-item delete"
        onClick={() => handleAction('delete')}
      >
        <i className="fas fa-trash menu-icon"></i>
        Eliminar categoría
      </button>
    </div>
  );
};

export default CategoryMenu;