import React, { useState, useEffect } from 'react';
import { auth, db } from "../../firebase/firebase"; 
import { doc, getDoc } from "firebase/firestore";
import './Sidebar.css';

const Sidebar = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [todayNumber, setTodayNumber] = useState('');
  const [username, setUsername] = useState('Nombre Usuario');
  const [fotoPerfil, setFotoPerfil] = useState('');
  const [weekDays, setWeekDays] = useState([]);

  useEffect(() => {
    updateDateInfo();
    loadUserData();
    
    const interval = setInterval(updateDateInfo, 60000);
    return () => clearInterval(interval);
  }, []);

  const updateDateInfo = () => {
    const now = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('es-ES', options);
    setCurrentDate(formattedDate);
    setTodayNumber(now.getDate().toString());
    calculateWeekDays(now);
  };

  const calculateWeekDays = (date) => {
    const days = [];
    const currentDayIndex = date.getDay() === 0 ? 6 : date.getDay() - 1;
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

  const loadUserData = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setUsername(user.displayName || data.displayName || user.email);
          setFotoPerfil(data.fotoPerfil || ""); // si no hay, queda vacío
        } else {
          setUsername(user.displayName || user.email);
        }
      } catch (error) {
        console.error("Error al cargar datos del usuario:", error);
      }
    }
  };

  return (
    <aside className="sidebar">
      {/* Sección Usuario */}
      <div className="user-section">
        <div className="user-info">
          <div className="user-avatar">
            {fotoPerfil ? (
              <img 
                src={fotoPerfil} 
                alt="Foto de perfil" 
                className="avatar-img"
              />
            ) : (
              <i className="fas fa-user-circle"></i>
            )}
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
