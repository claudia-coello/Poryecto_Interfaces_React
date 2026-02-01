import React, { useState, useEffect } from 'react';
import './ModalAddTask.css';

const ModalAddTask = ({ onClose, onSubmit, defaultCategory = '' }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: defaultCategory || 'work',
    time: '30'
  });

  const categories = [
    { value: 'work', label: 'Trabajo' },
    { value: 'education', label: 'Educación' },
    { value: 'personal', label: 'Personal' },
    { value: 'health', label: 'Salud' },
    { value: 'other', label: 'Otro' }
  ];

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      alert('Por favor, escribe un título para la tarea');
      return;
    }

    if (!formData.category) {
      alert('Por favor, selecciona una categoría');
      return;
    }

    if (!formData.time || parseInt(formData.time) < 5) {
      alert('El tiempo estimado debe ser de al menos 5 minutos');
      return;
    }

    onSubmit({
      title: formData.title,
      category: formData.category,
      time: parseInt(formData.time)
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Añadir una nueva tarea</h2>
          <button 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Cerrar modal"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Título de la tarea
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Escribe el título de la tarea..."
              className="form-input"
              required
              autoFocus
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="category" className="form-label">
              Categoría
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Selecciona una categoría</option>
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="time" className="form-label">
              Tiempo estimado (minutos)
            </label>
            <input
              type="number"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              min="5"
              max="480"
              step="5"
              className="form-input"
              required
            />
            <small className="form-help">
              Mínimo 5 minutos, máximo 8 horas (480 minutos)
            </small>
          </div>
          
          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-submit">
              <i className="fas fa-plus"></i>
              Añadir Tarea
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAddTask;