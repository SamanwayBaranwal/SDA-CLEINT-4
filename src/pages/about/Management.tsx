import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const Management = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure page starts at the top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const managementTeam = [
    {
      name: "Dr. HN Singh",
      position: "Chairman & Founder",
      image: "/Founder.jpeg",
      qualification: "Ph.D. in Education",
      experience: "30+ years in education sector",
      message: "Committed to nurturing young minds and shaping future leaders through quality education."
    },
    {
      name: "Mrs. Shruti Singh",
      position: "Principal",
      image: "/Principal.jpeg",
      qualification: "M.A., B.Ed.",
      experience: "20+ years in education",
      message: "Dedicated to providing holistic education and fostering academic excellence."
    },
    {
      name: "Mr. Rajesh Singh",
      position: "Director",
      image: "/Director.jpeg",
      qualification: "M.B.A.",
      experience: "15+ years in educational management",
      message: "Focused on building a strong foundation for students' future success."
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
          <h1 className="text-4xl font-bold text-sdblue">School Management</h1>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-sdblue mb-4">School Management</h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our school is led by a dedicated team of experienced educators and administrators 
            who are committed to maintaining the highest standards of education while fostering 
            an environment of growth, innovation, and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {managementTeam.map((member) => (
            <div 
              key={member.name}
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-lg font-medium text-blue-100">{member.position}</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-semibold text-sdblue">Qualification:</span> {member.qualification}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-sdblue">Experience:</span> {member.experience}
                  </p>
                </div>
                <p className="text-gray-600 italic">{member.message}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#E5DEFF] to-[#FDE1D3] p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-sdblue mb-8 text-center">Management Committees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-sdblue mb-4">Management Committee</h3>
              <p className="text-gray-700">
                Our management committee comprises experienced educators and administrators 
                who work together to ensure the highest standards of education and 
                institutional development.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-sdblue mb-4">Parent-Teacher Association</h3>
              <p className="text-gray-700">
                Facilitates communication between parents and teachers, organizing various 
                activities to enhance the learning experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Management; 