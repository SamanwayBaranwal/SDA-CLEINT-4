import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Target, Compass, Star, Heart, Brain, Globe, Shield, Lightbulb } from "lucide-react";

const VisionMission = () => {
  const navigate = useNavigate();

  const missionPoints = [
    {
      icon: Brain,
      text: "Foster critical thinking and creativity through innovative teaching methods"
    },
    {
      icon: Heart,
      text: "Develop strong moral values and character in every student"
    },
    {
      icon: Globe,
      text: "Prepare students to become responsible global citizens"
    },
    {
      icon: Shield,
      text: "Create a safe and nurturing learning environment"
    },
    {
      icon: Star,
      text: "Achieve academic excellence through personalized attention"
    },
    {
      icon: Lightbulb,
      text: "Encourage innovation and entrepreneurial thinking"
    }
  ];

  const coreValues = [
    {
      title: "Excellence",
      description: "Striving for the highest standards in all endeavors",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Integrity",
      description: "Upholding moral and ethical values in all actions",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Innovation",
      description: "Embracing new ideas and methods in education",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Respect",
      description: "Fostering mutual respect and understanding",
      color: "from-orange-500 to-orange-600"
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
          <h1 className="text-4xl font-bold text-sdblue">Vision & Mission</h1>
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] rounded-xl p-8 text-white relative overflow-hidden group">
            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg leading-relaxed text-blue-50">
                To be a leading educational institution that nurtures future leaders 
                and innovators through holistic education, fostering academic excellence, 
                moral values, and social responsibility.
              </p>
            </div>
            <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-white/10 rounded-full blur-2xl transition-transform group-hover:scale-150" />
          </div>

          <div className="bg-gradient-to-br from-[#F97316] to-[#FBBF24] rounded-xl p-8 text-white relative overflow-hidden group">
            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Compass className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <div className="space-y-4">
                {missionPoints.slice(0, 3).map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <point.icon className="w-6 h-6 flex-shrink-0 mt-1" />
                    <p className="text-orange-50">{point.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-white/10 rounded-full blur-2xl transition-transform group-hover:scale-150" />
          </div>
        </div>

        {/* Mission Points Grid */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-sdblue mb-8 text-center">Our Mission in Action</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700">{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-sdblue mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${value.color} rounded-xl p-1`}>
                  <div className="bg-white rounded-lg p-6 h-full hover:bg-opacity-95 transition-colors">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Share Our Vision</h3>
          <p className="text-blue-50 mb-8 max-w-2xl mx-auto">
            Join us in our mission to provide excellence in education and shape the 
            leaders of tomorrow.
          </p>
          <Button
            onClick={() => navigate('/enquiry')}
            size="lg"
            className="bg-white text-sdblue hover:bg-blue-50"
          >
            Get in Touch
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default VisionMission; 