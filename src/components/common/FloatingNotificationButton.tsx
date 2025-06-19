import React from 'react';
import { Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const FloatingNotificationButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed bottom-24 right-6 z-50">
      <button
        onClick={() => navigate('/notifications')}
        className="w-14 h-14 bg-primary rounded-full shadow-lg flex items-center justify-center text-white hover:bg-opacity-90 transition-all duration-300 animate-bounce-subtle"
        title="Notifications"
      >
        <Bell className="w-6 h-6" />
      </button>
    </div>
  );
}; 