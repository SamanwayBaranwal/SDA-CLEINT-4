import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, Users, Star, Target, Calendar, Clock, Award, Sparkles, GraduationCap, Brain, Lightbulb } from "lucide-react";

const PrimarySection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpen,
      title: "Curriculum",
      description: "CBSE-aligned comprehensive learning program",
      stats: "Class 1-5"
    },
    {
      icon: Users,
      title: "Class Size",
      description: "Optimal student-teacher ratio for individual attention",
      stats: "25 Students/Class"
    },
    {
      icon: Star,
      title: "Expert Faculty",
      description: "Experienced and qualified teaching staff",
      stats: "Dedicated Teachers"
    },
    {
      icon: Target,
      title: "Holistic Growth",
      description: "Focus on academic and personal development",
      stats: "360° Development"
    }
  ];

  const subjects = [
    {
      title: "Core Subjects",
      icon: Brain,
      items: [
        "English Language & Literature",
        "Hindi Language",
        "Mathematics",
        "Environmental Science",
        "General Knowledge"
      ]
    },
    {
      title: "Co-Scholastic",
      icon: Lightbulb,
      items: [
        "Art & Craft",
        "Music & Dance",
        "Physical Education",
        "Value Education",
        "Library Sessions"
      ]
    },
    {
      title: "Activities",
      icon: Target,
      items: [
        "Project Work",
        "Group Discussions",
        "Educational Games",
        "Story Telling",
        "Creative Writing"
      ]
    }
  ];

  const highlights = [
    {
      title: "Teaching Methodology",
      icon: GraduationCap,
      points: [
        "Activity-based learning",
        "Smart class integration",
        "Regular assessments",
        "Practical demonstrations",
        "Interactive sessions"
      ]
    },
    {
      title: "Student Development",
      icon: Users,
      points: [
        "Personality development",
        "Communication skills",
        "Critical thinking",
        "Social skills",
        "Emotional growth"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
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
          <h1 className="text-4xl font-bold text-sdblue">Primary Section</h1>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-16 group">
          <img 
            src="https://plus.unsplash.com/premium_photo-1682750328883-4cce9e02674c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJpbWFyeSUyMHN0dWRlbnRzfGVufDB8fDB8fHww"
            alt="Primary Students" 
            className="w-full h-[500px] object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Primary Education</h2>
              <p className="text-lg text-blue-50 max-w-2xl">
                Building strong foundations through comprehensive learning and 
                holistic development in a nurturing environment.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-sm text-orange-600">{feature.stats}</p>
                </div>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Subjects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {subjects.map((subject, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] flex items-center justify-center">
                  <subject.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-sdblue">{subject.title}</h3>
              </div>
              <div className="space-y-4">
                {subject.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <Sparkles className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1 transform group-hover:scale-110 transition-transform" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="bg-gradient-to-br from-[#FFF3E0] to-[#FFF8E1] rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Program Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((section, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
                </div>
                <div className="space-y-4">
                  {section.points.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-3 group">
                      <div className="w-2 h-2 bg-orange-500 rounded-full transform group-hover:scale-150 transition-transform" />
                      <p className="text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold text-sdblue mb-8 text-center">Academic Schedule</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center gap-4 group">
              <Calendar className="w-8 h-8 text-orange-500 transform group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-semibold text-gray-800">Academic Year</h3>
                <p className="text-gray-600">April to March</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <Clock className="w-8 h-8 text-orange-500 transform group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-semibold text-gray-800">School Hours</h3>
                <p className="text-gray-600">8:00 AM to 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] rounded-xl p-8 md:p-12 text-center transform hover:scale-[1.02] transition-transform">
          <h3 className="text-3xl font-bold text-white mb-4">Begin Their Learning Journey</h3>
          <p className="text-orange-50 mb-8 max-w-2xl mx-auto">
            Give your child the best start in education. Join our primary section 
            for comprehensive learning and development.
          </p>
          <Button
            onClick={() => navigate('/enquiry')}
            size="lg"
            className="bg-white text-orange-600 hover:bg-orange-50 transform hover:scale-105 transition-transform"
          >
            Enquire Now
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrimarySection;
