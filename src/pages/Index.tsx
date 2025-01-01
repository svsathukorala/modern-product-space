import React from 'react';
import { Button } from '@/components/ui/button';
import ProductFeature from '../components/ProductFeature';
import { Code2, Cpu, Workflow, Sparkles } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-apple-white dark:bg-dark-background text-apple-dark dark:text-white transition-colors duration-300">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-apple-gray/50 to-transparent dark:from-dark-muted/20 dark:to-transparent pointer-events-none" />
        
        <h1 className="text-4xl md:text-7xl font-bold mb-4 text-center animate-fade-in tracking-tight text-apple-dark dark:text-white">
          Innovation Redefined
        </h1>
        <p className="text-xl text-apple-silver dark:text-gray-200 mb-8 text-center max-w-2xl animate-fade-in delay-100">
          Experience the future of development with our cutting-edge platform
        </p>
        
        <div className="flex gap-4 mb-12 animate-slide-up delay-200">
          <Button 
            variant="default"
            className="bg-apple-blue hover:bg-apple-blue/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            Get Started
          </Button>
          <Button 
            variant="outline"
            className="border-apple-blue text-apple-blue dark:text-white hover:bg-apple-blue/10 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            Learn More
          </Button>
        </div>
        
        <div className="w-full max-w-4xl h-[400px] md:h-[600px] relative animate-float">
          <div className="absolute inset-0 bg-gradient-to-b from-apple-gray/5 to-transparent dark:from-dark-muted/10 dark:to-transparent rounded-3xl backdrop-blur-sm" />
          <spline-viewer url="https://prod.spline.design/2KjFtsGLZ7JrP1QO/scene.splinecode"></spline-viewer>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 px-4 bg-apple-gray dark:bg-dark-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center tracking-tight text-apple-dark dark:text-white">
            Built for Innovation
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

      {/* Part by Part Introductions */}
      <section className="py-20 px-4 bg-apple-white dark:bg-dark-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center tracking-tight text-apple-dark dark:text-white">
            Discover Our Platform
          </h2>
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-apple-gray/50 dark:bg-dark-muted hover:bg-apple-gray dark:hover:bg-dark-muted/80 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-apple-blue">Development Tools</h3>
              <p className="text-apple-dark dark:text-gray-200">
                Comprehensive suite of development tools designed to enhance your workflow and boost productivity.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-apple-gray/50 dark:bg-dark-muted hover:bg-apple-gray dark:hover:bg-dark-muted/80 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-apple-blue">API Integration</h3>
              <p className="text-apple-dark dark:text-gray-200">
                Seamless API integration capabilities with extensive documentation and support resources.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-apple-gray/50 dark:bg-dark-muted hover:bg-apple-gray dark:hover:bg-dark-muted/80 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-apple-blue">Security Features</h3>
              <p className="text-apple-dark dark:text-gray-200">
                Enterprise-grade security features to protect your applications and data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Specs Section */}
      <section className="py-20 px-4 bg-apple-gray dark:bg-dark-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center tracking-tight text-apple-dark dark:text-white">
            Technical Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-apple-white dark:bg-dark-muted hover:bg-apple-gray dark:hover:bg-dark-muted/80 transition-all duration-300">
                <h3 className="font-semibold mb-2 text-apple-blue">Performance</h3>
                <p className="text-apple-dark dark:text-gray-200">• 99.9% Uptime<br/>• Global CDN<br/>• Sub-100ms Latency</p>
              </div>
              <div className="p-6 rounded-2xl bg-apple-white dark:bg-dark-muted hover:bg-apple-gray dark:hover:bg-dark-muted/80 transition-all duration-300">
                <h3 className="font-semibold mb-2 text-apple-blue">Security</h3>
                <p className="text-apple-dark dark:text-gray-200">• End-to-end Encryption<br/>• SOC2 Compliant<br/>• Regular Security Audits</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-apple-white dark:bg-dark-muted hover:bg-apple-gray dark:hover:bg-dark-muted/80 transition-all duration-300">
                <h3 className="font-semibold mb-2 text-apple-blue">Scalability</h3>
                <p className="text-apple-dark dark:text-gray-200">• Auto-scaling<br/>• Load Balancing<br/>• Distributed Systems</p>
              </div>
              <div className="p-6 rounded-2xl bg-apple-white dark:bg-dark-muted hover:bg-apple-gray dark:hover:bg-dark-muted/80 transition-all duration-300">
                <h3 className="font-semibold mb-2 text-apple-blue">Developer Tools</h3>
                <p className="text-apple-dark dark:text-gray-200">• Comprehensive SDK<br/>• CLI Tools<br/>• Extensive Documentation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;