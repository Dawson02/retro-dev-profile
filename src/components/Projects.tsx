import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "CopyThat App",
      description: "Multi-clipboard manager with global hotkey detection for enhanced productivity",
      tech: ["Python", "PyQt", "Clipboard API"],
      features: ["Global Ctrl+C detection", "Clipboard history", "User-friendly interface"],
      status: "Active Development",
      github: "https://github.com/Dawson02/CopyThat",
      demo: null
    },
    {
      title: "Real-time Chat App",
      description: "Live messaging platform with authentication and presence detection",
      tech: ["React", "Firebase", "Real-time DB"],
      features: ["Real-time messaging", "User authentication", "Presence detection"],
      status: "Completed",
      github: "https://github.com/Dawson02/ChatterBox",
      demo: null
    },
    {
      title: "Weather Forecast App",
      description: "Global weather data application with dynamic API integration",
      tech: ["React", "Weather API", "Geolocation"],
      features: ["Global weather data", "Location search", "Forecast display"],
      status: "Completed",
      github: "https://github.com/Dawson02/Weather_App_1",
      demo: null
    },
    {
      title: "LocalPro Services",
      description: "Platform connecting users with local service providers",
      tech: ["React", "Node.js", "PostgreSQL", "Supabase"],
      features: ["Service listings", "User authentication", "Provider management"],
      status: "Deployed",
      github: "https://github.com/Dawson02/LocalPro",
      demo: "https://locallyservices.com/" 
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <Card 
          key={index} 
          className={`bg-card border-border retro-hover pixel-corners scroll-reveal ${
            index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
          }`}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="font-pixel text-lg text-primary mb-2">
                  {project.title}
                </CardTitle>
                <Badge 
                  variant={project.status === 'Completed' || project.status === 'Deployed' ? 'default' : 'secondary'}
                  className={`font-mono text-xs pixel-corners ${
                    project.status === 'Completed' || project.status === 'Deployed' ? 'bg-green-600' : 'bg-yellow-600'
                  }`}
                >
                  {project.status}
                </Badge>
              </div>
              <Button variant="ghost" size="sm" className="p-2" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            </div>
            <CardDescription className="font-mono text-muted-foreground">
              {project.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Tech Stack */}
            <div>
              <h4 className="font-mono text-sm text-primary mb-2">&gt; Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex} 
                    variant="outline" 
                    className="font-mono text-xs pixel-corners border-primary/50"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-mono text-sm text-primary mb-2">&gt; Key Features:</h4>
              <ul className="space-y-1">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="font-mono text-sm text-muted-foreground">
                    <span className="text-primary">•</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              {project.demo ? (
                <Button size="sm" className="retro-button text-xs" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Live Demo
                  </a>
                </Button>
              ) : (
                <Button size="sm" className="retro-button text-xs" disabled>
                  Live Demo
                </Button>
              )}
              <Button 
                variant="outline" 
                size="sm" 
                className="pixel-corners border-primary/50 text-primary font-mono text-xs"
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  Source Code
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
