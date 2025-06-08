
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [output, setOutput] = useState([
    '> Connection established',
    '> Waiting for input...'
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setOutput(prev => [
      ...prev,
      `> Processing message from ${formData.name}...`,
      '> Message sent successfully!',
      '> Thank you for reaching out. I\'ll get back to you soon!',
      '> Connection maintained...'
    ]);

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto scroll-reveal">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form - Terminal Style */}
        <Card className="bg-black border-primary pixel-corners retro-glow-subtle">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-primary/30">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-primary ml-2 font-mono">contact.sh</span>
              </div>

              <div className="space-y-4 font-mono">
                <div>
                  <label className="text-primary text-sm">
                    dawson@portfolio:~$ enter_name --required
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="mt-2 bg-transparent border-primary/50 text-foreground font-mono pixel-corners"
                    placeholder="Your name here..."
                    required
                  />
                </div>

                <div>
                  <label className="text-primary text-sm">
                    dawson@portfolio:~$ set_email --contact
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-2 bg-transparent border-primary/50 text-foreground font-mono pixel-corners"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="text-primary text-sm">
                    dawson@portfolio:~$ compose_message --verbose
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="mt-2 bg-transparent border-primary/50 text-foreground font-mono pixel-corners min-h-[120px]"
                    placeholder="Let's discuss your project..."
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="retro-button w-full"
                >
                  ./send_message.sh
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Output Terminal */}
        <Card className="bg-card border-border pixel-corners retro-glow-subtle">
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* Terminal Output */}
              <div className="bg-black border border-primary/30 pixel-corners p-4 min-h-[300px]">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-primary/30">
                  <span className="text-primary font-mono text-sm">output.log</span>
                </div>
                
                <div className="space-y-1 font-mono text-sm">
                  {output.map((line, index) => (
                    <div 
                      key={index} 
                      className="text-green-400"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      {line}
                    </div>
                  ))}
                  <div className="text-primary terminal-cursor">
                    &gt; 
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="space-y-4">
                <h3 className="font-pixel text-lg text-primary">Quick Connect</h3>
                
                <div className="space-y-3">
                  <a 
                    href="mailto:dawsonmuray@outlook.com"
                    className="flex items-center gap-3 p-3 bg-primary/10 border border-primary/30 pixel-corners retro-hover font-mono text-sm"
                  >
                    <span className="text-primary">📧</span>
                    dawsonmuray@outlook.com
                  </a>
                  
                  <a 
                    href="https://github.com/Dawson02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-primary/10 border border-primary/30 pixel-corners retro-hover font-mono text-sm"
                  >
                    <Github className="w-4 h-4 text-primary" />
                    github.com/Dawson02
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/dawson-murray-82375b22b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-primary/10 border border-primary/30 pixel-corners retro-hover font-mono text-sm"
                  >
                    <Linkedin className="w-4 h-4 text-primary" />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;
