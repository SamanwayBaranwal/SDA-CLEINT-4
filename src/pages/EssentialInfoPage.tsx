import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  School, 
  Clock, 
  Bus, 
  ScrollText, 
  Newspaper, 
  FileSpreadsheet, 
  UserPlus,
  ArrowRight 
} from "lucide-react";

const essentialInfo = [
  {
    title: "School Uniform",
    description: "Complete guide to our school uniform requirements",
    icon: School,
    link: "/essential-info/school-uniform",
    image: "/uniform.jpg"
  },
  {
    title: "School Timing",
    description: "Daily schedule and academic calendar",
    icon: Clock,
    link: "/essential-info/school-timing",
    image: "/School Building.jpeg"
  },
  {
    title: "Transport",
    description: "School bus routes and transportation details",
    icon: Bus,
    link: "/essential-info/transport",
    image: "/Transport/sd academy transport gkp 1.jpeg"
  },
  {
    title: "Code of Conduct",
    description: "School rules and behavioral guidelines",
    icon: ScrollText,
    link: "/essential-info/code-of-conduct",
    image: "https://plus.unsplash.com/premium_photo-1661549683908-b11e9855c469?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cnVsZXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "SDA in Newspaper",
    description: "Media coverage and school achievements",
    icon: Newspaper,
    link: "/essential-info/sda-newspaper",
    image: "https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3c3BhcGVyfGVufDB8fDB8fHww"
  },
  {
    title: "Online Registration",
    description: "Admission registration process",
    icon: FileSpreadsheet,
    link: "/essential-info/online-registration",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T25saW5lJTIwcmVnaXN0cmF0aW9ufGVufDB8fDB8fHww"
  },
  {
    title: "Job Entrance",
    description: "Career opportunities at SD Academy",
    icon: UserPlus,
    link: "/essential-info/job-entrance",
    image: "https://plus.unsplash.com/premium_photo-1661598213264-9b708f59d793?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8am9ifGVufDB8fDB8fHww"
  }
];

export default function EssentialInfoPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-sdblue mb-8">Essential Information</h1>
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Find all the essential information you need about SD Academy, from 
              uniform guidelines to transportation details. We've organized everything 
              to make it easy for parents and students to access important school information.
            </p>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/School Building.jpeg"
              alt="SD Academy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Important Guidelines</h2>
              <p className="text-gray-200">Everything you need to know</p>
            </div>
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {essentialInfo.map((info, index) => (
            <Card 
              key={index}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => navigate(info.link)}
            >
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img 
                  src={info.image}
                  alt={info.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] bg-clip-text text-transparent">
                  {info.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {info.description}
                </p>
                <div className="flex items-center text-sdblue hover:text-blue-600 transition-colors">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <Button
            onClick={() => navigate('/enquiry')}
            className="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] text-white px-8 py-6 text-lg hover:opacity-90"
          >
            Contact for More Information
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
