
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, MapPin, BriefcaseIcon, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const jobCategories = [
  "All Categories",
  "Engineering",
  "Data Science",
  "Product",
  "Design",
  "Marketing",
  "Sales",
  "Operations",
];

const jobOpenings = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    posted: "2 days ago",
    description: "Join our AI team to develop cutting-edge machine learning solutions for enterprise clients.",
  },
  {
    id: 2,
    title: "Machine Learning Researcher",
    department: "Data Science",
    location: "Remote",
    type: "Full-time",
    posted: "1 week ago",
    description: "Research and implement novel machine learning algorithms for our core AI platform.",
  },
  {
    id: 3,
    title: "Product Manager - AI Solutions",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
    posted: "3 days ago",
    description: "Lead the product strategy for our AI-powered enterprise solutions.",
  },
  {
    id: 4,
    title: "UX/UI Designer",
    department: "Design",
    location: "Boston, MA",
    type: "Full-time",
    posted: "5 days ago",
    description: "Design intuitive user interfaces for our AI products and dashboards.",
  },
  {
    id: 5,
    title: "AI Solutions Architect",
    department: "Engineering",
    location: "Seattle, WA",
    type: "Full-time",
    posted: "1 day ago",
    description: "Design and implement scalable AI infrastructure and solutions for enterprise clients.",
  },
  {
    id: 6,
    title: "Data Engineer",
    department: "Data Science",
    location: "Austin, TX",
    type: "Full-time",
    posted: "2 weeks ago",
    description: "Build data pipelines and infrastructure to support our AI and machine learning systems.",
  },
];

const Careers = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = jobOpenings.filter((job) => {
    const matchesCategory = selectedCategory === "All Categories" || job.department === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold gradient-heading mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Help us build the future of AI technology. We're looking for talented individuals to join our innovative team.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for job openings..."
                className="pl-10 h-12 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
              Why Join TkzUS?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We offer an environment where innovation thrives, and your work makes a real impact on the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <div className="h-12 w-12 bg-tyrian-100 dark:bg-tyrian-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-tyrian-700 dark:text-tyrian-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Comprehensive Benefits
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We offer competitive salaries, health insurance, retirement plans, generous PTO, and parental leave.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <div className="h-12 w-12 bg-tyrian-100 dark:bg-tyrian-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-tyrian-700 dark:text-tyrian-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Growth Opportunities
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Continuous learning with education stipends, conferences, workshops, and career development paths.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <div className="h-12 w-12 bg-tyrian-100 dark:bg-tyrian-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-tyrian-700 dark:text-tyrian-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Flexible Work Environment
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Remote-friendly policy, flexible hours, and a focus on work-life balance for our team members.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <div className="h-12 w-12 bg-tyrian-100 dark:bg-tyrian-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-tyrian-700 dark:text-tyrian-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Innovation Focus
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Work on cutting-edge AI technology with dedicated research time and innovation programs.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <div className="h-12 w-12 bg-tyrian-100 dark:bg-tyrian-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-tyrian-700 dark:text-tyrian-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Diverse & Inclusive Culture
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're committed to building a diverse team and fostering an inclusive environment for everyone.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <div className="h-12 w-12 bg-tyrian-100 dark:bg-tyrian-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-tyrian-700 dark:text-tyrian-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Meaningful Impact
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your work will directly impact how businesses use AI to solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-10 text-center">
            Current Openings
          </h2>

          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {jobCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-tyrian-700 hover:bg-tyrian-800" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div key={job.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 dark:border-gray-700">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {job.title}
                    </h3>
                    <span className="px-3 py-1 bg-tyrian-100 text-tyrian-800 dark:bg-tyrian-900/30 dark:text-tyrian-300 text-sm font-medium rounded-full">
                      {job.department}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {job.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <BriefcaseIcon className="h-4 w-4 mr-1" />
                      <span className="text-sm">{job.type}</span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Posted: {job.posted}
                    </div>
                  </div>
                  
                  <Link to={`/careers/job/${job.id}`}>
                    <Button className="w-full bg-tyrian-700 hover:bg-tyrian-800 text-white">
                      View Job & Apply
                    </Button>
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  No job openings match your search criteria.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory("All Categories");
                    setSearchQuery("");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-tyrian-800 to-tyrian-600 rounded-2xl p-10 md:p-16 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-tyrian-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume, and we'll keep you in mind for future opportunities.
            </p>
            <Button className="bg-white text-tyrian-800 hover:bg-tyrian-50 px-8 py-6 text-lg">
              Submit Your Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
