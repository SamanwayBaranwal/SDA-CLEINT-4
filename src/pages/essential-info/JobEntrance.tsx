import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  GraduationCap, 
  Clock, 
  FileCheck, 
  ArrowRight,
  CheckCircle,
  Users,
  Building,
  ArrowLeft
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

export default function JobEntrance() {
  const navigate = useNavigate();
  const currentOpenings = [
    {
      position: "Primary Teachers",
      department: "Primary Section",
      experience: "2-5 years",
      qualification: "B.Ed with relevant subject specialization",
      vacancies: 3
    },
    {
      position: "Science Faculty",
      department: "Senior Section",
      experience: "3-7 years",
      qualification: "M.Sc/B.Ed in Physics/Chemistry/Biology",
      vacancies: 2
    },
    {
      position: "Sports Coach",
      department: "Physical Education",
      experience: "2-4 years",
      qualification: "B.P.Ed or Diploma in Sports Coaching",
      vacancies: 1
    }
  ];

  const benefits = [
    {
      icon: Building,
      title: "Work Environment",
      description: "State-of-the-art infrastructure and supportive atmosphere"
    },
    {
      icon: Users,
      title: "Professional Growth",
      description: "Regular training and development programs"
    },
    {
      icon: GraduationCap,
      title: "Career Development",
      description: "Opportunities for advancement and skill enhancement"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigate(-1)}
              className="hover:bg-gray-100"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-4xl font-bold text-sdblue">Career Opportunities</h1>
          </div>
          
          {/* Hero Section */}
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-12 shadow-lg">
            <img 
              src="https://plus.unsplash.com/premium_photo-1661598213264-9b708f59d793?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8am9ifGVufDB8fDB8fHww"
              alt="Career at SD Academy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Join Our Team</h2>
              <p className="text-gray-200">Build your career with SD Academy</p>
            </div>
          </div>

          {/* Quick Apply CTA */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white mb-12">
            <div className="md:flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Ready to Join Us?</h2>
                <p className="text-indigo-100 mb-4 md:mb-0">
                  Submit your application for current openings
                </p>
              </div>
              <div className="flex gap-4">
                <Button 
                  asChild
                  className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-6"
                >
                  <Link to="/enquiry?type=career_other">
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  onClick={() => window.open('path_to_job_pdf', '_blank')}
                  className="bg-indigo-400 text-white hover:bg-indigo-500 px-8 py-6"
                >
                  Download JD
                  <FileCheck className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Current Openings */}
          <div className="space-y-6 mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Briefcase className="h-7 w-7 text-indigo-600" />
              Current Openings
            </h2>
            {currentOpenings.map((job, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="md:flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-indigo-600 mb-2">{job.position}</h3>
                    <div className="space-y-2 text-gray-600">
                      <p><span className="font-semibold">Department:</span> {job.department}</p>
                      <p><span className="font-semibold">Experience:</span> {job.experience}</p>
                      <p><span className="font-semibold">Qualification:</span> {job.qualification}</p>
                      <p><span className="font-semibold">Vacancies:</span> {job.vacancies}</p>
                    </div>
                  </div>
                  <Button 
                    asChild
                    className="mt-4 md:mt-0 bg-indigo-600 text-white hover:bg-indigo-700"
                  >
                    <Link to={`/enquiry?type=${job.department.includes("Primary") ? "job_teacher" : 
                                          job.department.includes("Physical") ? "job_sports" : 
                                          "job_teacher"}&position=${encodeURIComponent(job.position)}`}>
                      Apply for this Position
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Why Join Us?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Application Process */}
          <div className="bg-indigo-50 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-semibold mb-4">Application Process</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-indigo-600 mt-1" />
                <p className="text-gray-700">Submit your application through the online form</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-indigo-600 mt-1" />
                <p className="text-gray-700">Shortlisted candidates will be called for demo classes</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-indigo-600 mt-1" />
                <p className="text-gray-700">Interview with the management team</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-indigo-600 mt-1" />
                <p className="text-gray-700">Document verification and offer letter</p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">Have questions about career opportunities?</p>
            <Button
              asChild
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-6 text-lg hover:opacity-90"
            >
              <Link to="/enquiry?type=general&position=HR%20Question">
                Contact HR Department
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}