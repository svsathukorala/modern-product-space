import React from 'react';

interface ProductFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProductFeature: React.FC<ProductFeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="group p-6 rounded-xl bg-purple-900/20 backdrop-blur-sm transition-all duration-300 hover:bg-purple-900/30 hover:scale-105">
      <div className="text-purple-400 mb-4 text-3xl group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">{title}</h3>
      <p className="text-gray-400 group-hover:text-white transition-colors">{description}</p>
    </div>
  );
};

export default ProductFeature;