import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, GraduationCap, Clock, AlertCircle, Trophy, Target } from "lucide-react";

const EntranceResults = () => {
  const navigate = useNavigate();

  const entranceHighlights = [
    {
      exam: "Class XI Entrance Test",
      achievement: "85% students scored above 90%",
      year: "2023"
    },
    {
      exam: "Scholarship Test",
      achievement: "45 students qualified",
      year: "2023"
    },
    {
      exam: "Talent Search Exam",
      achievement: "12 district level ranks",
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
          <h1 className="text-4xl font-bold text-sdblue">Entrance Exam Results</h1>
        </div>

        {/* Recent Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {entranceHighlights.map((highlight, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">{highlight.exam}</h3>
              <p className="text-green-600 font-bold mb-2">{highlight.achievement}</p>
              <p className="text-gray-600">Year: {highlight.year}</p>
            </div>
          ))}
        </div>

        {/* Under Process Section */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl shadow-lg p-8 text-center mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
              <Clock className="h-8 w-8 text-green-600 animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold text-green-600 mb-4">School Entrance Results Under Compilation</h2>
            <p className="text-gray-700 mb-6">
              Complete entrance examination results including individual rankings and subject-wise 
              analysis for Class XI admissions are being processed. We will update the information shortly.
            </p>
            <div className="flex items-center justify-center gap-2 text-green-600">
              <AlertCircle className="h-5 w-5" />
              <span>Final results will be published after verification</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={() => navigate('/enquiry')}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
          >
            Get Detailed Information
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EntranceResults;

