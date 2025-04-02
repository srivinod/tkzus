
import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NaturalLanguageProcessing = () => {
  return (
    <>
      <Helmet>
        <title>Natural Language Processing | TyrianAI</title>
        <meta name="description" content="Advanced NLP solutions to understand, interpret, and generate human language." />
      </Helmet>

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-tyrian-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12">
                <h1 className="text-4xl md:text-5xl font-bold gradient-heading mb-6">Natural Language Processing</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Advanced NLP solutions to understand, interpret, and generate human language for business applications.
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
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80" 
                  alt="Natural Language Processing Visualization" 
                  className="rounded-xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">NLP Capabilities</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our comprehensive NLP solutions enable computers to understand, interpret, and generate human language in valuable ways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sentiment Analysis",
                description: "Understand customer opinions and emotions from reviews, social media, and support tickets.",
                icon: <MessageSquare className="h-10 w-10 text-tyrian-600" />
              },
              {
                title: "Chatbot Development",
                description: "Build intelligent conversational agents that can understand and respond to customer inquiries.",
                icon: <MessageSquare className="h-10 w-10 text-tyrian-600" />
              },
              {
                title: "Text Summarization",
                description: "Automatically generate concise summaries of long documents and reports.",
                icon: <MessageSquare className="h-10 w-10 text-tyrian-600" />
              },
              {
                title: "Language Translation",
                description: "Break down language barriers with accurate and contextually-aware translation services.",
                icon: <MessageSquare className="h-10 w-10 text-tyrian-600" />
              },
              {
                title: "Named Entity Recognition",
                description: "Automatically identify and classify key information in text such as names, organizations, and locations.",
                icon: <MessageSquare className="h-10 w-10 text-tyrian-600" />
              },
              {
                title: "Intent Recognition",
                description: "Understand user intentions from queries to provide more accurate and relevant responses.",
                icon: <MessageSquare className="h-10 w-10 text-tyrian-600" />
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
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Business Applications</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Discover how our NLP solutions are transforming businesses across industries.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Customer Service Automation",
                  description: "Intelligent chatbots and virtual assistants that can handle routine customer inquiries, freeing up human agents for more complex issues."
                },
                {
                  title: "Brand Sentiment Monitoring",
                  description: "Track and analyze customer opinions about your brand across social media, review sites, and other channels."
                },
                {
                  title: "Document Processing",
                  description: "Automatically extract key information from contracts, reports, and other documents to streamline workflows."
                },
                {
                  title: "Multilingual Support",
                  description: "Break down language barriers to serve global customers with real-time translation and localization."
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ready to Harness the Power of NLP?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Contact us today to learn how our NLP solutions can revolutionize your business operations.
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

export default NaturalLanguageProcessing;
