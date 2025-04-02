import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Brain, Cpu, BarChart, Shield, Building, Microscope, Ambulance, ShoppingCart, GraduationCap, Globe, Users, Award, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollFadeIn from "@/components/ScrollFadeIn";

{/* Who We Are - Section */}
<ScrollFadeIn delay={350} direction="up">
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-pink-900/10 to-transparent"></div>
    <div className="absolute -top-[40%] -right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 blur-3xl"></div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[100vw] relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full text-sm font-medium text-purple-600 dark:text-purple-300 mb-4">
            About Us
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
          Evolutionary Path of Our Consultancy
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          We are an industry-leading IT service provider, committed to transforming business ideas into
          scalable, future-ready applications.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          { number: "10+", label: "Years Experience" },
          { number: "500+", label: "Projects Completed" },
          { number: "98%", label: "Client Satisfaction" },
        ].map((stat, index) => (
          <div key={index} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Innovation at Core",
            description: "Pioneering cutting-edge solutions that drive digital transformation and business growth.",
            icon: <Rocket className="h-6 w-6 text-white" />
          },
          {
            title: "Excellence in Delivery",
            description: "Delivering high-quality, scalable solutions that exceed client expectations.",
            icon: <Award className="h-6 w-6 text-white" />
          },
          {
            title: "Future-Ready Solutions",
            description: "Building scalable applications that adapt to evolving business needs and technological advancements.",
            icon: <Globe className="h-6 w-6 text-white" />
          }
        ].map((feature, index) => (
          <div key={index} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-lg mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-12 text-center">
        <Link to="/about">
          <button className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
            Learn More About Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </Link>
      </div>
    </div>
  </section>
</ScrollFadeIn> 