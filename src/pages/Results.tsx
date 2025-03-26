import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trophy, Star, Award, Medal, Crown, BookOpen } from "lucide-react";

const Results = () => {
  const navigate = useNavigate();

  const academicHighlights = [
    {
      icon: Trophy,
      title: "100% Pass Rate",
      description: "Consistent excellence in board examinations"
    },
    {
      icon: Star,
      title: "Top Scorers",
      description: "Multiple students scoring above 90% in boards"
    },
    {
      icon: Award,
      title: "District Excellence",
      description: "Outstanding performance in district level exams"
    },
    {
      icon: Medal,
      title: "District Toppers",
      description: "Consistently producing district rank holders"
    },
    {
      icon: Crown,
      title: "Merit Scholarships",
      description: "Students securing school & district scholarships"
    },
    {
      icon: BookOpen,
      title: "Subject Distinction",
      description: "Exceptional performance across all subjects"
    }
  ];

  const toppers2023 = [
    { name: "Priya Sharma", score: "98.8%", stream: "Science" },
    { name: "Rahul Verma", score: "97.6%", stream: "Commerce" },
    { name: "Ananya Patel", score: "96.4%", stream: "Humanities" },
    { name: "Arjun Singh", score: "95.9%", stream: "Science" }
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
          <h1 className="text-4xl font-bold text-sdblue">Academic Excellence</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <img 
              src="https://plus.unsplash.com/premium_photo-1681495110459-96aeba841082?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Nob29sJTIwcmVzdWx0c3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Academic Results"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Celebrating Success</h2>
              <p className="text-gray-200">Our students' achievements speak for themselves</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-sdblue mb-4">2023 Highlights</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="font-semibold">Overall Pass Percentage</span>
                <span className="text-lg font-bold text-sdblue">100%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="font-semibold">Students Scoring 90%+</span>
                <span className="text-lg font-bold text-sdblue">45%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="font-semibold">JEE/NEET Selections</span>
                <span className="text-lg font-bold text-sdblue">85+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-sdblue mb-6">Our Top Performers 2023</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toppers2023.map((topper, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-sdblue" />
                </div>
                <h3 className="font-bold text-lg mb-1">{topper.name}</h3>
                <p className="text-sdblue font-bold text-xl mb-1">{topper.score}</p>
                <p className="text-gray-600">{topper.stream}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {academicHighlights.map((highlight, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-sdblue to-blue-400 rounded-lg flex items-center justify-center mb-4">
                <highlight.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-sdblue mb-2">{highlight.title}</h3>
              <p className="text-gray-700">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <Button 
            onClick={() => navigate('/enquiry')}
            className="bg-sdblue hover:bg-sdblue/90 text-white px-8 py-6 text-lg"
          >
            Download Detailed Results
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Results;
