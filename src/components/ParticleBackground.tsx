import React from 'react';

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-purple-400/10"
          style={{
            width: Math.random() * 6 + 1 + 'px',
            height: Math.random() * 6 + 1 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animation: `particle ${Math.random() * 20 + 10}s linear infinite`,
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;