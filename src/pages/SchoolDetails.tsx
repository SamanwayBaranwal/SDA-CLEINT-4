import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const SchoolDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-6">
          <h1 className="text-4xl font-bold text-sdblue">About S.D. Academy & Tendercare Playway</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              S.D. Academy & Tendercare Playway School is a prestigious educational institution situated in the vibrant city of Gorakhpur. 
              Founded with a vision to provide quality education, our school has been nurturing young minds and shaping future leaders 
              through a perfect blend of academic excellence and moral values.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-sdblue">Our Location</h2>
                <p className="text-gray-700">
                  Located in the heart of Gorakhpur, our campus provides a serene and conducive environment for learning. 
                  The strategic location makes it easily accessible from all parts of the city.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-sdblue">Our Mission</h2>
                <p className="text-gray-700">
                  To provide holistic education that empowers students with knowledge, skills, and values necessary to excel 
                  in their chosen paths and contribute positively to society.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-semibold text-sdblue">Key Features</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>State-of-the-art infrastructure</li>
                <li>Experienced and dedicated faculty</li>
                <li>Comprehensive curriculum</li>
                <li>Focus on extra-curricular activities</li>
                <li>Safe and nurturing environment</li>
                <li>Modern teaching methodologies</li>
              </ul>
            </div>

            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-semibold text-sdblue">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <p className="font-semibold">Address:</p>
                  <p>S.D. Academy & Tendercare Playway</p>
                  <p>Rapti Nagar, Near Shahpur Thana, Gorakhpur</p>
                </div>
                <div>
                  <p className="font-semibold">Contact Details:</p>
                  <p>Phone: +918881110745, +917388277496</p>
                  <p>Email: sdacademy18@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SchoolDetails;
