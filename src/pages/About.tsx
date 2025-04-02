
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import ScrollFadeIn from '@/components/ScrollFadeIn';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | TkzUS</title>
        <meta name="description" content="Learn about TkzUS's mission, vision, and the team behind our innovative AI solutions." />
      </Helmet>

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollFadeIn direction="down">
              <h1 className="text-4xl md:text-5xl font-bold gradient-heading mb-6">About TkzUS</h1>
            </ScrollFadeIn>
            <ScrollFadeIn delay={300}>
              <p className="text-xl text-gray-600 dark:text-gray-400">
              Pioneering IT Solutions & Exceptional Customer Experience
              </p>
            </ScrollFadeIn>
          </div>
        </div>

        {/* Our Story */}
        <ScrollFadeIn className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16" delay={200}>
          <Card className="rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:shrink-0 md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-r from-tyrian-800 to-tyrian-600 flex items-center justify-center">
                  <span className="text-4xl text-white font-bold">EST. 2018</span>
                </div>
              </div>
              <div className="p-8 md:p-12 md:w-1/2">
                <div className="uppercase tracking-wide text-sm text-tyrian-600 dark:text-tyrian-400 font-semibold mb-2">Our Story</div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">From Vision to Reality</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Founded in 2018, TkzUS began with a simple yet ambitious mission: to democratize artificial intelligence and make it accessible to businesses of all sizes. What started as a small team of passionate AI researchers has grown into a leading force in the AI industry.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Our journey has been marked by breakthrough innovations, strategic partnerships, and a relentless commitment to pushing the boundaries of what AI can achieve. Today, we serve clients across the globe, transforming how they operate, innovate, and grow.
                </p>
              </div>
            </div>
          </Card>
        </ScrollFadeIn>

        {/* Our Values */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <ScrollFadeIn>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            </ScrollFadeIn>
            <ScrollFadeIn delay={200}>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                The principles that guide everything we do at TkzUS.
              </p>
            </ScrollFadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: 1,
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible, embracing new ideas and approaches to solve complex problems."
              },
              {
                number: 2,
                title: "Integrity",
                description: "We believe in ethical AI development and transparent practices that earn and maintain the trust of our clients and users."
              },
              {
                number: 3,
                title: "Impact",
                description: "We measure our success by the positive difference we make for our clients, their customers, and society at large."
              }
            ].map((value, index) => (
              <ScrollFadeIn 
                key={index}
                delay={300 + (index * 150)}
              >
                <Card 
                  className="p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                  animateHover
                  variant="lift"
                >
                  <div className="w-12 h-12 bg-tyrian-100 dark:bg-tyrian-900 rounded-full flex items-center justify-center mb-4">
                    <span className="text-tyrian-600 dark:text-tyrian-400 text-xl font-bold">{value.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {value.description}
                  </p>
                </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <ScrollFadeIn>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Leadership Team</h2>
            </ScrollFadeIn>
            <ScrollFadeIn delay={200}>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Meet the experts driving TkzUS's innovation and growth.
              </p>
            </ScrollFadeIn>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Founder & CEO",
                bio: "AI researcher with 15+ years of experience in machine learning and cognitive computing.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "Michael Rodriguez",
                role: "CTO",
                bio: "Former lead engineer at Google AI with expertise in natural language processing and deep learning.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "Aisha Patel",
                role: "Chief Research Officer",
                bio: "PhD in Computer Science specializing in computer vision and reinforcement learning algorithms.",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "David Kim",
                role: "COO",
                bio: "20+ years experience scaling tech startups and implementing operational excellence.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              }
            ].map((member, index) => (
              <ScrollFadeIn 
                key={index} 
                delay={300 + (index * 150)}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <Card 
                  className="rounded-xl shadow-sm overflow-hidden"
                  animateHover
                  variant="scale"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                    <p className="text-tyrian-600 dark:text-tyrian-400 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
                  </CardContent>
                </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
