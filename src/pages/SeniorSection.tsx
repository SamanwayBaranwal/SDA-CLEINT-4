import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, Users, Star, Target, Calendar, Clock, Award, Sparkles, GraduationCap, Brain, Lightbulb } from "lucide-react";

const SeniorSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "CBSE-aligned curriculum with focus on core subjects and electives"
    },
    {
      icon: Brain,
      title: "Critical Thinking",
      description: "Emphasis on analytical skills and problem-solving abilities"
    },
    {
      icon: Target,
      title: "Career Guidance",
      description: "Professional counseling for higher education and career choices"
    },
    {
      icon: GraduationCap,
      title: "Board Preparation",
      description: "Structured preparation for CBSE board examinations"
    },
    {
      icon: Star,
      title: "Competitive Exams",
      description: "Special coaching for JEE, NEET, and other entrance exams"
    },
    {
      icon: Sparkles,
      title: "Practical Learning",
      description: "Well-equipped labs and hands-on learning experiences"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/academic')}
            className="hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-4xl font-bold text-sdblue">Senior Section (Classes IX-XII)</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <img 
              src="https://plus.unsplash.com/premium_photo-1670002454477-d8916d2aa568?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VuaW9yJTIwc3R1ZGVudHN8ZW58MHx8MHx8fDA%3D"
              alt="Senior Students"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Preparing Future Leaders</h2>
              <p className="text-gray-200">Nurturing academic excellence and personal growth</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-sdblue mb-4">Program Overview</h2>
            <p className="text-gray-700 mb-4">
              Our senior section provides a rigorous academic environment that prepares students for higher education and future careers. With experienced faculty, modern facilities, and a comprehensive curriculum, we ensure holistic development of every student.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="h-5 w-5 text-sdblue" />
                <span>8:00 AM - 2:30 PM</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="h-5 w-5 text-sdblue" />
                <span>Academic Year: April - March</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="h-5 w-5 text-sdblue" />
                <span>Average Class Size: 30 Students</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-sdblue to-blue-400 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-sdblue mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <Button 
            onClick={() => navigate('/enquiry')}
            className="bg-sdblue hover:bg-sdblue/90 text-white px-8 py-6 text-lg"
          >
            Enquire About Admission
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SeniorSection;
