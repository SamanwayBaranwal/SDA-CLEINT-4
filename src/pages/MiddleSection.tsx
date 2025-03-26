import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, Users, Star, Target, Calendar, Clock, Award, Sparkles, GraduationCap, Brain, Lightbulb } from "lucide-react";

const Middle = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpen,
      title: "Advanced Curriculum",
      description: "CBSE-aligned comprehensive program with advanced concepts",
      stats: "Class 6-8"
    },
    {
      icon: Users,
      title: "Class Size",
      description: "Balanced student-teacher ratio for focused learning",
      stats: "30 Students/Class"
    },
    {
      icon: Star,
      title: "Specialized Faculty",
      description: "Subject matter experts with proven track record",
      stats: "Expert Educators"
    },
    {
      icon: Target,
      title: "All-Round Development",
      description: "Balance of academics, sports, and co-curricular activities",
      stats: "Comprehensive Growth"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" 
           style={{ 
             backgroundImage: `url('https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWlkZGxlJTIwc3R1ZGVudHN8ZW58MHx8MHx8fDA%3D')`,
             backgroundPosition: 'center 30%'
           }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Middle School Excellence
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Nurturing critical thinking and fostering academic growth in the crucial middle years
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <feature.icon className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <p className="text-orange-500 font-semibold">{feature.stats}</p>
            </div>
          ))}
        </div>

        {/* Academic Program */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Academic Program</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-gray-800">Core Subjects</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• English Language & Literature</li>
                <li>• Hindi/Sanskrit</li>
                <li>• Mathematics</li>
                <li>• Science</li>
                <li>• Social Studies</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-gray-800">Co-Scholastic</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Computer Science</li>
                <li>• Art Education</li>
                <li>• Physical Education</li>
                <li>• Life Skills</li>
                <li>• Music & Dance</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-gray-800">Activities</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• STEM Projects</li>
                <li>• Literary Clubs</li>
                <li>• Sports Teams</li>
                <li>• Leadership Programs</li>
                <li>• Community Service</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Schedule Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Academic Schedule</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center gap-4">
              <Calendar className="w-8 h-8 text-orange-500" />
              <div>
                <h3 className="font-semibold text-gray-800">Academic Year</h3>
                <p className="text-gray-600">April to March</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-orange-500" />
              <div>
                <h3 className="font-semibold text-gray-800">School Hours</h3>
                <p className="text-gray-600">8:00 AM to 3:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Join Our Middle School Program</h3>
          <p className="text-orange-50 mb-8 max-w-2xl mx-auto">
            Empower your child's academic journey in a nurturing environment focused on 
            holistic development and excellence.
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

export default Middle;