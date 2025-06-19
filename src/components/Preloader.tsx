import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can adjust this or remove it if you want to use actual loading state)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative">
        {/* Logo container with pulse animation */}
        <div className="relative w-32 h-32">
          <img
            src="/medicos.png"
            alt="Medicos Desire"
            className="w-full h-full object-contain animate-pulse"
          />
          {/* Rotating circle animation */}
          <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
        {/* Loading text */}
        <div className="mt-4 text-center">
          <p className="text-primary font-semibold animate-bounce">Loading...</p>
        </div>
      </div>
    </div>
  );
}; 