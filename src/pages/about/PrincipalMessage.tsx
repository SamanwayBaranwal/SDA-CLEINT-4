import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Quote, Heart, Star, Book, Users, Lightbulb, Target, Award } from "lucide-react";
import { useEffect } from "react";

const PrincipalMessage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure page starts at the top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const priorities = [
    {
      icon: Star,
      title: "Academic Excellence",
      description: "Fostering a culture of learning and achievement"
    },
    {
      icon: Heart,
      title: "Student Well-being",
      description: "Focus on mental and physical health of students"
    },
    {
      icon: Book,
      title: "Quality Education",
      description: "Implementing innovative teaching methodologies"
    },
    {
      icon: Users,
      title: "Inclusive Growth",
      description: "Ensuring development of every student"
    }
  ];

  const achievements = [
    {
      title: "Board Results",
      value: "100%",
      description: "Pass percentage consistently"
    },
    {
      title: "Student Activities",
      value: "25+",
      description: "Extra-curricular programs"
    },
    {
      title: "Faculty",
      value: "50+",
      description: "Qualified teachers"
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
          <h1 className="text-4xl font-bold text-sdblue">Principal's Message</h1>
        </div>

        {/* Profile Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#A855F7] rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-xl p-8 shadow-lg">
                <div className="mb-8 relative">
                  <div className="w-48 h-48 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1] to-[#A855F7] rounded-full blur-lg opacity-20"></div>
                    <img 
                      src="/Principal.jpeg"
                      alt="Mrs. Shruti Singh - Principal"
                      className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg relative z-10"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <h2 className="text-2xl font-bold text-sdblue">Mrs. Shruti Singh</h2>
                    <p className="text-gray-600">Principal, S.D. Academy</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Quote className="w-8 h-8 text-indigo-500 flex-shrink-0" />
                    <p className="text-gray-700 italic">
                      Dear Students and Parents,
                    </p>
                  </div>
                  <p className="text-gray-700">
                    It is my privilege to lead S.D. Academy, an institution that stands for 
                    excellence in education and character building. Our school is not just a 
                    place of learning; it's a nurturing ground where young minds are shaped 
                    into responsible, confident, and capable individuals.
                  </p>
                  <p className="text-gray-700">
                    We understand that each child is unique, with their own talents and 
                    potential. Our dedicated team of educators is committed to providing 
                    personalized attention and guidance to help every student discover and 
                    develop their abilities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#E5DEFF] to-[#FDE1D3] rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-sdblue mb-6">Our Priorities</h3>
              <div className="grid gap-6">
                {priorities.map((priority, index) => (
                  <div 
                    key={index}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6366F1] to-[#A855F7] flex items-center justify-center flex-shrink-0">
                        <priority.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{priority.title}</h4>
                        <p className="text-gray-600">{priority.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-sdblue mb-6">School Achievements</h3>
              <div className="grid grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="bg-indigo-50 p-4 rounded-lg text-center"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <Award className="w-6 h-6 text-indigo-500" />
                    </div>
                    <h4 className="text-2xl font-bold text-indigo-600 mb-1">{achievement.value}</h4>
                    <p className="text-sm font-medium text-gray-800 mb-1">{achievement.title}</p>
                    <p className="text-xs text-gray-600">{achievement.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-right">
                <p className="text-lg font-semibold text-sdblue">Mrs. Shruti Singh</p>
                <p className="text-gray-600">Principal</p>
                <p className="text-gray-600">S.D. Academy</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Join Our Academic Journey</h3>
          <p className="text-indigo-50 mb-8 max-w-2xl mx-auto">
            Experience a nurturing environment where every student's potential is 
            recognized and developed to the fullest.
          </p>
          <Button
            onClick={() => navigate('/enquiry')}
            size="lg"
            className="bg-white text-indigo-600 hover:bg-indigo-50"
          >
            Connect With Us
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrincipalMessage; 