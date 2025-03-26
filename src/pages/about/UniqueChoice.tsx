import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Award, Users, BookOpen, Target, Shield } from "lucide-react";

const UniqueChoice = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Star,
      title: "Academic Excellence",
      description: "Consistently achieving outstanding results with innovative teaching methods",
      stats: "100% Pass Rate"
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "State-of-the-art infrastructure with comprehensive security measures",
      stats: "24/7 Security"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Highly qualified and experienced teaching staff dedicated to student success",
      stats: "50+ Teachers"
    },
    {
      icon: Target,
      title: "Holistic Development",
      description: "Focus on academic, physical, and emotional growth of students",
      stats: "All-round Growth"
    }
  ];

  const highlights = [
    {
      title: "Modern Infrastructure",
      items: [
        "Smart Classrooms",
        "Well-equipped Labs",
        "Sports Facilities",
        "Digital Library"
      ]
    },
    {
      title: "Student Life",
      items: [
        "Cultural Activities",
        "Sports Events",
        "Educational Tours",
        "Leadership Programs"
      ]
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
          <h1 className="text-4xl font-bold text-sdblue">Why Choose S.D. Academy?</h1>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-12 group">
          <img 
            src="/lovable-uploads/319008bf-cf23-450b-9ba4-2460eaaf8736.png"
            alt="S.D. Academy Campus" 
            className="w-full h-[400px] md:h-[500px] object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Excellence in Education</h2>
              <p className="text-lg text-blue-50 max-w-2xl">
                Discover why S.D. Academy stands out as a premier educational institution, 
                committed to nurturing future leaders through comprehensive education.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-sm text-blue-600">{feature.stats}</p>
                </div>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-sdblue mb-6">Our Commitment</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  At S.D. Academy, we believe in providing an education that goes beyond 
                  textbooks. Our approach combines academic excellence with character 
                  development, preparing students for future success.
                </p>
                <p>
                  We foster an environment where creativity flourishes, critical thinking 
                  is encouraged, and every student's potential is recognized and nurtured.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#E5DEFF] to-[#FDE1D3] p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-sdblue mb-6">Key Achievements</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg text-center">
                  <h4 className="text-3xl font-bold text-sdblue mb-2">100%</h4>
                  <p className="text-gray-600">Board Results</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg text-center">
                  <h4 className="text-3xl font-bold text-sdblue mb-2">25+</h4>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg text-center">
                  <h4 className="text-3xl font-bold text-sdblue mb-2">500+</h4>
                  <p className="text-gray-600">Alumni Network</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg text-center">
                  <h4 className="text-3xl font-bold text-sdblue mb-2">25+</h4>
                  <p className="text-gray-600">Activities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((section) => (
              <div 
                key={section.title}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-sdblue mb-6">{section.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {section.items.map((item, index) => (
                    <div 
                      key={index}
                      className="bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors"
                    >
                      <p className="text-gray-700 text-center">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] rounded-xl p-8 md:p-12 text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Join Our Journey of Excellence</h3>
          <p className="text-blue-50 mb-8 max-w-2xl mx-auto">
            Take the first step towards providing your child with an education that 
            nurtures their potential and prepares them for future success.
          </p>
          <Button
            onClick={() => navigate('/enquiry')}
            size="lg"
            className="bg-white text-sdblue hover:bg-blue-50"
          >
            Enquire Now
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UniqueChoice; 