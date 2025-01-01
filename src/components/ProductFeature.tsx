import React from 'react';

interface ProductFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProductFeature: React.FC<ProductFeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="group p-6 rounded-2xl bg-apple-white dark:bg-dark-muted hover:bg-apple-gray/50 dark:hover:bg-dark-muted/80 transition-all duration-300 animate-fade-in hover:animate-glow">
      <div className="text-apple-blue mb-4 text-3xl group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-apple-dark dark:text-white">{title}</h3>
      <p className="text-apple-silver dark:text-gray-400 group-hover:text-apple-dark dark:group-hover:text-white transition-colors">{description}</p>
    </div>
  );
};

export default ProductFeature;