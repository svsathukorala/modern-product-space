import React from 'react';

interface ProductFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProductFeature: React.FC<ProductFeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="group p-6 rounded-2xl bg-white/90 dark:bg-dark-muted/90 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in">
      <div className="text-apple-blue mb-4 text-3xl transition-transform duration-300 group-hover:scale-110">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-apple-dark dark:text-white transition-colors duration-300">{title}</h3>
      <p className="text-apple-silver dark:text-gray-400 transition-colors duration-300">{description}</p>
    </div>
  );
};

export default ProductFeature;