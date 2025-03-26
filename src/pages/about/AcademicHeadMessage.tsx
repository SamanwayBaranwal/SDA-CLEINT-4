import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Quote, Lightbulb, Brain, GraduationCap, PenTool, Sparkles, Award } from "lucide-react";
import { useEffect } from "react";

const AcademicHeadMessage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Ensure page starts at the top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const educationalPhilosophy = [
    {
      icon: Brain,
      title: "Creative Thinking",
      description: "Encouraging students to approach problems with innovation and creativity"
    },
    {
      icon: GraduationCap,
      title: "Academic Rigor",
      description: "Maintaining high standards across all subjects and disciplines"
    },
    {
      icon: PenTool,
      title: "Skill Development",
      description: "Building practical skills alongside theoretical knowledge"
    },
    {
      icon: Sparkles,
      title: "Personalized Learning",
      description: "Adapting teaching methods to individual student needs"
    }
  ];

  const academicHighlights = [
    {
      title: "STEM Programs",
      value: "15+",
      description: "Specialized courses offered"
    },
    {
      title: "National Competitions",
      value: "25+",
      description: "Awards won annually"
    },
    {
      title: "Research Projects",
      value: "30+",
      description: "Student-led initiatives"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <Navigation />
      
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate(-1)}
            className="hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-4xl font-bold text-sdblue">Academic Head's Message</h1>
        </div>

        {/* Profile Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#10B981] to-[#3B82F6] rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-xl p-8 shadow-lg">
                <div className="mb-8 relative">
                  <div className="w-48 h-48 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#10B981] to-[#3B82F6] rounded-full blur-lg opacity-20"></div>
                    <img 
                      src="/Academic head.jpeg"
                      alt="Dr. Anju Gaur - Academic Head"
                      className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg relative z-10"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <h2 className="text-2xl font-bold text-sdblue">Dr. Anju Gaur</h2>
                    <p className="text-gray-600">Academic Head, S.D. Academy</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Quote className="w-8 h-8 text-emerald-500 flex-shrink-0" />
                    <p className="text-gray-700 italic">
                      Dear Students and Parents,
                    </p>
                  </div>
                  <p className="text-gray-700">
                    As the Academic Head of S.D. Academy, I am committed to creating an 
                    educational environment that inspires curiosity, fosters critical thinking, 
                    and equips students with the skills to thrive in an ever-changing world.
                  </p>
                  <p className="text-gray-700">
                    Education is not just about textbooks and examinations; it's about 
                    nurturing young minds to become lifelong learners. At S.D. Academy, 
                    we blend innovative teaching methodologies with personalized attention 
                    to ensure each student reaches their full academic potential.
                  </p>
                  <p className="text-gray-700">
                    Our curriculum is designed to balance academic rigor with creative 
                    exploration, encouraging students to question, analyze, and discover 
                    the joy of learning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#DCFCE7] to-[#DBEAFE] rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-sdblue mb-6">Educational Philosophy</h3>
              <div className="grid gap-6">
                {educationalPhilosophy.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#10B981] to-[#3B82F6] flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-sdblue mb-6">Academic Highlights</h3>
              <div className="grid grid-cols-3 gap-4">
                {academicHighlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="bg-green-50 p-4 rounded-lg text-center"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <Award className="w-6 h-6 text-emerald-500" />
                    </div>
                    <h4 className="text-2xl font-bold text-emerald-600 mb-1">{highlight.value}</h4>
                    <p className="text-sm font-medium text-gray-800 mb-1">{highlight.title}</p>
                    <p className="text-xs text-gray-600">{highlight.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-right">
                <p className="text-lg font-semibold text-sdblue">Dr. Anju Gaur</p>
                <p className="text-gray-600">Academic Head</p>
                <p className="text-gray-600">S.D. Academy</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#10B981] to-[#3B82F6] rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Experience Excellence in Education</h3>
          <p className="text-emerald-50 mb-8 max-w-2xl mx-auto">
            Join us in our mission to nurture well-rounded, intellectually curious, and 
            socially responsible individuals ready for future challenges.
          </p>
          <Button
            onClick={() => navigate('/enquiry')}
            size="lg"
            className="bg-white text-emerald-600 hover:bg-emerald-50"
          >
            Schedule a Visit
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AcademicHeadMessage;
