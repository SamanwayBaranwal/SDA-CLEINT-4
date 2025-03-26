import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Beaker, Microscope, Atom, ShieldCheck, Lightbulb, GraduationCap } from 'lucide-react';

const ScienceLab = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Beaker,
      title: "Chemistry Lab",
      description: "Fully equipped chemistry lab with modern apparatus and safety equipment"
    },
    {
      icon: Microscope,
      title: "Biology Lab",
      description: "Advanced microscopes and specimens for practical learning"
    },
    {
      icon: Atom,
      title: "Physics Lab",
      description: "Modern physics equipment for hands-on experimentation"
    },
    {
      icon: ShieldCheck,
      title: "Safety First",
      description: "State-of-the-art safety measures and proper ventilation"
    }
  ];

  const benefits = [
    {
      title: "Practical Learning",
      items: [
        "Hands-on experimental learning",
        "Real-world application of concepts",
        "Scientific methodology practice",
        "Laboratory safety training",
        "Project-based learning"
      ]
    },
    {
      title: "Modern Equipment",
      items: [
        "Digital microscopes",
        "Advanced measurement tools",
        "Chemical analysis equipment",
        "Physics apparatus",
        "Safety equipment"
      ]
    },
    {
      title: "Learning Benefits",
      items: [
        "Enhanced understanding",
        "Practical skills development",
        "Scientific thinking",
        "Team collaboration",
        "Safety awareness"
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
          <h1 className="text-4xl font-bold text-sdblue">Science Laboratories</h1>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-16 group">
          <img 
            src="/sciencelab1.jpeg"
            alt="Science Laboratory" 
            className="w-full h-[500px] object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">State-of-the-Art Science Labs</h2>
              <p className="text-lg text-blue-50 max-w-2xl">
                Our well-equipped science laboratories provide students with hands-on 
                learning experience in Physics, Chemistry, and Biology.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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

        {/* Lab Images Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-sdblue mb-8 text-center">Our Laboratory Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['/sciencelab2.jpeg', '/sciencelab3.jpeg', '/sciencelab4.jpeg'].map((image, index) => (
              <div 
                key={index}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={image}
                  alt={`Science Lab ${index + 2}`}
                  className="w-full h-[250px] object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-white font-bold">Modern Lab Equipment</h3>
                    <p className="text-blue-50 text-sm">State-of-the-art facilities for practical learning</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((section, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center">
                  <Beaker className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-sdblue">{section.title}</h3>
              </div>
              <div className="space-y-4">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] rounded-xl p-8 md:p-12 text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-4">Experience Modern Science Education</h3>
          <p className="text-blue-50 mb-8 max-w-2xl mx-auto">
            Visit our campus to explore our state-of-the-art science laboratories 
            and experience hands-on learning.
          </p>
          <Button
            onClick={() => navigate('/enquiry')}
            className="bg-white text-[#8B5CF6] hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Visit
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ScienceLab;
