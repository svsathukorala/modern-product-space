import React from 'react';

interface ProductFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProductFeature: React.FC<ProductFeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="group p-6 rounded-xl bg-space-light/20 backdrop-blur-sm transition-all duration-300 hover:bg-space-light/30 hover:scale-105">
      <div className="text-accent mb-4 text-3xl group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-gray-400 group-hover:text-white transition-colors">{description}</p>
    </div>
  );
};

export default ProductFeature;