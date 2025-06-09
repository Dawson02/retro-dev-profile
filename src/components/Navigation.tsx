
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200; // Increased offset for better detection

      // Check sections from bottom to top
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;
          
          // If we're in the viewport of this section
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navItems[i].id);
            break;
          }
          
          // Special case for the last section (contact) - if we're near the bottom
          if (i === sections.length - 1 && window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
            setActiveSection('contact');
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-sm border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="font-pixel text-xl cursor-pointer retro-hover text-primary"
          onClick={() => scrollToSection('home')}
        >
          DM
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 text-sm font-mono transition-all duration-300 pixel-corners ${
                activeSection === item.id
                  ? 'bg-primary text-primary-foreground retro-glow'
                  : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>        

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            className="font-pixel text-xs"
            onClick={() => setIsMobileMenuOpen(prev => !prev)} 
          >
            Menu
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2 bg-background border-t border-border">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsMobileMenuOpen(false); // 👈 Close menu after clicking
              }}
              className={`text-left w-full px-4 py-2 text-sm font-mono transition-all duration-300 pixel-corners ${
                activeSection === item.id
                  ? 'bg-primary text-primary-foreground retro-glow'
                  : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};


export default Navigation;
