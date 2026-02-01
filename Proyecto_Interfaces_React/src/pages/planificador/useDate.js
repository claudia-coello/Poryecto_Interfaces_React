import { useState, useEffect, useCallback } from 'react';

export const useDate = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [todayNumber, setTodayNumber] = useState('');
  const [weekDays, setWeekDays] = useState([]);

  const updateDate = useCallback(() => {
    const now = new Date();
    
    // Formatear fecha completa
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('es-ES', options);
    setCurrentDate(formattedDate);
    setTodayNumber(now.getDate().toString());

    // Calcular días de la semana
    const weekDaysArray = [];
    const todayIndex = now.getDay() === 0 ? 6 : now.getDay() - 1;
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - todayIndex);

    const dayNames = ['LUN', 'MAR', 'MIE', 'JUE', 'VIE'];
    
    for (let i = 0; i < 5; i++) {
      const currentDay = new Date(startOfWeek);
      currentDay.setDate(startOfWeek.getDate() + i);

      weekDaysArray.push({
        name: dayNames[i],
        number: currentDay.getDate().toString(),
        active: i === todayIndex,
        date: currentDay
      });
    }

    setWeekDays(weekDaysArray);
  }, []);

  useEffect(() => {
    updateDate();
    
    // Actualizar cada minuto
    const interval = setInterval(updateDate, 60000);
    return () => clearInterval(interval);
  }, [updateDate]);

  return {
    currentDate,
    todayNumber,
    weekDays,
    updateDate
  };
};