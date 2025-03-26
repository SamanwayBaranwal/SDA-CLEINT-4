import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Monitor, Cpu, Network, Users, Code, Database, Shield, Laptop } from "lucide-react";

const ComputerLab = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Monitor,
      title: "Modern Workstations",
      description: "High-performance computers with latest hardware",
      stats: "40+ Systems"
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "High-speed internet with structured networking",
      stats: "1 GBPS Speed"
    },
    {
      icon: Shield,
      title: "Security Systems",
      description: "Advanced monitoring and security protocols",
      stats: "24/7 Protection"
    },
    {
      icon: Database,
      title: "Learning Resources",
      description: "Access to educational software and tools",
      stats: "50+ Programs"
    }
  ];

  const labDetails = [
    {
      title: "Hardware Specifications",
      items: [
        "Intel Core i5/i7 Processors",
        "16GB RAM Configurations",
        "SSD Storage Systems",
        "HD LED Monitors",
        "Structured Network Cabling"
      ]
    },
    {
      title: "Software Resources",
      items: [
        "Latest Operating Systems",
        "Educational Software Suite",
        "Programming Environments",
        "Graphics Design Tools",
        "Office Applications"
      ]
    },
    {
      title: "Lab Activities",
      items: [
        "Computer Science Classes",
        "Programming Sessions",
        "Digital Literacy Training",
        "Project Work",
        "Online Assessments"
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
          <h1 className="text-4xl font-bold text-sdblue">Computer Laboratory</h1>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-16 group">
          <img 
            src="https://plus.unsplash.com/premium_photo-1682124192684-4d2e54febce0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hpbGRyZW5zJTIwdXNpbmclMjBjb21wdXRlciUyMGluJTIwc2Nob29sfGVufDB8fDB8fHww"
            alt="Computer Lab" 
            className="w-full h-[500px] object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">State-of-the-Art Computer Lab</h2>
              <p className="text-lg text-blue-50 max-w-2xl">
                Modern facilities equipped with latest technology to provide hands-on 
                learning experience in computer science and digital literacy.
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
                  <p className="text-sm text-blue-600">{feature.stats}</p>
                </div>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Lab Details */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {labDetails.map((section, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center">
                  <Laptop className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-sdblue">{section.title}</h3>
              </div>
              <div className="space-y-4">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Experience Digital Learning</h3>
          <p className="text-blue-50 mb-8 max-w-2xl mx-auto">
            Visit our computer lab and experience modern technology-enabled 
            learning environment.
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

export default ComputerLab; 