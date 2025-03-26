import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Quote, Lightbulb, Book, Target, Users, Rocket, Shield } from "lucide-react";
import { useEffect } from "react";

const DirectorMessage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure page starts at the top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const initiatives = [
    {
      icon: Rocket,
      title: "Innovation in Education",
      description: "Implementing modern teaching methodologies and digital learning"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Maintaining high standards in academic and co-curricular activities"
    },
    {
      icon: Book,
      title: "Skill Development",
      description: "Focus on practical knowledge and real-world applications"
    },
    {
      icon: Users,
      title: "Student Support",
      description: "Comprehensive guidance and mentoring programs"
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
          <h1 className="text-4xl font-bold text-sdblue">Director's Message</h1>
        </div>

        {/* Profile Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#FBBF24] rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-xl p-8 shadow-lg">
                <div className="mb-8 relative">
                  <div className="w-48 h-48 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F97316] to-[#FBBF24] rounded-full blur-lg opacity-20"></div>
                    <img 
                      src="/Director.jpeg"
                      alt="Mr. Rajesh Singh - Director"
                      className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg relative z-10"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <h2 className="text-2xl font-bold text-sdblue">Mr. Rajesh Singh</h2>
                    <p className="text-gray-600">Director, S.D. Academy</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Quote className="w-8 h-8 text-orange-500 flex-shrink-0" />
                    <p className="text-gray-700 italic">
                      Greetings to our dear students, parents, and well-wishers,
                    </p>
                  </div>
                  <p className="text-gray-700">
                    As the Director of S.D. Academy, it gives me immense pleasure to share our 
                    institution's commitment to excellence in education. Our focus has always 
                    been on creating an environment that nurtures creativity, encourages 
                    innovation, and builds character.
                  </p>
                  <p className="text-gray-700">
                    We believe that education should empower students to face the challenges 
                    of tomorrow while staying rooted in our cultural values. Our dedicated 
                    team of educators works tirelessly to ensure that every student receives 
                    the guidance and support they need to excel.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#E5DEFF] to-[#FDE1D3] rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-sdblue mb-6">Key Initiatives</h3>
              <div className="grid gap-6">
                {initiatives.map((initiative, index) => (
                  <div 
                    key={index}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F97316] to-[#FBBF24] flex items-center justify-center flex-shrink-0">
                        <initiative.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{initiative.title}</h4>
                        <p className="text-gray-600">{initiative.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-sdblue mb-6">Our Approach</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  At S.D. Academy, we follow a comprehensive approach to education that focuses on:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-5 h-5 text-orange-500" />
                      <h4 className="font-semibold text-gray-800">Innovation</h4>
                    </div>
                    <p className="text-sm text-gray-600">Embracing new teaching methods</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-5 h-5 text-orange-500" />
                      <h4 className="font-semibold text-gray-800">Excellence</h4>
                    </div>
                    <p className="text-sm text-gray-600">Striving for the highest standards</p>
                  </div>
                </div>
                <div className="mt-6 text-right">
                  <p className="text-lg font-semibold text-sdblue">Mr. Rajesh Singh</p>
                  <p className="text-gray-600">Director</p>
                  <p className="text-gray-600">S.D. Academy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#F97316] to-[#FBBF24] rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Experience Excellence in Education</h3>
          <p className="text-orange-50 mb-8 max-w-2xl mx-auto">
            Join us in our mission to provide quality education that prepares students 
            for a successful future.
          </p>
          <Button
            onClick={() => navigate('/enquiry')}
            size="lg"
            className="bg-white text-orange-600 hover:bg-orange-50"
          >
            Get in Touch
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DirectorMessage; 