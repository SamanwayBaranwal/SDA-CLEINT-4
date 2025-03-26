import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Palette, Brush, Scissors, Shapes, Award, Sparkles } from "lucide-react";

const ArtCraft = () => {
  const navigate = useNavigate();

  const artPrograms = [
    {
      icon: Palette,
      title: "Drawing & Painting",
      description: "Express creativity through colors and canvas"
    },
    {
      icon: Scissors,
      title: "Paper Craft",
      description: "Creative paper art and origami"
    },
    {
      icon: Shapes,
      title: "Clay Modeling",
      description: "Sculptural art and pottery"
    },
    {
      icon: Brush,
      title: "Art Techniques",
      description: "Various artistic methods and styles"
    },
    {
      icon: Award,
      title: "Exhibitions",
      description: "Regular display of student artworks"
    },
    {
      icon: Sparkles,
      title: "Creative Projects",
      description: "Collaborative art and craft projects"
    }
  ];

  const achievements = [
    {
      title: "Best Art Display",
      event: "District Art Exhibition",
      year: "2023"
    },
    {
      title: "Creative Excellence",
      event: "Inter-School Art Competition",
      year: "2023"
    },
    {
      title: "Innovation Award",
      event: "School Art Festival",
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
          <h1 className="text-4xl font-bold text-sdblue">Art & Craft</h1>
        </div>

        {/* Hero Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
          <img 
            src="/Celebrations and Programs/image8.jpg"
            alt="Art and Craft at SD Academy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Creative Expression</h2>
            <p className="text-lg text-gray-100">
              Fostering imagination and artistic skills through hands-on creative activities.
            </p>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {artPrograms.map((program, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <program.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-sdblue mb-6">Recent Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mb-3">
                  <Palette className="h-5 w-5 text-teal-600" />
                </div>
                <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
                <p className="text-teal-600 font-medium mb-1">{achievement.event}</p>
                <p className="text-gray-500 text-sm">{achievement.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {[8, 9, 10].map((num) => (
            <div key={num} className="relative h-64 rounded-xl overflow-hidden group">
              <img 
                src={`/Celebrations and Programs/image${num}.jpg`}
                alt={`Art and Craft Activity ${num}`}
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
            className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-6 text-lg hover:opacity-90"
          >
            Join Our Art Programs
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ArtCraft; 