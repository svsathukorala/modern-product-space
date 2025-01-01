import React from 'react';

interface ProductFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProductFeature: React.FC<ProductFeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="group p-6 rounded-2xl bg-apple-white hover:bg-apple-gray/50 transition-all duration-300">
      <div className="text-apple-blue mb-4 text-3xl group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-apple-dark">{title}</h3>
      <p className="text-apple-silver group-hover:text-apple-dark transition-colors">{description}</p>
    </div>
  );
};

export default ProductFeature;