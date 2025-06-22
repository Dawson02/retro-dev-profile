
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutTerminal = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Passionate software developer combining creativity with technology";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const systemStatus = [
    { label: "Status", value: "Available for work", color: "text-green-400" },
    { label: "Location", value: "Newfoundland, Canada", color: "text-blue-400" },
    { label: "Experience", value: "2+ years", color: "text-yellow-400" },
    { label: "Education", value: "Keyin College Graduate", color: "text-purple-400" },
    { label: "Focus", value: "Full-stack Development", color: "text-orange-400" }
  ];

  const interests = [
    "🚗 Automotive Technology",
    "🎮 Gaming & Interactive Design", 
    "⚡ Emerging Technologies",
    "🛠️ Open Source Contributions"
  ];

  return (
    <div className="max-w-4xl mx-auto scroll-reveal">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Terminal Window */}
        <Card className="bg-black border-primary pixel-corners retro-glow-subtle">
          <CardContent className="p-6">
            <div className="font-mono text-sm space-y-2">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-primary/30">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-primary ml-2">terminal.dmurray</span>
              </div>

              {/* Commands */}
              <div className="space-y-3">
                <div>
                  <span className="text-primary">dawson@portfolio:~$</span> cat about.txt
                </div>
                <div className="text-foreground pl-4">
                  {typedText}<span className="text-primary animate-pulse">|</span>
                </div>
                
                <div className="mt-4">
                  <span className="text-primary">dawson@portfolio:~$</span> ls interests/
                </div>
                <div className="pl-4 space-y-1">
                  {interests.map((interest, index) => (
                    <div key={index} className="text-muted-foreground">
                      {interest}
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <span className="text-primary">dawson@portfolio:~$</span> grep -i "philosophy" mindset.txt
                </div>
                <div className="text-foreground pl-4 italic">
                  "Combining creativity with technology to build meaningful solutions"
                </div>

                <div className="mt-4">
                  <span className="text-primary">dawson@portfolio:~$</span> system-status --short
                </div>
                <div className="pl-4 space-y-1 text-foreground">
                <div>Current Focus: React Native</div>
                <div>Last Bug: Forgot a semicolon</div>
                <div>Coffee: 92%</div>
                </div>

                <div className="mt-4 text-primary terminal-cursor">
                  dawson@portfolio:~$ 
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Status Panel */}
        <Card className="bg-card border-border pixel-corners retro-glow-subtle">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="font-pixel text-xl text-primary mb-2">System Status</h3>
                <div className="w-16 h-1 bg-primary mx-auto retro-glow"></div>
              </div>

              <div className="space-y-3">
                {systemStatus.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="font-mono text-sm text-muted-foreground">
                      {item.label}:
                    </span>
                    <span className={`font-mono text-sm ${item.color}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <h4 className="font-mono text-primary mb-3">&gt; Current Projects:</h4>
                <div className="space-y-2">
                  <Badge variant="outline" className="pixel-corners border-green-500 text-green-400">
                    LocalPro Platform
                  </Badge>
                  {/* <Badge variant="outline" className="pixel-corners border-yellow-500 text-yellow-400">
                    AR Car Visualization
                  </Badge> */}
                  <Badge variant="outline" className="pixel-corners border-blue-500 text-blue-400">
                    Portfolio v2.0
                  </Badge>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-mono text-primary mb-3">&gt; Fun Facts:</h4>
                <div className="space-y-2 text-sm text-muted-foreground font-mono">
                  <div>• Graduated from Keyin College (2024)</div>
                  <div>• Gaming enthusiast & car modifier</div>
                  <div>• Always learning new technologies</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutTerminal;
