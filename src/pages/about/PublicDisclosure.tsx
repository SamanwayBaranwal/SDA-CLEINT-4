import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, FileText, Building2, Users, GraduationCap, Clock, Calendar, Download, ExternalLink } from "lucide-react";

const PublicDisclosure = () => {
  const navigate = useNavigate();

  const generalInfo = [
    {
      title: "CBSE Affiliation",
      value: "2133369",
      icon: FileText
    },
    {
      title: "School Status",
      value: "Co-Educational",
      icon: Users
    },
    {
      title: "Academic Level",
      value: "Senior Secondary",
      icon: GraduationCap
    },
    {
      title: "Session",
      value: "April to March",
      icon: Calendar
    }
  ];

  const documents = [
    {
      title: "Affiliation Certificate",
      type: "PDF",
      size: "2.1 MB"
    },
    {
      title: "NOC Certificate",
      type: "PDF",
      size: "1.8 MB"
    },
    {
      title: "Recognition Certificate",
      type: "PDF",
      size: "1.5 MB"
    },
    {
      title: "Building Safety Certificate",
      type: "PDF",
      size: "2.3 MB"
    },
    {
      title: "Fire Safety Certificate",
      type: "PDF",
      size: "1.9 MB"
    },
    {
      title: "DEO Certificate",
      type: "PDF",
      size: "1.6 MB"
    }
  ];

  const facilities = [
    {
      category: "Infrastructure",
      items: [
        "Total Campus Area: 1.8 Acres",
        "Built-up Area: 30,000 sq ft",
        "Playground Area: 20,000 sq ft",
        "Classrooms: 40+",
        "Laboratories: 5"
      ]
    },
    {
      category: "Academic",
      items: [
        "Student-Teacher Ratio: 30:1",
        "Teaching Staff: 50+",
        "Non-Teaching Staff: 20+",
        "Digital Classrooms: Most classrooms",
        "Library Books: 1000+"
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
          <h1 className="text-4xl font-bold text-sdblue">Public Disclosure</h1>
        </div>

        {/* General Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {generalInfo.map((info, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-600">{info.title}</h3>
                  <p className="text-lg font-semibold text-gray-800">{info.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Documents Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-sdblue mb-8">Mandatory Public Disclosures</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <div 
                key={index}
                className="group border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-sdblue" />
                    <h3 className="font-medium text-gray-800">{doc.title}</h3>
                  </div>
                  <Download className="w-5 h-5 text-gray-400 group-hover:text-sdblue transition-colors" />
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>{doc.type}</span>
                  <span>•</span>
                  <span>{doc.size}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {facilities.map((section, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#E5DEFF] to-[#FDE1D3] rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold text-sdblue mb-6">{section.category} Details</h3>
              <div className="space-y-4">
                {section.items.map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-white/80 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-sdblue rounded-full"></div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* External Links */}
        <div className="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Additional Resources</h3>
          <p className="text-blue-50 mb-8">
            Visit CBSE official website for more information about our affiliation and compliance.
          </p>
          <Button
            onClick={() => window.open('https://www.cbse.gov.in', '_blank')}
            size="lg"
            className="bg-white text-sdblue hover:bg-blue-50 inline-flex items-center gap-2"
          >
            Visit CBSE Website
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PublicDisclosure; 