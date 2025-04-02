
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ShieldCheck, 
  Lightbulb, 
  BarChart3, 
  Zap, 
  BrainCircuit, 
  Network 
} from 'lucide-react';

export const AnimatedCardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card animateHover variant="lift" className="overflow-hidden">
        <CardHeader>
          <ShieldCheck className="h-8 w-8 text-tyrian-600" />
          <CardTitle className="mt-3">Enterprise Security</CardTitle>
          <CardDescription>
            Advanced security solutions for enterprise applications.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Our enterprise-grade security ensures your data remains protected with end-to-end encryption.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">Learn More</Button>
        </CardFooter>
      </Card>

      <Card animateHover variant="glow" className="overflow-hidden">
        <CardHeader>
          <Lightbulb className="h-8 w-8 text-tyrian-600" />
          <CardTitle className="mt-3">Innovative Solutions</CardTitle>
          <CardDescription>
            Cutting-edge approaches to complex problems.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Stay ahead of the competition with our innovative solutions designed for forward-thinking businesses.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">Discover</Button>
        </CardFooter>
      </Card>

      <Card animateHover variant="scale" className="overflow-hidden">
        <CardHeader>
          <BarChart3 className="h-8 w-8 text-tyrian-600" />
          <CardTitle className="mt-3">Advanced Analytics</CardTitle>
          <CardDescription>
            Data-driven insights for better decisions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Transform your raw data into actionable insights with our advanced analytics platform.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">Explore</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export const AnimatedCardFadeIn = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      {[
        {
          icon: <Zap className="h-8 w-8 text-tyrian-600" />,
          title: "Lightning Fast",
          description: "Our optimized algorithms deliver results in milliseconds."
        },
        {
          icon: <BrainCircuit className="h-8 w-8 text-tyrian-600" />,
          title: "Intelligent Automation",
          description: "Self-learning systems that improve over time."
        },
        {
          icon: <Network className="h-8 w-8 text-tyrian-600" />,
          title: "Seamless Integration",
          description: "Connects with your existing tools and workflows."
        }
      ].map((item, index) => (
        <Card 
          key={index} 
          animateOnView 
          variant="fade" 
          className="overflow-hidden"
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          <CardHeader>
            {item.icon}
            <CardTitle className="mt-3">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
