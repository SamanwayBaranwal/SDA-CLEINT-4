import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trophy, Clock, AlertCircle, Award, Star } from "lucide-react";

const CompetitionResults = () => {
  const navigate = useNavigate();

  const competitions = [
    {
      name: "District Science Exhibition",
      achievement: "First Prize in Innovation",
      participants: "Team of 5 students"
    },
    {
      name: "Inter-School Quiz Competition",
      achievement: "Winners in Senior Category",
      participants: "3 teams qualified"
    },
    {
      name: "City Level Debate Competition",
      achievement: "Best Speaker Award",
      participants: "12 participants"
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
          <h1 className="text-4xl font-bold text-sdblue">Competition Results</h1>
        </div>

        {/* Recent Competitions Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {competitions.map((competition, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">{competition.name}</h3>
              <p className="text-purple-600 font-bold mb-2">{competition.achievement}</p>
              <p className="text-gray-600">{competition.participants}</p>
            </div>
          ))}
        </div>

        {/* Under Process Section */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-lg p-8 text-center mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
              <Clock className="h-8 w-8 text-purple-600 animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold text-purple-600 mb-4">More Results Coming Soon</h2>
            <p className="text-gray-700 mb-6">
              Additional competition results and detailed performance reports are being processed. 
              Stay tuned for updates on various inter-school and national level competitions.
            </p>
            <div className="flex items-center justify-center gap-2 text-purple-600">
              <AlertCircle className="h-5 w-5" />
              <span>Updates expected within 2-3 working days</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={() => navigate('/enquiry')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
          >
            Request Competition Details
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CompetitionResults;

