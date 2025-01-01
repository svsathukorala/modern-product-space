import React from 'react';
import { Button } from '@/components/ui/button';
import ProductFeature from '../components/ProductFeature';
import { Code2, Cpu, Workflow, Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-apple-white text-apple-dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-apple-gray/50 to-transparent pointer-events-none" />
        
        <h1 className="text-4xl md:text-7xl font-bold mb-4 text-center animate-fade-in tracking-tight">
          Innovation Redefined
        </h1>
        <p className="text-xl text-apple-silver mb-8 text-center max-w-2xl animate-fade-in delay-100">
          Experience the future of development with our cutting-edge platform
        </p>
        
        <div className="flex gap-4 mb-12 animate-slide-up delay-200">
          <Button 
            variant="default"
            className="bg-apple-blue hover:bg-apple-blue/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
          >
            Get Started
          </Button>
          <Button 
            variant="outline"
            className="border-apple-blue text-apple-blue hover:bg-apple-blue/10 px-8 py-6 text-lg rounded-full transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
        
        <div className="w-full max-w-4xl h-[400px] md:h-[600px] relative animate-float">
          <div className="absolute inset-0 bg-gradient-to-b from-apple-gray/5 to-transparent rounded-3xl backdrop-blur-sm" />
          <spline-viewer url="https://prod.spline.design/2KjFtsGLZ7JrP1QO/scene.splinecode"></spline-viewer>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-apple-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center tracking-tight">
            Built for the Future
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductFeature
              icon={<Code2 className="text-apple-blue" />}
              title="Modern Tech Stack"
              description="Built with TypeScript, React, and cutting-edge tools for maximum developer productivity"
            />
            <ProductFeature
              icon={<Cpu className="text-apple-blue" />}
              title="Powerful API"
              description="Flexible and robust API architecture with comprehensive documentation"
            />
            <ProductFeature
              icon={<Workflow className="text-apple-blue" />}
              title="Seamless Integration"
              description="Easy integration with existing workflows and development processes"
            />
            <ProductFeature
              icon={<Sparkles className="text-apple-blue" />}
              title="Innovation First"
              description="Stay ahead with continuous updates and innovative features"
            />
          </div>
        </div>
      </section>

      {/* Tech Specs Section */}
      <section className="py-20 px-4 bg-apple-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center tracking-tight">
            Technical Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-apple-gray/50 hover:bg-apple-gray transition-all duration-300">
                <h3 className="font-semibold mb-2 text-apple-blue">Performance</h3>
                <p className="text-apple-silver">• 99.9% Uptime<br/>• Global CDN<br/>• Sub-100ms Latency</p>
              </div>
              <div className="p-6 rounded-2xl bg-apple-gray/50 hover:bg-apple-gray transition-all duration-300">
                <h3 className="font-semibold mb-2 text-apple-blue">Security</h3>
                <p className="text-apple-silver">• End-to-end Encryption<br/>• SOC2 Compliant<br/>• Regular Security Audits</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-apple-gray/50 hover:bg-apple-gray transition-all duration-300">
                <h3 className="font-semibold mb-2 text-apple-blue">Scalability</h3>
                <p className="text-apple-silver">• Auto-scaling<br/>• Load Balancing<br/>• Distributed Systems</p>
              </div>
              <div className="p-6 rounded-2xl bg-apple-gray/50 hover:bg-apple-gray transition-all duration-300">
                <h3 className="font-semibold mb-2 text-apple-blue">Developer Tools</h3>
                <p className="text-apple-silver">• Comprehensive SDK<br/>• CLI Tools<br/>• Extensive Documentation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;