
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Cpu, Database, BarChart, Search, Eye, MessageSquare, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const serviceCategories = [
    {
      name: "AI Solutions",
      services: [
        {
          icon: <Brain className="h-6 w-6 text-tyrian-600" />,
          title: "Machine Learning",
          description: "Custom machine learning models to solve complex business problems.",
          path: "/services/machine-learning"
        },
        {
          icon: <MessageSquare className="h-6 w-6 text-tyrian-600" />,
          title: "Natural Language Processing",
          description: "Advanced NLP solutions to understand and generate human language.",
          path: "/services/natural-language-processing"
        },
        {
          icon: <Eye className="h-6 w-6 text-tyrian-600" />,
          title: "Computer Vision",
          description: "Image and video analysis for automated visual understanding.",
          path: "/services/computer-vision"
        }
      ]
    },
    {
      name: "Data Services",
      services: [
        {
          icon: <Database className="h-6 w-6 text-tyrian-600" />,
          title: "Big Data Analytics",
          description: "Turn your data into actionable insights with advanced analytics.",
          path: "/services/big-data-analytics"
        },
        {
          icon: <BarChart className="h-6 w-6 text-tyrian-600" />,
          title: "Predictive Analytics",
          description: "Forecast trends and identify opportunities in your data.",
          path: "/services/predictive-analytics"
        },
        {
          icon: <Search className="h-6 w-6 text-tyrian-600" />,
          title: "Data Mining",
          description: "Discover patterns and extract valuable information from large datasets.",
          path: "/services/data-mining"
        }
      ]
    }
  ];

  const services = [
    {
      icon: <Brain className="h-12 w-12 text-tyrian-600" />,
      title: "AI Consulting",
      description: "Strategic guidance on implementing AI solutions tailored to your business needs.",
      features: [
        "AI readiness assessment",
        "Custom AI strategy development",
        "Implementation roadmap",
        "ROI forecasting"
      ],
      path: "/services/ai-consulting"
    },
    {
      icon: <Cpu className="h-12 w-12 text-tyrian-600" />,
      title: "Machine Learning Solutions",
      description: "Custom machine learning models to solve complex business problems.",
      features: [
        "Supervised & unsupervised learning",
        "Deep learning models",
        "Reinforcement learning",
        "Transfer learning applications"
      ],
      path: "/services/machine-learning"
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-tyrian-600" />,
      title: "Natural Language Processing",
      description: "Advanced NLP solutions to understand, interpret, and generate human language.",
      features: [
        "Sentiment analysis",
        "Chatbot development",
        "Text summarization",
        "Language translation"
      ],
      path: "/services/natural-language-processing"
    },
    {
      icon: <Eye className="h-12 w-12 text-tyrian-600" />,
      title: "Computer Vision",
      description: "Image and video analysis solutions for automated visual understanding.",
      features: [
        "Object detection & recognition",
        "Facial recognition",
        "Video analytics",
        "Augmented reality integration"
      ],
      path: "/services/computer-vision"
    },
    {
      icon: <Database className="h-12 w-12 text-tyrian-600" />,
      title: "Big Data Analytics",
      description: "Turn your data into actionable insights with advanced analytics.",
      features: [
        "Data warehousing",
        "Real-time analytics",
        "Predictive modeling",
        "Data visualization"
      ],
      path: "/services/big-data-analytics"
    },
    {
      icon: <Search className="h-12 w-12 text-tyrian-600" />,
      title: "AI Research",
      description: "Cutting-edge research to advance the state of artificial intelligence.",
      features: [
        "Academic partnerships",
        "Custom research projects",
        "Publication support",
        "Technology prototyping"
      ],
      path: "/services/ai-research"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | TyrianAI</title>
        <meta name="description" content="Explore TyrianAI's comprehensive range of AI and machine learning services designed to transform your business." />
      </Helmet>

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold gradient-heading mb-6 animate-fade-in">Our Services</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 animate-slide-up">
              Cutting-edge AI solutions designed to transform your business and drive innovation.
            </p>
          </div>
        </div>

        {/* Services Navigation Menu */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Explore Our Services</h2>
            
            {/* Desktop Navigation Menu */}
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  {serviceCategories.map((category, index) => (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {category.services.map((service, serviceIndex) => (
                            <li key={serviceIndex}>
                              <Link to={service.path}>
                                <NavigationMenuLink asChild>
                                  <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                    <div className="flex items-center mb-2">
                                      {service.icon}
                                      <div className="text-sm font-medium leading-none ml-2">{service.title}</div>
                                    </div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      {service.description}
                                    </p>
                                  </a>
                                </NavigationMenuLink>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ))}
                  <NavigationMenuItem>
                    <Link to="/services">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        All Services
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            
            {/* Mobile Accordion Menu */}
            <div className="md:hidden space-y-4">
              {serviceCategories.map((category, index) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <button
                    className="flex items-center justify-between w-full text-left font-medium text-gray-900 dark:text-white py-2"
                    onClick={() => setActiveCategory(activeCategory === category.name ? null : category.name)}
                  >
                    <span>{category.name}</span>
                    <ChevronDown 
                      className={`h-5 w-5 transition-transform ${activeCategory === category.name ? 'transform rotate-180' : ''}`} 
                    />
                  </button>
                  
                  {activeCategory === category.name && (
                    <div className="mt-2 space-y-2 pl-4">
                      {category.services.map((service, serviceIndex) => (
                        <Link 
                          key={serviceIndex} 
                          to={service.path}
                          className="block py-2 text-gray-600 hover:text-tyrian-600 dark:text-gray-300 dark:hover:text-tyrian-400"
                        >
                          <div className="flex items-center">
                            {service.icon}
                            <span className="ml-2">{service.title}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link 
                to="/services"
                className="block w-full text-center bg-gray-100 dark:bg-gray-700 rounded-md py-2 font-medium text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-gray-200 dark:border-gray-700 overflow-hidden"
                animateHover
                animateOnView
                variant={index % 3 === 0 ? "lift" : index % 3 === 1 ? "glow" : "scale"}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-tyrian-600 dark:text-tyrian-400 mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to={service.path} className="w-full">
                    <Button className="w-full hover-lift" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">Our Approach</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-slide-up">
              A proven methodology that delivers successful AI implementations.
            </p>
          </div>
          
          <div className="relative">
            {/* Process Steps */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-tyrian-200 dark:bg-tyrian-800 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { 
                  number: "01",
                  title: "Discovery",
                  description: "Understanding your business objectives and identifying how AI can help achieve them."
                },
                { 
                  number: "02",
                  title: "Design",
                  description: "Creating the architecture and specifications for your custom AI solution."
                },
                { 
                  number: "03",
                  title: "Development",
                  description: "Building and training the AI models with iterative testing and refinement."
                },
                { 
                  number: "04",
                  title: "Deployment",
                  description: "Implementing the solution in your environment with ongoing support and optimization."
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm relative hover-lift"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 bg-tyrian-600 dark:bg-tyrian-700 rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto lg:mx-0">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center lg:text-left">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center lg:text-left">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-tyrian-800 to-tyrian-600 py-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to transform your business with AI?</h2>
              <p className="text-xl text-white/80 mb-8">
                Contact us today to discuss how our services can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-white text-tyrian-800 hover:bg-gray-100 hover-scale">
                  Schedule a Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20 hover-scale">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
