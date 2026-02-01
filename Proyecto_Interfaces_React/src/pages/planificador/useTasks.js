import { useState, useEffect, useCallback } from 'react';

export const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : {
      work: [],
      education: [],
      personal: [],
      health: [],
      other: []
    };
  });

  const [currentCategory, setCurrentCategory] = useState(null);

  const [categoryTitles, setCategoryTitles] = useState(() => {
    const savedTitles = localStorage.getItem('categoryTitles');
    return savedTitles ? JSON.parse(savedTitles) : {
      work: 'TRABAJO',
      education: 'EDUCACIÓN',
      personal: 'PERSONAL',
      health: 'SALUD',
      other: 'OTRO'
    };
  });
  
  // Guardar tareas en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('categoryTitles', JSON.stringify(categoryTitles));
  }, [categoryTitles]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Cargar datos del usuario
  const loadUserData = useCallback(() => {
    const username = localStorage.getItem('username') || 'Nombre Usuario';
    return username;
  }, []);

  // Función para mapear categorías
  const getCategoryValue = useCallback((title) => {
    const map = {
      'TRABAJO': 'work',
      'EDUCACIÓN': 'education',
      'PERSONAL': 'personal',
      'SALUD': 'health',
      'OTRO': 'other'
    };
    return map[title] || title.toLowerCase();
  }, []);

  const getCategoryTitle = useCallback((value) => {
    return categoryTitles[value] || value.toUpperCase();
  }, [categoryTitles]);

  // Añadir nueva tarea
  const addTask = useCallback((taskData) => {
    const { title, category, time } = taskData;
    
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      time: parseInt(time),
      completed: false,
      progress: 0,
      createdAt: new Date().toISOString()
    };

    setTasks(prev => ({
      ...prev,
      [category]: [...(prev[category] || []), newTask]
    }));

    return newTask;
  }, []);

  // Alternar estado de completado
  const toggleTaskComplete = useCallback((category, taskId) => {
    setTasks(prev => ({
      ...prev,
      [category]: prev[category].map(task => 
        task.id === taskId 
          ? {
              ...task,
              completed: !task.completed,
              progress: !task.completed ? task.time : 0
            }
          : task
      )
    }));
  }, []);

  // Eliminar tarea
  const deleteTask = useCallback((category, taskId) => {
    setTasks(prev => ({
      ...prev,
      [category]: prev[category].filter(task => task.id !== taskId)
    }));
  }, []);

  // Limpiar todas las tareas de una categoría
  const clearCategory = useCallback((category) => {
    setTasks(prev => ({
      ...prev,
      [category]: []
    }));
  }, []);

  // Renombrar categoría (aquí necesitamos lógica especial)
  const renameCategory = useCallback((oldCategory, newTitle) => {
    setCategoryTitles(prev => ({
      ...prev,
      [oldCategory]:newTitle.toUpperCase()
    }))
  }, []);

  // Eliminar categoría completamente
  const deleteCategory = useCallback((category) => {
    setTasks(prev => {
      const newTasks = { ...prev };
      delete newTasks[category];
      return newTasks;
    });
  }, []);

  // Actualizar progreso de tarea
  const updateTaskProgress = useCallback((category, taskId, progress) => {
    setTasks(prev => ({
      ...prev,
      [category]: prev[category].map(task => 
        task.id === taskId 
          ? { ...task, progress }
          : task
      )
    }));
  }, []);

  // Obtener estadísticas de categoría
  const getCategoryStats = useCallback((category) => {
    const categoryTasks = tasks[category] || [];
    const total = categoryTasks.length;
    const completed = categoryTasks.filter(t => t.completed).length;
    const progress = categoryTasks.reduce((sum, t) => sum + t.progress, 0);
    const totalTime = categoryTasks.reduce((sum, t) => sum + t.time, 0);
    
    return { total, completed, progress, totalTime };
  }, [tasks]);

  // Obtener todas las categorías con sus títulos
  const getCategories = useCallback(() => {
    return Object.keys(tasks).map(category => ({
      id: category,
      title: getCategoryTitle(category),
      stats: getCategoryStats(category)
    }));
  }, [tasks, getCategoryTitle, getCategoryStats, categoryTitles]);

  return {
    tasks,
    currentCategory,
    categoryTitles,
    setCurrentCategory,
    loadUserData,
    addTask,
    toggleTaskComplete,
    deleteTask,
    clearCategory,
    renameCategory,
    deleteCategory,
    updateTaskProgress,
    getCategoryStats,
    getCategories,
    getCategoryValue,
    getCategoryTitle
  };
};