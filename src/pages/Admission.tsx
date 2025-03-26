
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Admission = () => {
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
          <h1 className="text-4xl font-bold text-sdblue">Admission Process</h1>
        </div>

        <div className="text-center mb-12">
          <p className="text-gray-600 max-w-2xl mx-auto">Join our vibrant learning community</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-sdblue mb-6">How to Apply</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-sdblue text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Fill the Enquiry Form</h3>
                  <p className="text-gray-700">Submit your initial enquiry through our online form.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-sdblue text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Document Submission</h3>
                  <p className="text-gray-700">Provide necessary documents including previous academic records.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-sdblue text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Entrance Assessment</h3>
                  <p className="text-gray-700">Schedule and complete the entrance assessment.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-sdblue text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Final Registration</h3>
                  <p className="text-gray-700">Complete the admission process upon selection.</p>
                </div>
              </div>
            </div>
            <Button 
              className="mt-8 bg-sdblue hover:bg-sdblue/90"
              onClick={() => navigate("/enquiry")}
            >
              Submit Enquiry
            </Button>
          </div>
          <div>
            <img 
              src="/lovable-uploads/74233a1b-ee7c-42d2-b3dc-5c32c52d8378.png" 
              alt="Admission Process" 
              className="rounded-lg shadow-lg w-full h-[500px] object-cover"
            />
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-sdblue mb-6">Required Documents</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">For New Admissions</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Birth Certificate</li>
                <li>• Previous School Records</li>
                <li>• Transfer Certificate (if applicable)</li>
                <li>• Passport Size Photographs</li>
                <li>• Aadhar Card Copy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Additional Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Medical Fitness Certificate</li>
                <li>• Parent's ID Proof</li>
                <li>• Residence Proof</li>
                <li>• Blood Group Certificate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Admission;
