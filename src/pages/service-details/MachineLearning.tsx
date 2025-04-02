
import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight, Brain, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MachineLearning = () => {
  return (
    <>
      <Helmet>
        <title>Machine Learning Solutions | TyrianAI</title>
        <meta name="description" content="Custom machine learning models and solutions tailored to your business needs." />
      </Helmet>

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-tyrian-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12">
                <h1 className="text-4xl md:text-5xl font-bold gradient-heading mb-6">Machine Learning Solutions</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Custom machine learning models trained on your data to solve your unique business challenges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-tyrian-700 hover:bg-tyrian-800 text-white">
                    Request a Consultation
                  </Button>
                  <Button variant="outline" className="border-tyrian-600 text-tyrian-700 hover:bg-tyrian-50 dark:border-tyrian-400 dark:text-tyrian-400 dark:hover:bg-gray-800">
                    View Case Studies
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2 mt-12 lg:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80" 
                  alt="Machine Learning Visualization" 
                  className="rounded-xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our comprehensive machine learning solutions are designed to address a wide range of business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Supervised Learning",
                description: "Custom classification and regression models trained on labeled data to make accurate predictions.",
                icon: <Brain className="h-10 w-10 text-tyrian-600" />
              },
              {
                title: "Unsupervised Learning",
                description: "Clustering and dimensionality reduction to uncover hidden patterns and insights in your data.",
                icon: <Brain className="h-10 w-10 text-tyrian-600" />
              },
              {
                title: "Deep Learning",
                description: "Neural networks capable of processing complex patterns and relationships for advanced applications.",
                icon: <Brain className="h-10 w-10 text-tyrian-600" />
              },
              {
                title: "Reinforcement Learning",
                description: "Decision-making agents that learn optimal strategies through trial and error.",
                icon: <Brain className="h-10 w-10 text-tyrian-600" />
              },
              {
                title: "Transfer Learning",
                description: "Leverage pre-trained models to quickly develop solutions with limited data resources.",
                icon: <Brain className="h-10 w-10 text-tyrian-600" />
              },
              {
                title: "Model Deployment",
                description: "Seamless integration of machine learning models into your existing systems and workflows.",
                icon: <Brain className="h-10 w-10 text-tyrian-600" />
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-gray-50 dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Common Use Cases</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Discover how our machine learning solutions are being applied across industries.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Customer Segmentation",
                  description: "Identify distinct customer groups to tailor marketing strategies and enhance customer experiences."
                },
                {
                  title: "Predictive Maintenance",
                  description: "Anticipate equipment failures before they occur, minimizing downtime and repair costs."
                },
                {
                  title: "Fraud Detection",
                  description: "Identify suspicious activities and transactions in real-time to prevent financial losses."
                },
                {
                  title: "Demand Forecasting",
                  description: "Accurately predict future demand for products and services to optimize inventory and resources."
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-tyrian-600 dark:text-tyrian-400 mr-3 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{useCase.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Contact us today to learn how our machine learning solutions can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-tyrian-700 hover:bg-tyrian-800 text-white">
                Schedule a Consultation
              </Button>
              <Link to="/services">
                <Button variant="outline" className="border-tyrian-600 text-tyrian-700 hover:bg-tyrian-50 dark:border-tyrian-400 dark:text-tyrian-400 dark:hover:bg-gray-800">
                  Explore Other Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MachineLearning;
