import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Quote, Star, Target, Heart, Users } from "lucide-react";
import { useEffect } from "react";

const ChairmanMessage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure page starts at the top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const visionPoints = [
    {
      icon: Star,
      title: "Academic Excellence",
      description: "Fostering a culture of continuous learning and achievement"
    },
    {
      icon: Heart,
      title: "Character Building",
      description: "Developing strong moral values and ethical principles"
    },
    {
      icon: Target,
      title: "Future Ready",
      description: "Preparing students for global challenges and opportunities"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building strong relationships with parents and community"
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
          <h1 className="text-4xl font-bold text-sdblue">Chairman's Message</h1>
        </div>

        {/* Profile Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-xl p-8 shadow-lg">
                <div className="mb-8 relative">
                  <div className="w-48 h-48 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] rounded-full blur-lg opacity-20"></div>
                    <img 
                      src="/Founder.jpeg"
                      alt="Dr. HN Singh - Chairman"
                      className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg relative z-10"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <h2 className="text-2xl font-bold text-sdblue">Dr. HN Singh</h2>
                    <p className="text-gray-600">Chairman, S.D. Academy</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Quote className="w-8 h-8 text-sdblue flex-shrink-0" />
                    <p className="text-gray-700 italic">
                      Dear Parents and Students,
                    </p>
                  </div>
                  <p className="text-gray-700">
                    Welcome to S.D. Academy, where we believe in nurturing not just students, 
                    but future leaders who will shape tomorrow's world. Our journey began with 
                    a vision to provide quality education that goes beyond textbooks and 
                    examinations.
                  </p>
                  <p className="text-gray-700">
                    In today's rapidly evolving world, education must adapt and transform. 
                    At S.D. Academy, we combine traditional values with modern teaching 
                    methodologies to create a learning environment that inspires innovation 
                    and excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#E5DEFF] to-[#FDE1D3] rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-sdblue mb-6">Our Vision for Excellence</h3>
              <div className="grid gap-6">
                {visionPoints.map((point, index) => (
                  <div 
                    key={index}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                        <point.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{point.title}</h4>
                        <p className="text-gray-600">{point.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-sdblue mb-6">Our Commitment</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Our commitment to holistic development ensures that every student receives 
                  the attention, guidance, and opportunities they need to discover and 
                  develop their unique talents.
                </p>
                <p className="text-gray-700">
                  We believe in creating an environment where:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Every child's potential is recognized and nurtured</li>
                  <li>Innovation and critical thinking are encouraged</li>
                  <li>Traditional values meet modern education</li>
                  <li>Character development is as important as academic achievement</li>
                </ul>
                <div className="mt-6 text-right">
                  <p className="text-lg font-semibold text-sdblue">Dr. HN Singh</p>
                  <p className="text-gray-600">Chairman</p>
                  <p className="text-gray-600">S.D. Academy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Join Our Educational Journey</h3>
          <p className="text-blue-50 mb-8 max-w-2xl mx-auto">
            Be part of our vision to nurture future leaders and innovators. 
            Experience education that transforms lives.
          </p>
          <Button
            onClick={() => navigate('/enquiry')}
            size="lg"
            className="bg-white text-sdblue hover:bg-blue-50"
          >
            Connect With Us
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ChairmanMessage; 