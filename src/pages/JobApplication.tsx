
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Upload, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock job data (in a real app, this would come from an API)
const jobOpenings = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    posted: "2 days ago",
    description: "Join our AI team to develop cutting-edge machine learning solutions for enterprise clients.",
    requirements: [
      "7+ years of experience in software development",
      "5+ years of experience in AI/ML engineering",
      "Strong knowledge of Python, TensorFlow, and PyTorch",
      "Experience with deploying ML models in production environments",
      "Excellent problem-solving and communication skills",
    ],
    responsibilities: [
      "Design and develop machine learning models for various use cases",
      "Optimize existing ML pipelines for performance and scalability",
      "Collaborate with product and data science teams to implement new features",
      "Mentor junior engineers and contribute to technical strategy",
      "Stay current with the latest developments in AI and ML technology",
    ],
  },
  {
    id: 2,
    title: "Machine Learning Researcher",
    department: "Data Science",
    location: "Remote",
    type: "Full-time",
    posted: "1 week ago",
    description: "Research and implement novel machine learning algorithms for our core AI platform.",
    requirements: [
      "Ph.D. or M.S. in Computer Science, Machine Learning, or related field",
      "Strong publication record in top ML conferences (NIPS, ICML, etc.)",
      "Experience implementing and experimenting with novel ML algorithms",
      "Proficiency in Python and deep learning frameworks",
      "Excellent analytical and research skills",
    ],
    responsibilities: [
      "Conduct research on cutting-edge machine learning techniques",
      "Implement and test experimental algorithms",
      "Publish research findings in academic journals and conferences",
      "Work closely with engineering teams to productize research",
      "Stay up-to-date with the latest academic and industry research",
    ],
  },
  {
    id: 3,
    title: "Product Manager - AI Solutions",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
    posted: "3 days ago",
    description: "Lead the product strategy for our AI-powered enterprise solutions.",
    requirements: [
      "5+ years of product management experience",
      "Strong technical background with understanding of AI/ML concepts",
      "Experience with enterprise SaaS products",
      "Excellent communication and stakeholder management skills",
      "Proven track record of shipping successful products",
    ],
    responsibilities: [
      "Define product vision, strategy, and roadmap for AI products",
      "Work with engineering, design, and data science teams to deliver features",
      "Gather and prioritize customer requirements",
      "Conduct market research and competitive analysis",
      "Define metrics and track product performance",
    ],
  },
  {
    id: 4,
    title: "UX/UI Designer",
    department: "Design",
    location: "Boston, MA",
    type: "Full-time",
    posted: "5 days ago",
    description: "Design intuitive user interfaces for our AI products and dashboards.",
    requirements: [
      "3+ years of experience in UX/UI design",
      "Strong portfolio demonstrating web and mobile app design",
      "Proficiency with design tools (Figma, Sketch, Adobe XD)",
      "Experience with design systems and component libraries",
      "Understanding of user research and testing methodologies",
    ],
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Collaborate with product and engineering teams to implement designs",
      "Conduct user research and usability testing",
      "Maintain and evolve our design system",
      "Create visual assets and documentation for product features",
    ],
  },
  {
    id: 5,
    title: "AI Solutions Architect",
    department: "Engineering",
    location: "Seattle, WA",
    type: "Full-time",
    posted: "1 day ago",
    description: "Design and implement scalable AI infrastructure and solutions for enterprise clients.",
    requirements: [
      "8+ years of software engineering experience",
      "5+ years of experience architecting AI/ML systems",
      "Strong background in cloud infrastructure (AWS, GCP, Azure)",
      "Experience with containerization and orchestration tools",
      "Excellent problem-solving and communication skills",
    ],
    responsibilities: [
      "Design scalable and maintainable AI architectures",
      "Work with clients to understand requirements and constraints",
      "Develop reference architectures and best practices",
      "Mentor engineering teams and provide technical leadership",
      "Evaluate new technologies and make adoption recommendations",
    ],
  },
  {
    id: 6,
    title: "Data Engineer",
    department: "Data Science",
    location: "Austin, TX",
    type: "Full-time",
    posted: "2 weeks ago",
    description: "Build data pipelines and infrastructure to support our AI and machine learning systems.",
    requirements: [
      "4+ years of experience in data engineering",
      "Proficiency in SQL and Python",
      "Experience with big data technologies (Spark, Hadoop, etc.)",
      "Knowledge of data modeling and warehousing concepts",
      "Familiarity with cloud data services",
    ],
    responsibilities: [
      "Design and build scalable data pipelines",
      "Implement data quality checks and monitoring",
      "Optimize data storage and retrieval for ML workloads",
      "Collaborate with data scientists and ML engineers",
      "Maintain data documentation and catalogs",
    ],
  },
];

