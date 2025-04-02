
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ScrollFadeIn from '@/components/ScrollFadeIn';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Your message has been sent! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | TkzUS</title>
        <meta name="description" content="Get in touch with TkzUS for all your AI solution needs or inquiries. Our team is ready to help you." />
      </Helmet>

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollFadeIn direction="down">
              <h1 className="text-4xl md:text-5xl font-bold gradient-heading mb-6">Contact Us</h1>
            </ScrollFadeIn>
            <ScrollFadeIn delay={200}>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Have a question or ready to start your AI journey? We're here to help.
              </p>
            </ScrollFadeIn>
          </div>
        </div>

        {/* Contact Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <ScrollFadeIn direction="left" delay={300}>
              <Card className="p-6 md:p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+1 (234) 567-890"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </ScrollFadeIn>
            
            {/* Contact Information */}
            <ScrollFadeIn direction="right" delay={400}>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Have questions or want to discuss how our AI solutions can help your business? 
                    Reach out to us through any of these channels, and our team will get back to you promptly.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      {
                        icon: <Mail className="h-6 w-6 text-tyrian-600 dark:text-tyrian-400" />,
                        title: "Email",
                        content: <a href="mailto:info@TkzUS.com" className="text-tyrian-600 dark:text-tyrian-400 hover:underline">info@TkzUS.com</a>
                      },
                      {
                        icon: <Phone className="h-6 w-6 text-tyrian-600 dark:text-tyrian-400" />,
                        title: "Phone",
                        content: <a href="tel:+12345678900" className="text-tyrian-600 dark:text-tyrian-400 hover:underline">+1 (234) 567-8900</a>
                      },
                      {
                        icon: <MapPin className="h-6 w-6 text-tyrian-600 dark:text-tyrian-400" />,
                        title: "Office",
                        content: <p className="text-gray-600 dark:text-gray-400">123 AI Street, Tech Valley<br />San Francisco, CA 94043<br />United States</p>
                      },
                      {
                        icon: <Clock className="h-6 w-6 text-tyrian-600 dark:text-tyrian-400" />,
                        title: "Business Hours",
                        content: <p className="text-gray-600 dark:text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM PST<br />Saturday - Sunday: Closed</p>
                      }
                    ].map((item, index) => (
                      <ScrollFadeIn key={index} delay={500 + (index * 100)}>
                        <div className="flex items-start">
                          <div className="bg-tyrian-100 dark:bg-tyrian-900 p-3 rounded-full mr-4">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{item.title}</h3>
                            {item.content}
                          </div>
                        </div>
                      </ScrollFadeIn>
                    ))}
                  </div>
                </div>
                
       
              </div>
            </ScrollFadeIn>
          </div>
        </div>
        
        {/* Map Section */}
        <ScrollFadeIn direction="up" delay={500} className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-96 rounded-xl overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.29856705456!2d-122.08010121225585!3d37.39020759181561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sMountain%20View%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1628786754936!5m2!1sen!2sca" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
        </ScrollFadeIn>
      </div>
    </>
  );
};

export default Contact;
