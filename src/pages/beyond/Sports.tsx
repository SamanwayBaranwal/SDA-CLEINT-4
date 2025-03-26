import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trophy, Users, Target, Medal, Star, Shield } from "lucide-react";

const Sports = () => {
  const navigate = useNavigate();

  const sportsFacilities = [
    {
      icon: Trophy,
      title: "Sports Complex",
      description: "State-of-the-art facilities for various indoor and outdoor sports"
    },
    {
      icon: Users,
      title: "Professional Coaching",
      description: "Experienced coaches for cricket, basketball, volleyball, and more"
    },
    {
      icon: Target,
      title: "Regular Training",
      description: "Structured training programs and practice sessions"
    },
    {
      icon: Medal,
      title: "Competitions",
      description: "Regular inter-house and inter-school tournaments"
    },
    {
      icon: Star,
      title: "Achievement Program",
      description: "Special recognition for sports excellence"
    },
    {
      icon: Shield,
      title: "Sports Equipment",
      description: "High-quality equipment for all sports activities"
    }
  ];

  const achievements = [
    {
      title: "Sports Day",
      event: "Annual Inter-House Sports Competition",
      year: "2024"
    },
    {
      title: "Fitness Program",
      event: "Student Wellness Initiative",
      year: "2023"
    },
    {
      title: "Cricket Friendly Match",
      event: "Exhibition Game with Neighboring School",
      year: "2023"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-4xl font-bold text-sdblue">Sports & Games</h1>
        </div>

        {/* Hero Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
          <img 
            src="/Sports/Sports1.jpeg"
            alt="Sports at SD Academy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Excellence in Sports</h2>
            <p className="text-lg text-gray-100">
              Developing physical fitness, team spirit, and leadership through comprehensive 
              sports programs and world-class facilities.
            </p>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sportsFacilities.map((facility, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <facility.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>

        {/* Recent Achievements */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-sdblue mb-6">Recent Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                  <Trophy className="h-5 w-5 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
                <p className="text-orange-600 font-medium mb-1">{achievement.event}</p>
                <p className="text-gray-500 text-sm">{achievement.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {[2, 3, 4].map((num) => (
            <div key={num} className="relative h-64 rounded-xl overflow-hidden group">
              <img 
                src={`/Sports/Sports${num}.jpeg`}
                alt={`Sports Activity ${num}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            onClick={() => navigate('/enquiry')}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-6 text-lg hover:opacity-90"
          >
            Join Our Sports Program
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Sports; 