const JobApplication = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Find the job based on the ID from the URL
  const job = jobOpenings.find((job) => job.id === Number(jobId));
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: null,
    linkedin: "",
    portfolio: "",
    experience: "",
    whyJoin: "",
    agreeTerms: false,
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  // Handle file input changes
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fileType: 'resume' | 'coverLetter') => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, [fileType]: e.target.files?.[0] || null }));
    }
  };
  
  // Handle checkbox change
  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeTerms: checked }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Validate form
    if (!formData.fullName || !formData.email || !formData.resume || !formData.agreeTerms) {
      toast({
        title: "Incomplete Form",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      toast({
        title: "Application Submitted!",
        description: "We'll review your application and contact you soon.",
      });
    }, 1500);
  };
  
  // If job not found
  if (!job) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Job Not Found</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            The job you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/careers">
            <Button className="bg-tyrian-700 hover:bg-tyrian-800 text-white">
              Back to Careers
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  // If application submitted successfully
  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Application Submitted!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Thank you for applying for the {job.title} position at TyrianAI. We've received your application and will review it shortly. You'll hear from our team soon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="border-tyrian-600 text-tyrian-700 hover:bg-tyrian-50 dark:border-tyrian-400 dark:text-tyrian-400 dark:hover:bg-gray-700"
                onClick={() => navigate("/careers")}
              >
                Explore More Jobs
              </Button>
              <Button 
                className="bg-tyrian-700 hover:bg-tyrian-800 text-white"
                onClick={() => navigate("/")}
              >
                Return to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Button
            variant="ghost"
            className="mb-6 flex items-center text-gray-600 hover:text-tyrian-700 dark:text-gray-300 dark:hover:text-tyrian-400"
            onClick={() => navigate("/careers")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Careers
          </Button>
          
          {/* Job details section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {job.title}
                </h1>
                <div className="flex flex-wrap gap-3 mb-2">
                  <span className="px-3 py-1 bg-tyrian-100 text-tyrian-800 dark:bg-tyrian-900/30 dark:text-tyrian-300 text-sm font-medium rounded-full">
                    {job.department}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 text-sm font-medium rounded-full">
                    {job.location}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 text-sm font-medium rounded-full">
                    {job.type}
                  </span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Posted: {job.posted}
                </p>
              </div>
              <Button className="mt-4 md:mt-0 bg-tyrian-700 hover:bg-tyrian-800 text-white">
                Apply Now
              </Button>
            </div>
            
            <div className="text-gray-600 dark:text-gray-300 mb-8">
              <p className="mb-6 text-lg">{job.description}</p>
              
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Requirements
              </h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
              
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Responsibilities
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                {job.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Application form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Apply for this Position
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
                
                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (234) 567-890"
                  />
                </div>
                
                {/* LinkedIn */}
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <Input
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/johndoe"
                  />
                </div>
                
                {/* Portfolio/Website */}
                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio/Website</Label>
                  <Input
                    id="portfolio"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    placeholder="https://johndoe.com"
                  />
                </div>
                
                {/* Resume Upload */}
                <div className="space-y-2">
                  <Label htmlFor="resume">Resume <span className="text-red-500">*</span></Label>
                  <div className="flex items-center">
                    <Input
                      id="resume"
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange(e, 'resume')}
                      required
                    />
                    <Label
                      htmlFor="resume"
                      className="cursor-pointer flex items-center gap-2 text-sm border rounded-md px-4 py-2 w-full text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <Upload className="h-4 w-4" />
                      {formData.resume ? formData.resume.name : "Upload Resume (PDF, DOC)"}
                    </Label>
                  </div>
                </div>
                
                {/* Cover Letter Upload */}
                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter</Label>
                  <div className="flex items-center">
                    <Input
                      id="coverLetter"
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange(e, 'coverLetter')}
                    />
                    <Label
                      htmlFor="coverLetter"
                      className="cursor-pointer flex items-center gap-2 text-sm border rounded-md px-4 py-2 w-full text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <Upload className="h-4 w-4" />
                      {formData.coverLetter ? formData.coverLetter.name : "Upload Cover Letter (Optional)"}
                    </Label>
                  </div>
                </div>
              </div>
              
              {/* Experience */}
              <div className="space-y-2 mb-6">
                <Label htmlFor="experience">Relevant Experience</Label>
                <Textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="Tell us about your experience that makes you a good fit for this role..."
                  className="min-h-[120px]"
                />
              </div>
              
              {/* Why Join */}
              <div className="space-y-2 mb-8">
                <Label htmlFor="whyJoin">Why do you want to join TyrianAI?</Label>
                <Textarea
                  id="whyJoin"
                  name="whyJoin"
                  value={formData.whyJoin}
                  onChange={handleInputChange}
                  placeholder="Tell us why you're interested in working with us..."
                  className="min-h-[120px]"
                />
              </div>
              
              {/* Terms Checkbox */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Checkbox 
                    id="agreeTerms" 
                    checked={formData.agreeTerms}
                    onCheckedChange={handleCheckboxChange}
                    className="mt-1"
                  />
                  <Label 
                    htmlFor="agreeTerms" 
                    className="text-gray-600 dark:text-gray-300 ml-2 font-normal"
                  >
                    I agree to the processing of my personal data by TyrianAI for recruitment purposes. I confirm that all the information provided is true and accurate. <span className="text-red-500">*</span>
                  </Label>
                </div>
              </div>
              
              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-tyrian-700 hover:bg-tyrian-800 text-white py-6 text-lg"
                disabled={loading}
              >
                {loading ? "Submitting Application..." : "Submit Application"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;
