import React, { useState } from 'react';

const AddTaskModal = ({ initialCategory, onClose, onAdd }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [time, setTime] = useState(30);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(title, category, time);
    setTitle(""); // Limpia el form
  };

  return (
    // Usamos la clase modal-overlay de tu CSS. 
    // En React, para mostrarlo usamos un estilo en línea de 'flex'
    <div className="modal-overlay" style={{ display: 'flex' }} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Añadir nueva tarea</h3>
          <button className="close-modal" onClick={onClose}>&times;</button>
        </div>
        
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Título de la tarea</label>
              <input 
                type="text" 
                placeholder="Escribe el título..." 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required 
              />
            </div>
            
            <div className="form-group">
              <label>Categoría</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="work">Trabajo</option>
                <option value="education">Educación</option>
                <option value="personal">Personal</option>
                <option value="health">Salud</option>
                <option value="other">Otro</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Tiempo estimado (minutos)</label>
              <input 
                type="number" 
                min="5" 
                max="480" 
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required 
              />
            </div>
            
            <button type="submit" className="btn-submit">Añadir tarea</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;