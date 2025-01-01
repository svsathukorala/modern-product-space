import React from 'react';
import { Button } from '@/components/ui/button';
import ProductFeature from '../components/ProductFeature';
import { Code2, Cpu, Workflow, Sparkles } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-apple-white to-apple-gray dark:from-dark-background dark:to-dark-muted text-apple-dark dark:text-white transition-all duration-500">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden bg-gradient-to-b from-transparent via-apple-gray/30 to-transparent dark:from-transparent dark:via-dark-muted/30 dark:to-transparent">
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
            className="bg-gradient-to-r from-apple-blue to-blue-500 hover:from-blue-500 hover:to-apple-blue text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 animate-pulse-slow"
          >
            Get Started
          </Button>
          <Button 
            variant="outline"
            className="border-apple-blue text-apple-blue dark:text-white hover:bg-apple-blue/10 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
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
      <section className="relative py-20 px-4 bg-gradient-to-br from-apple-gray/50 via-white to-apple-gray/50 dark:from-dark-muted dark:via-dark-background dark:to-dark-muted transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center tracking-tight text-apple-dark dark:text-white animate-fade-in">
            Built for Innovation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductFeature
              icon={<Code2 className="w-8 h-8 text-apple-blue animate-pulse-slow" />}
              title="Modern Tech Stack"
              description="Built with TypeScript, React, and cutting-edge tools for maximum developer productivity"
            />
            <ProductFeature
              icon={<Cpu className="w-8 h-8 text-apple-blue animate-pulse-slow" />}
              title="Powerful API"
              description="Flexible and robust API architecture with comprehensive documentation"
            />
            <ProductFeature
              icon={<Workflow className="w-8 h-8 text-apple-blue animate-pulse-slow" />}
              title="Seamless Integration"
              description="Easy integration with existing workflows and development processes"
            />
            <ProductFeature
              icon={<Sparkles className="w-8 h-8 text-apple-blue animate-pulse-slow" />}
              title="Innovation First"
              description="Stay ahead with continuous updates and innovative features"
            />
          </div>
        </div>
      </section>

      {/* Part by Part Introductions */}
      <section className="relative py-20 px-4 bg-gradient-to-tr from-apple-white via-apple-gray/30 to-apple-white dark:from-dark-background dark:via-dark-muted dark:to-dark-background transition-colors duration-500">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center tracking-tight text-apple-dark dark:text-white animate-fade-in">
            Discover Our Platform
          </h2>
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-dark-muted/80 backdrop-blur-sm hover:bg-white dark:hover:bg-dark-muted transition-all duration-300 animate-fade-in group hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-apple-blue group-hover:scale-105 transition-transform">Development Tools</h3>
              <p className="text-apple-dark dark:text-gray-200">
                Comprehensive suite of development tools designed to enhance your workflow and boost productivity.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-dark-muted/80 backdrop-blur-sm hover:bg-white dark:hover:bg-dark-muted transition-all duration-300 animate-fade-in group hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-apple-blue group-hover:scale-105 transition-transform">API Integration</h3>
              <p className="text-apple-dark dark:text-gray-200">
                Seamless API integration capabilities with extensive documentation and support resources.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-dark-muted/80 backdrop-blur-sm hover:bg-white dark:hover:bg-dark-muted transition-all duration-300 animate-fade-in group hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-apple-blue group-hover:scale-105 transition-transform">Security Features</h3>
              <p className="text-apple-dark dark:text-gray-200">
                Enterprise-grade security features to protect your applications and data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Specs Section */}
      <section className="relative py-20 px-4 bg-gradient-to-bl from-apple-gray/50 via-white to-apple-gray/50 dark:from-dark-muted dark:via-dark-background dark:to-dark-muted transition-colors duration-500">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center tracking-tight text-apple-dark dark:text-white animate-fade-in">
            Technical Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-white/90 dark:bg-dark-background/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105">
                <h3 className="font-semibold mb-2 text-apple-blue">Performance</h3>
                <p className="text-apple-dark dark:text-gray-200">• 99.9% Uptime<br/>• Global CDN<br/>• Sub-100ms Latency</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/90 dark:bg-dark-background/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105">
                <h3 className="font-semibold mb-2 text-apple-blue">Security</h3>
                <p className="text-apple-dark dark:text-gray-200">• End-to-end Encryption<br/>• SOC2 Compliant<br/>• Regular Security Audits</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-white/90 dark:bg-dark-background/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105">
                <h3 className="font-semibold mb-2 text-apple-blue">Scalability</h3>
                <p className="text-apple-dark dark:text-gray-200">• Auto-scaling<br/>• Load Balancing<br/>• Distributed Systems</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/90 dark:bg-dark-background/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105">
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