import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Brain, Cpu, BarChart, Shield, Building, Microscope, Ambulance, ShoppingCart, GraduationCap, Globe, Users, Award, Rocket, Code, Clock, Server, HelpCircle, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AppContext } from "../App";

const Home = () => {
  const { openGetStartedForm } = useContext(AppContext);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <ScrollFadeIn>
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://cdn.pixabay.com/photo/2018/05/15/23/02/football-stadium-3404535_1280.jpg"
              alt="Banner Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-2/3 lg:pr-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-heading leading-tight mb-6 text-white">
                Trailblazing IT Solutions for a Digital Future
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8">
                Pioneering IT Solutions & Exceptional
Customer Experience, leading IT service provider, committed to transforming business ideas into
                scalable, future-ready applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={openGetStartedForm}
                    className="text-white px-8 py-6 text-lg"
                  >
                    Get Started
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white bg-transparent text-white hover:bg-white/10 px-8 py-6 text-lg"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
         
            </div>
          </div>
        </section>
      </ScrollFadeIn>



  {/* Who We Are - Section */}
  <ScrollFadeIn delay={350} direction="up">
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[100vw]">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
            Who We Are
          </h2>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>
            <p className="relative text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              We are an industry-leading IT service provider, committed to transforming business ideas into
              scalable, future-ready applications.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Innovation Card */}
          <ScrollFadeIn direction="left" delay={400}>
            <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-3 rounded-lg mr-4">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Innovation</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Pioneering cutting-edge solutions that drive digital transformation and business growth.
                </p>
              </div>
            </div>
          </ScrollFadeIn>

          {/* Excellence Card */}
          <ScrollFadeIn direction="up" delay={450}>
            <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-3 rounded-lg mr-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Excellence</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Delivering high-quality, scalable solutions that exceed client expectations.
                </p>
              </div>
            </div>
          </ScrollFadeIn>

          {/* Future-Ready Card */}
          <ScrollFadeIn direction="right" delay={500}>
            <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-3 rounded-lg mr-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Future-Ready</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Building scalable applications that adapt to evolving business needs and technological advancements.
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  </ScrollFadeIn>

 

      {/* Core Services Overview */}
      <ScrollFadeIn delay={200}>
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[100vw]">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
                Our Core Services Overview
              </h2>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-3xl"></div>
                <p className="relative text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our comprehensive services helps businesses of all sizes achieve their goals faster and more efficiently.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Brain className="h-10 w-10 text-white" />,
                  title: "IT Development & Digital Transformation",
                  description: "Custom machine learning models trained on your data to solve your unique business challenges.",
                  path: "/services/machine-learning",
                  image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80",
                  features: ["Custom Solutions", "Scalable Architecture", "Future-Ready"]
                },
                {
                  icon: <Cpu className="h-10 w-10 text-white" />,
                  title: "Robust Application Testing",
                  description: "Advanced text analysis, sentiment detection, and language understanding capabilities.",
                  path: "/services/natural-language-processing",
                  image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80",
                  features: ["Quality Assurance", "Performance Testing", "Security Testing"]
                },
                {
                  icon: <BarChart className="h-10 w-10 text-white" />,
                  title: "Elite IT Resource Augmentation",
                  description: "Forecast trends, identify risks, and uncover hidden opportunities in your business data.",
                  path: "/services/predictive-analytics",
                  image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&w=600&q=80",
                  features: ["Expert Team", "Flexible Scaling", "Cost-Effective"]
                },
                {
                  icon: <Shield className="h-10 w-10 text-white" />,
                  title: "Intelligent Web Services & API Integration",
                  description: "Protect your business with AI-powered threat detection and automated response systems.",
                  path: "/services/ai-security",
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
                  features: ["Secure Integration", "Real-time Monitoring", "Automated Response"]
                },
                {
                  icon: <Users className="h-10 w-10 text-white" />,
                  title: "BPO & КРО Solutions",
                  description: "Comprehensive business process outsourcing and knowledge process outsourcing services.",
                  path: "/services/bpo",
                  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
                  features: ["Process Optimization", "Cost Reduction", "24/7 Support"]
                }
              ].map((service, index) => (
                <ScrollFadeIn key={index} direction="up" delay={300 + (index * 100)} threshold={0.2}>
                  <div className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-tyrian-900/80 to-tyrian-700/40 z-10"></div>
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-tyrian-600 p-3 rounded-full z-20">
                        {service.icon}
                      </div>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <span key={idx} className="bg-tyrian-50 dark:bg-tyrian-900/30 text-tyrian-700 dark:text-tyrian-300 px-2 py-1 rounded-full text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Link 
                        to={service.path} 
                        className="inline-flex items-center text-tyrian-600 dark:text-tyrian-400 hover:text-tyrian-700 dark:hover:text-tyrian-300 transition-colors duration-300"
                      >
                        Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}

              {/* CTA Card */}
              <ScrollFadeIn direction="up" delay={800} threshold={0.2}>
                <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-tyrian-500/5 to-tyrian-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative h-full flex flex-col justify-between p-8">
                    <div>
                      <div className="bg-gradient-to-br from-tyrian-600 to-tyrian-700 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                        <Rocket className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Ready to Transform Your Business?
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                        Let's discuss how our services can help you achieve your goals and drive innovation.
                      </p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-5 w-5 text-tyrian-600 mr-2" />
                          <span>Customized Solutions</span>
                        </div>
                        <div className="flex items-center text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-5 w-5 text-tyrian-600 mr-2" />
                          <span>Expert Team Support</span>
                        </div>
                        <div className="flex items-center text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-5 w-5 text-tyrian-600 mr-2" />
                          <span>24/7 Assistance</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Button 
                        onClick={openGetStartedForm}
                        className="w-full bg-white border-2 border-tyrian-600 text-tyrian-600 hover:bg-tyrian-50 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Get Started Today
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            </div>

            <div className="mt-12 text-center">
              <Link to="/services">
                <Button className="bg-tyrian-700 hover:bg-tyrian-800 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Explore All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Industries We Serve */}
      <ScrollFadeIn delay={200} direction="left">
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[100vw]">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
              We provide tailored solutions across diverse sectors, ensuring transparency, security, and
              cutting-edge innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Industry cards */}
              {[
                {
                  id: 1,
                  title: "Healthcare",
                  description: "Revolutionizing patient care with AI diagnostics and personalized medicine.",
                  icon: <Ambulance className="h-8 w-8 text-white" />,
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
                  path: "/industries/healthcare"
                },
                {
                  id: 2,
                  title: "Finance",
                  description: "Enhancing financial services with fraud detection and automated trading systems.",
                  icon: <Building className="h-8 w-8 text-white" />,
                  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
                  path: "/industries/finance"
                },
                {
                  id: 3,
                  title: "Retail",
                  description: "Transforming customer experiences with personalized recommendations and inventory optimization.",
                  icon: <ShoppingCart className="h-8 w-8 text-white" />,
                  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
                  path: "/industries/retail"
                },
                {
                  id: 4,
                  title: "Manufacturing",
                  description: "Optimizing production lines and predictive maintenance with AI-powered systems.",
                  icon: <Cpu className="h-8 w-8 text-white" />,
                  image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80",
                  path: "/industries/manufacturing"
                },
                {
                  id: 5,
                  title: "Education",
                  description: "Enhancing learning experiences with personalized education and automated grading systems.",
                  icon: <GraduationCap className="h-8 w-8 text-white" />,
                  image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80",
                  path: "/industries/education"
                },
                {
                  id: 6,
                  title: "Research & Development",
                  description: "Accelerating discoveries with AI-driven data analysis and experimental design.",
                  icon: <Microscope className="h-8 w-8 text-white" />,
                  image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
                  path: "/industries/research"
                }
              ].map((industry) => (
                <ScrollFadeIn key={industry.id} direction="up" delay={200 + (industry.id * 100)} threshold={0.1}>
                  <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow">
                    <img 
                      src={industry.image} 
                      alt={`${industry.title} Industry`} 
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="mb-3">
                          {industry.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{industry.title}</h3>
                        <p className="text-white/80 mb-4">{industry.description}</p>
                        <Link to={industry.path} className="inline-flex items-center text-white hover:underline">
                          Learn more <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

    

      {/* What Sets Us Apart - Section */}
      <ScrollFadeIn delay={450} direction="left">
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[100vw]">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
                What Sets Us Apart?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
              Empower your business with innovative and scalable technology solutions!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  title: "Architects in Every Field",
                  description: "From software to security, we have domain experts who design, build, and optimize solutions tailored for success.",
                  icon: <Microscope className="h-10 w-10 text-white" />,
                  delay: 500
                },
                {
                  id: 2,
                  title: "Transparency at Every Step",
                  description: "No hidden costs, no surprises. We believe in clear communication, accountability, and trust.",
                  icon: <Clock className="h-10 w-10 text-white" />,
                  delay: 550
                },
                {
                  id: 3,
                  title: "Global Impact",
                  description: " Partnering with some of the Top 10 Fortune 500 companies in the USA, we bring world-class IT services to businesses worldwide.",
                  icon: <Server className="h-10 w-10 text-white" />,
                  delay: 600
                }
              ].map((item) => (
                <ScrollFadeIn key={item.id} direction="up" delay={item.delay} threshold={0.1}>
                  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden h-full">
                    <div className="bg-gradient-to-r from-tyrian-700 to-tyrian-500 p-6">
                      <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
            
            <ScrollFadeIn delay={650}>
              <div className="mt-12 text-center">
                <Link to="/about">
                  <Button className="bg-tyrian-700 hover:bg-tyrian-800 text-white">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </ScrollFadeIn>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Why Choose Us Section */}
      <ScrollFadeIn delay={500}>
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[100vw]">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
              Why Choose TkzUS?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Partner with the industry leader in artificial intelligence and machine learning solutions.
              </p>
            </div>
            
            {/* Redesigned cards with improved layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  id: 1,
                  title: "Architects of Digital Transformation",
                  description: "Our team includes PhD researchers and AI engineers from top tech companies and research institutions with a proven track record of innovation.",
                  icon: <Users className="h-10 w-10 text-white" />,
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                },
                {
                  id: 2,
                  title: "100% Transparency in Execution",
                  description: "We don't believe in one-size-fits-all. Every AI solution we develop is meticulously crafted to address your specific business needs and objectives.",
                  icon: <Brain className="h-10 w-10 text-white" />,
                  image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80"
                },
                {
                  id: 3,
                  title: "Global talent with deep industry expertise.",
                  description: "From initial consultation to deployment and beyond, we provide comprehensive support including 24/7 monitoring, maintenance, and continuous optimization.",
                  icon: <Clock className="h-10 w-10 text-white" />,
                  image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80"
                },
                {
                  id: 4,
                  title: "Proven ROI",
                  description: "Our clients consistently report a significant return on investment, with an average 35% increase in operational efficiency and 25% cost reduction.",
                  icon: <BarChart className="h-10 w-10 text-white" />,
                  image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&w=600&q=80"
                },
                {
                  id: 4,
                  title: "24/7 support with cutting-edge automation & Al.",
                  description: "Our clients consistently report a significant return on investment, with an average 35% increase in operational efficiency and 25% cost reduction.",
                  icon: <BarChart className="h-10 w-10 text-white" />,
                  image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&w=600&q=80"
                }
              ].map((feature) => (
                <ScrollFadeIn key={feature.id} direction="up" delay={600 + (feature.id * 100)} threshold={0.2}>
                  <div className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-tyrian-900/80 to-tyrian-700/40 z-10"></div>
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-tyrian-600 p-3 rounded-full z-20">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-8w00">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/about">
                <Button className="bg-tyrian-700 hover:bg-tyrian-800 text-white">
                  Learn More About Our Approach
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* FAQ Section - New */}
      <ScrollFadeIn delay={700} direction="up">
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[100vw]">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Find answers to the most common questions about our AI solutions and services.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
                <Accordion type="single" collapsible className="divide-y divide-gray-200 dark:divide-gray-700">
                  {[
                    {
                      question: "What industries do your AI solutions serve?",
                      answer: "Our AI solutions are designed to benefit a wide range of industries including healthcare, finance, retail, manufacturing, education, and research & development. Our tailored approach ensures that we address the specific challenges and opportunities in each sector."
                    },
                    {
                      question: "How long does AI implementation typically take?",
                      answer: "Implementation timelines vary based on project complexity, but our clients typically see initial results within 4-6 weeks. Our proven methodology accelerates development and deployment, getting you from concept to production 40% faster than industry averages."
                    },
                    {
                      question: "Do I need specialized technical knowledge to use your AI solutions?",
                      answer: "No, our solutions are designed with user-friendliness in mind. While we provide powerful AI capabilities, our interfaces are intuitive and accessible to non-technical users. We also offer comprehensive training and support to ensure your team can maximize the value of our solutions."
                    },
                    {
                      question: "How do you ensure data security and privacy?",
                      answer: "Security is paramount in everything we do. We implement industry-leading encryption, access controls, and compliance practices. All data processing adheres to relevant regulations such as GDPR, HIPAA, and CCPA. We also offer data residency options to meet specific regional requirements."
                    },
                    {
                      question: "Can your AI solutions integrate with our existing systems?",
                      answer: "Absolutely. Our solutions are built with integration in mind, featuring robust APIs and connectors for major enterprise systems, databases, and cloud services. We conduct thorough compatibility assessments to ensure seamless integration with your existing tech stack."
                    },
                    {
                      question: "What ongoing support do you provide after implementation?",
                      answer: "We provide comprehensive post-implementation support including 24/7 technical assistance, regular maintenance updates, performance optimization, and continuous model retraining. Our client success teams work proactively to ensure you achieve and maintain optimal results."
                    }
                  ].map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-none">
                      <AccordionTrigger className="py-6 px-6 hover:no-underline">
                        <div className="flex items-start">
                          <HelpCircle className="h-6 w-6 text-tyrian-600 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-left font-semibold text-lg text-gray-900 dark:text-white">
                            {faq.question}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 pt-0 ml-9">
                        <div className="text-gray-600 dark:text-gray-300 text-base">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              
              <div className="mt-10 text-center">
                <Link to="/contact">
                  <Button className="bg-tyrian-700 hover:bg-tyrian-800 text-white">
                    Have More Questions? Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* CTA Section */}
      <ScrollFadeIn delay={800} direction="up">
        <section className="py-20 bg-gradient-to-r from-tyrian-800 to-tyrian-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[100vw] text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-tyrian-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of forward-thinking companies already leveraging our solutions to drive growth and innovation.
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                className="bg-white text-tyrian-700 hover:bg-gray-100 px-8 py-6 text-lg"
                onClick={openGetStartedForm}
              >
                Get Started Now
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Contact Our Team
              </Button>
            </div>
          </div>
        </section>
      </ScrollFadeIn>
    </div>
  );
};

export default Home;
