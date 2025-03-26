import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Activity, 
  Heart, 
  Brain, 
  Sun, 
  Moon, 
  Flower2,
  Sparkles 
} from "lucide-react";

const Yoga = () => {
  const navigate = useNavigate();

  const yogaPrograms = [
    {
      icon: Flower2,
      title: "Asanas",
      description: "Traditional yoga postures and practices"
    },
    {
      icon: Brain,
      title: "Meditation",
      description: "Mindfulness and concentration techniques"
    },
    {
      icon: Heart,
      title: "Breathing",
      description: "Pranayama and breathing exercises"
    },
    {
      icon: Sun,
      title: "Morning Yoga",
      description: "Early morning yoga sessions"
    },
    {
      icon: Moon,
      title: "Relaxation",
      description: "Stress relief and relaxation techniques"
    },
    {
      icon: Activity,
      title: "Physical Fitness",
      description: "Strength and flexibility development"
    }
  ];

  const achievements = [
    {
      title: "Best Performance",
      event: "District Yoga Competition",
      year: "2023"
    },
    {
      title: "Group Excellence",
      event: "International Yoga Day",
      year: "2023"
    },
    {
      title: "Special Recognition",
      event: "School Yoga Festival",
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
          <h1 className="text-4xl font-bold text-sdblue">Yoga & Meditation</h1>
        </div>

        {/* Hero Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
          <img 
            src="/Yoga/Yoga1.jpeg"
            alt="Yoga at SD Academy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Mind & Body Wellness</h2>
            <p className="text-lg text-gray-100">
              Cultivating physical and mental well-being through traditional yoga practices.
            </p>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {yogaPrograms.map((program, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
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
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <Flower2 className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
                <p className="text-blue-600 font-medium mb-1">{achievement.event}</p>
                <p className="text-gray-500 text-sm">{achievement.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {/* Using actual yoga images from the gallery */}
          <div className="relative h-64 rounded-xl overflow-hidden group">
            <img 
              src="/Yoga/Yoga1.jpeg"
              alt="Yoga Session 1"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden group">
            <img 
              src="/Yoga/yoganew.jpg"
              alt="Yoga Session 2"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden group">
            <img 
              src="/Yoga/yoganew1.jpg"
              alt="Yoga Session 3"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            onClick={() => navigate('/enquiry')}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-6 text-lg hover:opacity-90"
          >
            Join Our Yoga Program
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Yoga; 