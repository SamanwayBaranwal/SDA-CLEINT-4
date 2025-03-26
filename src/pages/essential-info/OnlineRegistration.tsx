import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FileText, CheckCircle, AlertCircle, Calendar, ArrowRight, FileSpreadsheet, ArrowLeft } from "lucide-react";
import { CONTACT_EMAILS } from '@/constants/contact';

export default function OnlineRegistration() {
  const navigate = useNavigate();

  const registrationSteps = [
    {
      icon: FileText,
      title: "Fill Application Form",
      description: "Complete the online registration form with accurate details"
    },
    {
      icon: CheckCircle,
      title: "Document Submission",
      description: "Upload required documents and certificates"
    },
    {
      icon: Calendar,
      title: "Schedule Interview",
      description: "Book an appointment for student interview"
    }
  ];

  const requiredDocuments = [
    "Birth Certificate",
    "Previous School Transfer Certificate",
    "Report Card of Previous Class",
    "Passport Size Photographs",
    "Residence Proof",
    "Aadhar Card Copy"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigate(-1)}
              className="hover:bg-gray-100"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-4xl font-bold text-sdblue">Online Registration</h1>
          </div>
          
          {/* Hero Section */}
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-12 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T25saW5lJTIwcmVnaXN0cmF0aW9ufGVufDB8fDB8fHww"
              alt="Online Registration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Begin Your Journey</h2>
              <p className="text-gray-200">Simple steps to join SD Academy</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-8 text-white mb-12">
            <div className="md:flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Ready to Apply?</h2>
                <p className="text-green-100 mb-4 md:mb-0">
                  Start your application process by filling out our enquiry form
                </p>
              </div>
              <Button 
                onClick={() => navigate('/enquiry')}
                className="bg-white text-green-600 hover:bg-green-50 px-8 py-6"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Registration Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {registrationSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Required Documents */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FileSpreadsheet className="h-8 w-8 text-green-600" />
              <h2 className="text-2xl font-semibold">Required Documents</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {requiredDocuments.map((doc, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-green-600" />
              Important Notes
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Registration does not guarantee admission</li>
              <li>• All documents must be submitted in original for verification</li>
              <li>• Incomplete applications will not be processed</li>
              <li>• Age criteria must be met as per class applied for</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
            <p className="text-gray-700 mb-4">
              For admission related queries, please contact us at:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Email: <a href={`mailto:${CONTACT_EMAILS.ADMISSIONS}`} className="text-blue-600 hover:underline">
                {CONTACT_EMAILS.ADMISSIONS}
              </a></li>
              <li>• General Enquiries: <a href={`mailto:${CONTACT_EMAILS.GENERAL}`} className="text-blue-600 hover:underline">
                {CONTACT_EMAILS.GENERAL}
              </a></li>
            </ul>
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Have questions about the registration process?</p>
            <Button
              onClick={() => navigate('/enquiry')}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-6 text-lg hover:opacity-90"
            >
              Contact Admission Office
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 