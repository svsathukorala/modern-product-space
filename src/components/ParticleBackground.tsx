import React from 'react';

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden dark:bg-dark-background">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue-400/10 dark:bg-blue-500/20"
          style={{
            width: Math.random() * 6 + 1 + 'px',
            height: Math.random() * 6 + 1 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animation: `particle ${Math.random() * 20 + 10}s linear infinite`,
            filter: 'blur(2px)',
            boxShadow: '0 0 8px rgba(41, 151, 255, 0.4)',
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;