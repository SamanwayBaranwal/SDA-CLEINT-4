
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Academic = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
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
          <h1 className="text-4xl font-bold text-sdblue">Academic Programs</h1>
        </div>

        <div className="text-center mb-12">
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive education from pre-primary to senior secondary levels</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-sdblue mb-6">Our Curriculum</h2>
            <p className="text-gray-700 mb-4">
              Our curriculum is designed to foster critical thinking, creativity, and a love for learning. We follow a student-centric approach that combines traditional teaching methods with modern educational technologies.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-sdblue rounded-full mr-3"></span>
                Comprehensive CBSE curriculum
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-sdblue rounded-full mr-3"></span>
                Focus on experiential learning
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-sdblue rounded-full mr-3"></span>
                Regular assessments and feedback
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-sdblue rounded-full mr-3"></span>
                Digital learning integration
              </li>
            </ul>
          </div>
          <div>
            <img 
              src="/lovable-uploads/319008bf-cf23-450b-9ba4-2460eaaf8736.png" 
              alt="Academic Activities" 
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-sdblue mb-4">Primary Section</h3>
            <p className="text-gray-700">Grades 1-5 focus on building strong foundations in core subjects while nurturing creativity.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-sdblue mb-4">Middle Section</h3>
            <p className="text-gray-700">Grades 6-8 emphasize analytical thinking and subject specialization.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-sdblue mb-4">Senior Section</h3>
            <p className="text-gray-700">Grades 9-12 prepare students for board exams and higher education.</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Academic;
