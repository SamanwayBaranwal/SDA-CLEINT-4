import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, FileText, School, Award, Shield, BookOpen } from "lucide-react";

const Affiliation = () => {
  const navigate = useNavigate();

  const affiliationDetails = [
    {
      icon: FileText,
      title: "Affiliation Number",
      value: "2133369",
      description: "CBSE School Code"
    },
    {
      icon: School,
      title: "Affiliation Status",
      value: "Permanent",
      description: "Affiliated to CBSE, New Delhi"
    },
    {
      icon: Award,
      title: "Academic Standards",
      value: "Excellence",
      description: "Following NCERT curriculum"
    },
    {
      icon: Shield,
      title: "Compliance",
      value: "100%",
      description: "Meeting all CBSE norms"
    }
  ];

  const features = [
    {
      title: "Academic Framework",
      items: [
        "NCERT based curriculum",
        "Continuous evaluation system",
        "Regular assessments",
        "Modern teaching methods"
      ]
    },
    {
      title: "Infrastructure",
      items: [
        "Well-equipped laboratories",
        "Digital classrooms",
        "Sports facilities",
        "Library resources"
      ]
    },
    {
      title: "Faculty",
      items: [
        "Qualified teachers",
        "Regular training",
        "Subject experts",
        "Experienced staff"
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
          <h1 className="text-4xl font-bold text-sdblue">Our Affiliation</h1>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-16 group">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200"
            alt="School Building" 
            className="w-full h-[400px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">CBSE Affiliated Institution</h2>
              <p className="text-lg text-blue-50 max-w-2xl">
                Providing quality education under the Central Board of Secondary Education, 
                New Delhi guidelines and curriculum.
              </p>
            </div>
          </div>
        </div>

        {/* Affiliation Details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {affiliationDetails.map((detail, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center">
                  <detail.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{detail.title}</h3>
                  <p className="text-sm text-blue-600">{detail.value}</p>
                </div>
              </div>
              <p className="text-gray-600">{detail.description}</p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold text-sdblue mb-6">{feature.title}</h3>
              <div className="space-y-4">
                {feature.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CBSE Standards */}
        <div className="bg-gradient-to-br from-[#E5DEFF] to-[#FDE1D3] rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-sdblue mb-8 text-center">CBSE Standards Compliance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <BookOpen className="w-8 h-8 text-sdblue" />
                <h3 className="text-xl font-bold text-sdblue">Academic Standards</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Following prescribed CBSE curriculum</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Regular academic audits</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Qualified teaching staff</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <Shield className="w-8 h-8 text-sdblue" />
                <h3 className="text-xl font-bold text-sdblue">Infrastructure Standards</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Standard-size classrooms</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Well-equipped laboratories</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Safety and security measures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Join Our Institution</h3>
          <p className="text-blue-50 mb-8 max-w-2xl mx-auto">
            Experience quality education with our CBSE affiliated school. 
            Start your journey towards excellence today.
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

export default Affiliation; 