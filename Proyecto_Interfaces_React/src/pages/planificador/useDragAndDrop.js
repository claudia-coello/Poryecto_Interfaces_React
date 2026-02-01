import { useCallback } from 'react';

export const useDragAndDrop = (onReorder) => {
  const handleDragStart = useCallback((e, taskId, category) => {
    e.dataTransfer.setData('taskId', taskId.toString());
    e.dataTransfer.setData('category', category);
    e.target.classList.add('dragging');
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDrop = useCallback((e, targetCategory, targetIndex) => {
    e.preventDefault();
    
    const taskId = parseInt(e.dataTransfer.getData('taskId'));
    const sourceCategory = e.dataTransfer.getData('category');
    
    if (taskId && sourceCategory) {
      onReorder(sourceCategory, targetCategory, taskId, targetIndex);
    }
    
    // Remover clase dragging
    document.querySelectorAll('.dragging').forEach(el => {
      el.classList.remove('dragging');
    });
  }, [onReorder]);

  const handleDragEnd = useCallback(() => {
    // Remover clase dragging de todos los elementos
    document.querySelectorAll('.dragging').forEach(el => {
      el.classList.remove('dragging');
    });
  }, []);

  return {
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleDragEnd
  };
};