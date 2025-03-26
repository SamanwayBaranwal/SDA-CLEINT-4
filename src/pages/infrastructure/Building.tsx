import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Building2, CheckCircle2, Ruler, Users, BookOpen, Trophy, Leaf } from "lucide-react";

const Building = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Ruler,
      title: "Campus Area",
      value: "1.8 Acres",
      description: "Spacious campus with modern facilities"
    },
    {
      icon: Building2,
      title: "Built-up Area",
      value: "30,000 sq ft",
      description: "Well-planned infrastructure"
    },
    {
      icon: Users,
      title: "Capacity",
      value: "1200+",
      description: "Student accommodation"
    },
    {
      icon: Leaf,
      title: "Green Area",
      value: "20,000 sq ft",
      description: "Eco-friendly environment"
    }
  ];

  const facilities = [
    {
      title: "Academic Block",
      items: [
        "40+ Spacious Classrooms",
        "Well-ventilated Design",
        "Modern Furniture",
        "Smart Class Setup",
        "Activity Rooms"
      ]
    },
    {
      title: "Science Block",
      items: [
        "Physics Laboratory",
        "Chemistry Laboratory",
        "Biology Laboratory",
        "Mathematics Lab",
        "Project Room"
      ]
    },
    {
      title: "Sports Facilities",
      items: [
        "Large Playground",
        "Indoor Sports Hall",
        "Indoor Games Room",
        "Cricket Practice Nets",
        "Athletics Track"
      ]
    }
  ];

  const highlights = [
    {
      icon: Building2,
      title: "Modern Architecture",
      description: "Contemporary design with focus on functionality and aesthetics"
    },
    {
      icon: BookOpen,
      title: "Learning Spaces",
      description: "Dedicated areas for academic and co-curricular activities"
    },
    {
      icon: Trophy,
      title: "Sports Complex",
      description: "State-of-the-art facilities for various sports activities"
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
          <h1 className="text-4xl font-bold text-sdblue">School Building</h1>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-16 group">
          <img 
            src="/School Building.jpeg"
            alt="School Building" 
            className="w-full h-[500px] object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">State-of-the-Art Infrastructure</h2>
              <p className="text-lg text-blue-50 max-w-2xl">
                Modern facilities designed to provide an optimal learning environment for 
                academic excellence and overall development.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-sm text-blue-600">{feature.value}</p>
                </div>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Facilities Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {facilities.map((section, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold text-sdblue mb-6">{section.title}</h3>
              <div className="space-y-4">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="bg-gradient-to-br from-[#E5DEFF] to-[#FDE1D3] rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-sdblue mb-8 text-center">Infrastructure Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center">
                    <highlight.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800">{highlight.title}</h3>
                </div>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Visit Our Campus</h3>
          <p className="text-blue-50 mb-8 max-w-2xl mx-auto">
            Experience our world-class infrastructure and facilities firsthand. 
            Schedule a campus tour today.
          </p>
          <Button
            onClick={() => navigate('/enquiry')}
            size="lg"
            className="bg-white text-sdblue hover:bg-blue-50"
          >
            Schedule a Visit
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Building; 