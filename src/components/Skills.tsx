
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", level: 90, color: "bg-blue-500" },
        { name: "Angular", level: 80, color: "bg-red-500" },
        { name: "TypeScript", level: 85, color: "bg-blue-600" },
        { name: "JavaScript", level: 90, color: "bg-yellow-500" },
        { name: "HTML/CSS", level: 95, color: "bg-orange-500" }
      ]
    },
    {
      title: "Backend", 
      icon: "⚙️",
      skills: [
        { name: "Java/Spring", level: 85, color: "bg-orange-600" },
        { name: "Node.js", level: 80, color: "bg-green-500" },
        { name: "Python", level: 75, color: "bg-yellow-600" },
        { name: "Express.js", level: 80, color: "bg-gray-600" }
      ]
    },
    {
      title: "Database",
      icon: "🗄️", 
      skills: [
        { name: "PostgreSQL", level: 85, color: "bg-blue-700" },
        { name: "MySQL", level: 80, color: "bg-orange-600" },
        { name: "MongoDB", level: 70, color: "bg-green-600" },
        { name: "Firebase", level: 75, color: "bg-yellow-600" }
      ]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 90, color: "bg-red-600" },
        { name: "Figma", level: 80, color: "bg-purple-500" },
        { name: "VSCode", level: 95, color: "bg-blue-500" },
        { name: "PyQt", level: 70, color: "bg-green-600" }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-reveal">
      {skillCategories.map((category, categoryIndex) => (
        <Card 
          key={categoryIndex} 
          className="bg-card border-border pixel-corners retro-hover"
        >
          <CardHeader>
            <CardTitle className="font-pixel text-lg text-primary flex items-center gap-3">
              <span className="text-2xl">{category.icon}</span>
              {category.title}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm text-foreground">
                    {skill.name}
                  </span>
                  <Badge 
                    variant="outline" 
                    className="font-mono text-xs pixel-corners border-primary/50"
                  >
                    {skill.level}%
                  </Badge>
                </div>
                
                <div className="w-full bg-border rounded-none h-2 pixel-corners overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} retro-glow-subtle transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Skills;
