
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, ArrowDown, ArrowUp } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import AboutTerminal from '@/components/AboutTerminal';
import ContactForm from '@/components/ContactForm';
import Skills from '@/components/Skills';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Add scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Scan lines effect */}
      <div className="fixed inset-0 scan-lines pointer-events-none z-50"></div>
      
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-border z-50">
        <div 
          className="h-full bg-primary transition-all duration-300 retro-glow"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <Hero />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-reveal mb-16 text-center">
            <h2 className="text-4xl font-pixel text-glow mb-4">
              &gt; projects.exe
            </h2>
            <p className="text-muted-foreground text-lg">
              Loading portfolio assets...
            </p>
          </div>
          <Projects />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-reveal mb-16 text-center">
            <h2 className="text-4xl font-pixel text-glow mb-4">
              &gt; skills.json
            </h2>
            <p className="text-muted-foreground text-lg">
              Parsing technology stack...
            </p>
          </div>
          <Skills />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-reveal mb-16 text-center">
            <h2 className="text-4xl font-pixel text-glow mb-4">
              &gt; whoami
            </h2>
            <p className="text-muted-foreground text-lg">
              Initializing user profile...
            </p>
          </div>
          <AboutTerminal />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-reveal mb-16 text-center">
            <h2 className="text-4xl font-pixel text-glow mb-4">
              &gt; connect.sh
            </h2>
            <p className="text-muted-foreground text-lg">
              Establishing connection...
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground font-pixel text-xs">
            © 2024 Dawson Murray. Built with React & Pixel Love.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a 
              href="https://github.com/Dawson02" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/dawson-murray-82375b22b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
