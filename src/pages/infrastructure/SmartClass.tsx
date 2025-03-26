import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Monitor, Wifi, Laptop, BookOpen, Lightbulb, Presentation, Video, Projector } from "lucide-react";

const SmartClass = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Monitor,
      title: "Interactive Displays",
      description: "High-definition touch-enabled smart boards for interactive learning"
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Seamless connectivity for digital learning resources"
    },
    {
      icon: Video,
      title: "Multimedia Content",
      description: "Rich educational content and visual learning materials"
    },
    {
      icon: Laptop,
      title: "Digital Resources",
      description: "Access to online learning platforms and e-books"
    }
  ];

  const benefits = [
    {
      title: "Enhanced Learning",
      items: [
        "Visual and interactive learning experience",
        "Better understanding of complex concepts",
        "Increased student engagement",
        "Real-time assessment and feedback",
        "Personalized learning pace"
      ]
    },
    {
      title: "Modern Teaching Tools",
      items: [
        "Digital lesson planning",
        "Online assessments",
        "Virtual laboratories",
        "Educational software",
        "Digital content library"
      ]
    },
    {
      title: "Technology Integration",
      items: [
        "Cloud-based learning",
        "Digital assignments",
        "Online resources access",
        "Interactive quizzes",
        "Virtual classroom sessions"
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
          <h1 className="text-4xl font-bold text-sdblue">Smart Classrooms</h1>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-16 group">
          <img 
            src="/smartclass/smartclasssd1.jpeg"
            alt="Smart Classroom" 
            className="w-full h-[500px] object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Digital Learning Environment</h2>
              <p className="text-lg text-blue-50 max-w-2xl">
                State-of-the-art smart classrooms equipped with modern technology 
                to enhance the learning experience.
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
                <h3 className="font-semibold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Smart Class Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-sdblue mb-8 text-center">Our Smart Classrooms</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/smartclass/smartclasssd1.jpeg"
                alt="Smart Classroom 1" 
                className="w-full h-[300px] object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">Interactive Learning Space</h3>
                  <p className="text-blue-50">Modern digital tools for enhanced education</p>
                </div>
              </div>
            </div>
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/smartclass/smartclasssd2.jpeg"
                alt="Smart Classroom 2" 
                className="w-full h-[300px] object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">Digital Teaching Environment</h3>
                  <p className="text-blue-50">Advanced technology for better learning outcomes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((section, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-sdblue">{section.title}</h3>
              </div>
              <div className="space-y-4">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Highlights */}
        <div className="bg-gradient-to-br from-[#E5DEFF] to-[#FDE1D3] rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-sdblue mb-8 text-center">Smart Class Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold text-sdblue mb-4">Hardware</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Interactive Smart Boards</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Digital Podiums</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Document Cameras</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Audio Systems</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold text-sdblue mb-4">Software</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Learning Management System</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Educational Software</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Digital Content Library</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Assessment Tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Experience Modern Learning</h3>
          <p className="text-blue-50 mb-8 max-w-2xl mx-auto">
            Visit our campus to experience our state-of-the-art smart classrooms 
            and modern learning environment.
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

export default SmartClass; 