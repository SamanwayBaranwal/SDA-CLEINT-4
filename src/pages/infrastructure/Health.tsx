import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Stethoscope, Users, Shower, Sparkles, Apple, Activity, Leaf } from "lucide-react";

const Health = () => {
  const navigate = useNavigate();

  const facilities = [
    {
      icon: Stethoscope,
      title: "Medical Room",
      description: "Fully equipped medical facility with trained staff",
      stats: "24/7 Available"
    },
    {
      icon: Users,
      title: "Healthcare Staff",
      description: "Qualified medical professionals and nurses",
      stats: "Expert Team"
    },
    {
      icon: Sparkles,
      title: "Sanitization",
      description: "Regular cleaning and disinfection protocols",
      stats: "Daily Cleaning"
    },
    {
      icon: Activity,
      title: "Health Monitoring",
      description: "Regular health check-ups and screenings",
      stats: "Monthly Checks"
    }
  ];

  const healthServices = [
    {
      title: "Medical Services",
      items: [
        "First Aid Treatment",
        "Regular Health Check-ups",
        "Emergency Response",
        "Medical Counseling",
        "Health Records Maintenance"
      ]
    },
    {
      title: "Hygiene Practices",
      items: [
        "Daily Sanitization",
        "Hand Washing Stations",
        "Clean Drinking Water",
        "Waste Management",
        "Air Quality Control"
      ]
    },
    {
      title: "Wellness Programs",
      items: [
        "Health Education",
        "Nutrition Guidance",
        "Physical Activities",
        "Mental Health Support",
        "Hygiene Awareness"
      ]
    }
  ];

  const additionalFeatures = [
    {
      title: "Health Infrastructure",
      items: [
        "Modern Medical Room",
        "Isolation Area",
        "Hygiene Stations",
        "Clean Washrooms",
        "Sanitary Disposal"
      ]
    },
    {
      title: "Safety Measures",
      items: [
        "Emergency Protocols",
        "Medical Equipment",
        "First Aid Kits",
        "Ambulance Service",
        "Health Guidelines"
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
          <h1 className="text-4xl font-bold text-sdblue">Health & Hygiene</h1>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-16 group">
          <img 
            src="https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Health Facility" 
            className="w-full h-[500px] object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Healthcare</h2>
              <p className="text-lg text-blue-50 max-w-2xl">
                Ensuring student well-being through modern medical facilities and 
                maintaining highest standards of hygiene.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#22C55E] to-[#10B981] flex items-center justify-center">
                  <facility.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{facility.title}</h3>
                  <p className="text-sm text-green-600">{facility.stats}</p>
                </div>
              </div>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>

        {/* Health Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {healthServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#22C55E] to-[#10B981] flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-sdblue">{service.title}</h3>
              </div>
              <div className="space-y-4">
                {service.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Leaf className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-gradient-to-br from-[#DCFCE7] to-[#F0FDF4] rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Additional Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {additionalFeatures.map((section, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6">{section.title}</h3>
                <div className="space-y-4">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#22C55E] to-[#10B981] rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Your Child's Health is Our Priority</h3>
          <p className="text-green-50 mb-8 max-w-2xl mx-auto">
            Learn more about our comprehensive healthcare facilities and 
            hygiene standards.
          </p>
          <Button
            onClick={() => navigate('/enquiry')}
            size="lg"
            className="bg-white text-green-600 hover:bg-green-50"
          >
            Contact Us
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Health; 