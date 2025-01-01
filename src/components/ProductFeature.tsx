import React from 'react';

interface ProductFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProductFeature: React.FC<ProductFeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="group p-6 rounded-2xl bg-apple-white dark:bg-dark-muted transition-all duration-300">
      <div className="text-apple-blue mb-4 text-3xl transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-apple-dark dark:text-white">{title}</h3>
      <p className="text-apple-silver dark:text-gray-400">{description}</p>
    </div>
  );
};

export default ProductFeature;