import React, { useState, useEffect } from 'react';
import './Notification.css';

const Notification = ({ message, duration = 3000, onClose, type = 'success' }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        onClose();
      }, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return 'fas fa-check-circle';
      case 'error':
        return 'fas fa-exclamation-circle';
      case 'info':
        return 'fas fa-info-circle';
      default:
        return 'fas fa-check-circle';
    }
  };

  return (
    <div className={`notification ${type} ${visible ? 'slide-in' : 'slide-out'}`}>
      <div className="notification-content">
        <i className={`${getIcon()} notification-icon`}></i>
        <span className="notification-message">{message}</span>
      </div>
    </div>
  );
};

export default Notification;