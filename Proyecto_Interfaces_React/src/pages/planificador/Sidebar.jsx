import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [todayNumber, setTodayNumber] = useState('');
  const [username, setUsername] = useState('Nombre Usuario');
  const [weekDays, setWeekDays] = useState([]);

  useEffect(() => {
    updateDateInfo();
    loadUserData();
    
    // Actualizar cada minuto
    const interval = setInterval(updateDateInfo, 60000);
    return () => clearInterval(interval);
  }, []);

  const updateDateInfo = () => {
    const now = new Date();
    
    // Formatear fecha como "1 de febrero de 2026"
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('es-ES', options);
    setCurrentDate(formattedDate);
    setTodayNumber(now.getDate().toString());

    // Calcular días de la semana (LUN a VIE)
    calculateWeekDays(now);
  };

  const calculateWeekDays = (date) => {
    const days = [];
    const currentDayIndex = date.getDay() === 0 ? 6 : date.getDay() - 1; // 0 = Domingo, 1 = Lunes
    
    // Ajustar al lunes de la semana actual
    const monday = new Date(date);
    monday.setDate(date.getDate() - currentDayIndex);

    const dayNames = ['LUN', 'MAR', 'MIE', 'JUE', 'VIE'];
    
    for (let i = 0; i < 5; i++) {
      const dayDate = new Date(monday);
      dayDate.setDate(monday.getDate() + i);
      
      days.push({
        name: dayNames[i],
        number: dayDate.getDate().toString(),
        active: i === currentDayIndex,
        date: dayDate
      });
    }
    
    setWeekDays(days);
  };

  const loadUserData = () => {
    // Cargar de localStorage o API
    const savedUsername = localStorage.getItem('username') || 'Nombre Usuario';
    setUsername(savedUsername);
  };

  return (
    <aside className="sidebar">
      {/* Sección Usuario */}
      <div className="user-section">
        <div className="user-info">
          <div className="user-avatar">
            <i className="fas fa-user-circle"></i>
          </div>
          <div className="user-details">
            <p className="greeting">Hola,</p>
            <p className="username">{username}</p>
          </div>
        </div>
      </div>

      {/* Sección Fecha */}
      <div className="date-section">
        <p className="current-date">{currentDate}</p>
        
        <div className="today-section">
          <div className="today-label">HOY</div>
          <div className="today-number">
            <span>{todayNumber}</span>
          </div>
        </div>
      </div>

      {/* Días de la semana */}
      <div className="week-days-section">
        <div className="week-days-grid">
          {weekDays.map((day, index) => (
            <div 
              key={index} 
              className={`day-box ${day.active ? 'active' : ''}`}
            >
              <div className="day-name">{day.name}</div>
              <div className="day-number">{day.number}</div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;