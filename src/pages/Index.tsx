import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import ProductFeature from '../components/ProductFeature';
import { Cpu, Battery, Wifi, Zap } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-space-dark to-space-light text-white overflow-x-hidden">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center animate-fade-in">
          Experience the Future
        </h1>
        <p className="text-xl text-gray-400 mb-8 text-center max-w-2xl animate-fade-in">
          Discover our revolutionary product that changes everything
        </p>
        
        {/* 3D Model Viewer */}
        <div className="w-full max-w-4xl h-[400px] md:h-[600px] relative animate-float">
          <spline-viewer url="https://prod.spline.design/2KjFtsGLZ7JrP1QO/scene.splinecode"></spline-viewer>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Cutting-Edge Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductFeature
              icon={<Cpu />}
              title="Advanced Processing"
              description="Next-generation chip with unprecedented performance and efficiency"
            />
            <ProductFeature
              icon={<Battery />}
              title="All-Day Battery"
              description="Up to 24 hours of battery life on a single charge"
            />
            <ProductFeature
              icon={<Wifi />}
              title="Ultra-Fast Connectivity"
              description="Lightning-fast 5G and Wi-Fi 6E support"
            />
            <ProductFeature
              icon={<Zap />}
              title="Quick Charging"
              description="Get 50% charge in just 30 minutes"
            />
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 px-4 bg-space-light/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-space-light/20 backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Dimensions</h3>
                <p className="text-gray-400">Height: 150mm<br/>Width: 75mm<br/>Depth: 8.3mm</p>
              </div>
              <div className="p-4 rounded-lg bg-space-light/20 backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Display</h3>
                <p className="text-gray-400">6.7-inch OLED<br/>2778 x 1284 pixels<br/>120Hz refresh rate</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-space-light/20 backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Performance</h3>
                <p className="text-gray-400">4nm processor<br/>16GB RAM<br/>512GB Storage</p>
              </div>
              <div className="p-4 rounded-lg bg-space-light/20 backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Camera</h3>
                <p className="text-gray-400">48MP main camera<br/>12MP ultra-wide<br/>12MP telephoto</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;