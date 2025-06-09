
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="text-center space-y-8 px-4 max-w-4xl mx-auto">
      {/* Pixel Avatar */}
      <div className="mb-8 animate-float mt-16 md:mt-8" data-tilt data-tilt-glare data-tilt-max-glare="0.5">
        <div className="w-32 h-32 mx-auto bg-primary pixel-corners retro-glow-subtle relative">
          <div className="absolute inset-2 bg-background pixel-corners">
            <div className="w-full h-full flex items-center justify-center font-pixel text-2xl text-primary">
              DM
            </div>
          </div>
        </div>
      </div>

      {/* Terminal-style intro */}
      <div className="font-mono text-left bg-card border border-border pixel-corners p-6 retro-glow-subtle max-w-2xl mx-auto">
        <div className="text-primary mb-2">dawson@portfolio:~$ whoami</div>
        <div className="text-foreground mb-4">
          <span className="text-primary">&gt;</span> Software Developer
        </div>
        <div className="text-primary mb-2">dawson@portfolio:~$ cat intro.txt</div>
        <div className="text-foreground mb-4">
          <span className="text-primary">&gt;</span> Passionate about full-stack development, gaming, and automotive tech
        </div>
        <div className="text-primary mb-2">dawson@portfolio:~$ ls skills/</div>
        <div className="text-foreground">
          <span className="text-primary">&gt;</span> React Angular Java Python Node.js PostgreSQL
        </div>
        <div className="mt-4 text-primary terminal-cursor">
          dawson@portfolio:~$ 
        </div>
      </div>

      {/* Call to action */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-pixel text-glow leading-tight">
          DAWSON MURRAY
        </h1>
        <p className="text-xl text-muted-foreground font-mono">
          Building the future, one commit at a time
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToProjects}
            className="retro-button"
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            className="pixel-corners border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground font-pixel text-xs"
          >
          <a
            href="/Dawson_Murray_SD_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-primary">Download CV</button>
          </a>
          </Button>
          
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </div>
  );
};

export default Hero;
