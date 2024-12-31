import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import ProductFeature from '../components/ProductFeature';
import { Code2, Cpu, Workflow, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-space-dark via-space-light/20 to-space-light text-white overflow-x-hidden">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-4">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent pointer-events-none" />
        
        <h1 className="text-4xl md:text-7xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-accent animate-fade-in">
          The Future of Innovation
        </h1>
        <p className="text-xl text-gray-300 mb-8 text-center max-w-2xl animate-fade-in">
          Revolutionizing development with cutting-edge technology and seamless integration
        </p>
        
        <div className="flex gap-4 mb-12">
          <Button 
            variant="default"
            className="bg-accent hover:bg-accent/80 text-black px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,65,0.5)]"
          >
            Get Started
          </Button>
          <Button 
            variant="outline"
            className="border-accent text-accent hover:bg-accent/10 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,65,0.3)]"
          >
            Documentation
          </Button>
        </div>
        
        <div className="w-full max-w-4xl h-[400px] md:h-[600px] relative animate-float group">
          <div className="absolute inset-0 bg-cyan-500/5 rounded-3xl backdrop-blur-sm group-hover:bg-cyan-500/10 transition-all duration-500" />
          <spline-viewer url="https://prod.spline.design/2KjFtsGLZ7JrP1QO/scene.splinecode"></spline-viewer>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-accent">
            Built for Developers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductFeature
              icon={<Code2 />}
              title="Modern Tech Stack"
              description="Built with TypeScript, React, and cutting-edge tools for maximum developer productivity"
            />
            <ProductFeature
              icon={<Cpu />}
              title="Powerful API"
              description="Flexible and robust API architecture with comprehensive documentation"
            />
            <ProductFeature
              icon={<Workflow />}
              title="Seamless Integration"
              description="Easy integration with existing workflows and development processes"
            />
            <ProductFeature
              icon={<Sparkles />}
              title="Innovation First"
              description="Stay ahead with continuous updates and innovative features"
            />
          </div>
        </div>
      </section>

      {/* Tech Specs Section */}
      <section className="py-20 px-4 bg-space-light/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-accent">
            Technical Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-space-light/20 backdrop-blur-sm hover:bg-space-light/30 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,65,0.3)]">
                <h3 className="font-semibold mb-2 text-accent">Performance</h3>
                <p className="text-gray-300">• 99.9% Uptime<br/>• Global CDN<br/>• Sub-100ms Latency</p>
              </div>
              <div className="p-6 rounded-xl bg-space-light/20 backdrop-blur-sm hover:bg-space-light/30 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,65,0.3)]">
                <h3 className="font-semibold mb-2 text-accent">Security</h3>
                <p className="text-gray-300">• End-to-end Encryption<br/>• SOC2 Compliant<br/>• Regular Security Audits</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-space-light/20 backdrop-blur-sm hover:bg-space-light/30 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,65,0.3)]">
                <h3 className="font-semibold mb-2 text-accent">Scalability</h3>
                <p className="text-gray-300">• Auto-scaling<br/>• Load Balancing<br/>• Distributed Systems</p>
              </div>
              <div className="p-6 rounded-xl bg-space-light/20 backdrop-blur-sm hover:bg-space-light/30 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,65,0.3)]">
                <h3 className="font-semibold mb-2 text-accent">Developer Tools</h3>
                <p className="text-gray-300">• Comprehensive SDK<br/>• CLI Tools<br/>• Extensive Documentation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;