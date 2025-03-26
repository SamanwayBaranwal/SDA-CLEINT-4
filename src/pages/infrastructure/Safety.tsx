import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, Camera, Users, Phone, Lock, Bell, Heart, AlertTriangle, Stethoscope } from "lucide-react";

const Safety = () => {
  const navigate = useNavigate();

  const safetyFeatures = [
    {
      icon: Camera,
      title: "CCTV Surveillance",
      description: "24/7 monitoring with high-definition cameras covering all areas",
      stats: "100% Coverage"
    },
    {
      icon: Users,
      title: "Security Personnel",
      description: "Professional security staff ensuring campus safety",
      stats: "24/7 Guards"
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Secure entry/exit points with ID verification system",
      stats: "Restricted Entry"
    },
    {
      icon: Bell,
      title: "Emergency Response",
      description: "Quick response protocols and regular safety drills",
      stats: "Immediate Action"
    }
  ];

  const protocols = [
    {
      title: "Emergency Protocols",
      icon: AlertTriangle,
      items: [
        "Emergency evacuation plans",
        "Regular fire drills",
        "Disaster management procedures",
        "Emergency contact system",
        "First aid response team"
      ]
    },
    {
      title: "Health & Hygiene",
      icon: Heart,
      items: [
        "Regular sanitization",
        "Clean drinking water",
        "Hygienic washrooms",
        "Regular health check-ups",
        "Waste management system"
      ]
    },
    {
      title: "Medical Facilities",
      icon: Stethoscope,
      items: [
        "Full-time medical staff",
        "Well-equipped medical room",
        "First aid kits in all blocks",
        "Ambulance on call",
        "Tie-up with nearby hospitals"
      ]
    }
  ];

  const additionalMeasures = [
    {
      title: "Fire Safety",
      items: [
        "Fire extinguishers on each floor",
        "Smoke detectors",
        "Fire alarms",
        "Emergency exits",
        "Regular fire safety audits"
      ]
    },
    {
      title: "Transport Safety",
      items: [
        "School-owned transport fleet",
        "Trained drivers and conductors",
        "First aid kits in buses",
        "Regular vehicle maintenance",
        "Speed governors in vehicles"
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
          <h1 className="text-4xl font-bold text-sdblue">Safety & Security</h1>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-16 group">
          <img 
            src="https://plus.unsplash.com/premium_photo-1677529102407-0d075eb2cbb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FmZXR5JTIwbWVhc3VyZXMlMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D"
            alt="School Safety Measures" 
            className="w-full h-[400px] object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Security System</h2>
              <p className="text-lg text-blue-50 max-w-2xl">
                Ensuring the safety and security of our students through state-of-the-art 
                security measures and well-defined safety protocols.
              </p>
            </div>
          </div>
        </div>

        {/* Safety Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {safetyFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-sm text-red-600">{feature.stats}</p>
                </div>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Safety Protocols */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {protocols.map((protocol, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                  <protocol.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{protocol.title}</h3>
              </div>
              <div className="space-y-4">
                {protocol.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Measures */}
        <div className="bg-gradient-to-br from-[#FFE5E5] to-[#FFF5F5] rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Additional Safety Measures</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {additionalMeasures.map((section, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6">{section.title}</h3>
                <div className="space-y-4">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Emergency Contact</h3>
          <p className="text-red-50 mb-8 max-w-2xl mx-auto">
            Our emergency response team is available 24/7 to ensure the safety and 
            security of our students and staff.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => navigate('/enquiry')}
              size="lg"
              className="bg-white text-red-600 hover:bg-red-50"
            >
              Contact Security
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Safety; 