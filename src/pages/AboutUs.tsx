import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Building2, Target, Award, Users, BookOpen, School } from "lucide-react";

const AboutUs = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Unique Choice",
      description: "Discover what makes S.D. Academy stand out in educational excellence",
      icon: Building2,
      path: "/about/unique-choice",
      image: "/lovable-uploads/319008bf-cf23-450b-9ba4-2460eaaf8736.png"
    },
    {
      title: "Vision & Mission",
      description: "Our guiding principles and commitment to educational excellence",
      icon: Target,
      path: "/about/vision-mission",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Success Saga",
      description: "Journey through our achievements and milestones",
      icon: Award,
      path: "/about/success-saga",
      image: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Management",
      description: "Meet our dedicated leadership team",
      icon: Users,
      path: "/about/management",
      image: "/lovable-uploads/74233a1b-ee7c-42d2-b3dc-5c32c52d8378.png"
    }
  ];

  const messages = [
    {
      title: "Chairman's Message",
      role: "Dr. HN Singh",
      image: "/Founder.jpeg",
      path: "/about/chairman-message"
    },
    {
      title: "Director's Message",
      role: "Mr. Rajesh Singh",
      image: "/Director.jpeg",
      path: "/about/director-message"
    },
    {
      title: "Principal's Message",
      role: "Mrs. Shruti Singh",
      image: "/Principal.jpeg",
      path: "/about/principal-message"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Hero Section - Using existing school building image */}
        <div className="relative rounded-xl overflow-hidden mb-16 group">
          <img 
            src="/lovable-uploads/74233a1b-ee7c-42d2-b3dc-5c32c52d8378.png"
            alt="S.D. Academy Campus" 
            className="w-full h-[500px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
            <div className="p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About S.D. Academy</h1>
              <p className="text-lg text-blue-50 max-w-2xl">
                A premier educational institution committed to nurturing young minds and 
                shaping future leaders through holistic education and values.
              </p>
            </div>
          </div>
        </div>

        {/* Main Sections Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sections.map((section) => (
            <div 
              key={section.title}
              onClick={() => navigate(section.path)}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3">
                      <section.icon className="w-6 h-6 text-white" />
                      <h2 className="text-xl font-bold text-white">{section.title}</h2>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{section.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Messages Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-sdblue text-center mb-8">Leadership Messages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {messages.map((message) => (
              <div 
                key={message.title}
                onClick={() => navigate(message.path)}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-[#E5DEFF] to-[#FDE1D3] rounded-lg p-1">
                  <div className="bg-white rounded-lg p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <img 
                        src={message.image}
                        alt={message.title}
                        className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-sdblue text-center mb-2">
                      {message.title}
                    </h3>
                    <p className="text-gray-600 text-center">{message.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <School className="w-8 h-8 text-sdblue" />
              <h3 className="text-2xl font-bold text-sdblue">Our Affiliation</h3>
            </div>
            <p className="text-gray-700 mb-4">
              S.D. Academy is affiliated with CBSE (Central Board of Secondary Education) 
              and follows the prescribed curriculum while incorporating innovative teaching methods.
            </p>
            <button 
              onClick={() => navigate('/about/affiliation')}
              className="text-sdblue font-semibold hover:underline"
            >
              Learn more about our affiliation →
            </button>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <BookOpen className="w-8 h-8 text-sdblue" />
              <h3 className="text-2xl font-bold text-sdblue">Public Disclosure</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Access important information about our institution, including mandatory 
              disclosures, compliance documents, and other relevant details.
            </p>
            <button 
              onClick={() => navigate('/about/public-disclosure')}
              className="text-sdblue font-semibold hover:underline"
            >
              View public disclosure →
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
