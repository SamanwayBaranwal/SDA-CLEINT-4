import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trophy, Medal, Star, Clock, AlertCircle } from "lucide-react";

const OlympiadResults = () => {
  const navigate = useNavigate();

  const recentAchievements = [
    {
      olympiad: "School Mathematics Olympiad",
      achievements: "2 District, 3 City Level Ranks",
      participants: 120
    },
    {
      olympiad: "School Science Olympiad",
      achievements: "City Rank 1, 5 District Ranks",
      participants: 150
    },
    {
      olympiad: "English Language Olympiad",
      achievements: "3 State Level, 4 District Ranks",
      participants: 85
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
          <h1 className="text-4xl font-bold text-sdblue">Olympiad Results</h1>
        </div>

        {/* Recent Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {recentAchievements.map((achievement, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Medal className="h-6 w-6 text-sdblue" />
              </div>
              <h3 className="font-bold text-lg mb-2">{achievement.olympiad}</h3>
              <p className="text-sdblue font-bold mb-2">{achievement.achievements}</p>
              <p className="text-gray-600">Participants: {achievement.participants}</p>
            </div>
          ))}
        </div>

        {/* Under Process Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Clock className="h-8 w-8 text-sdblue animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold text-sdblue mb-4">Results Under Process</h2>
            <p className="text-gray-600 mb-6">
              Detailed results from recent Olympiad competitions are currently being compiled. 
              Please check back soon for comprehensive performance analysis and individual achievements.
            </p>
            <div className="flex items-center justify-center gap-2 text-sdblue">
              <AlertCircle className="h-5 w-5" />
              <span>Expected to be updated by next week</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={() => navigate('/enquiry')}
            className="bg-sdblue hover:bg-sdblue/90 text-white px-8 py-6 text-lg"
          >
            Contact for More Details
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OlympiadResults;

