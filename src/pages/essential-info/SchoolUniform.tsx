import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Sun, Snowflake, UserCircle2, User2, Calendar, Shield, BookOpen, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function SchoolUniform() {
  const navigate = useNavigate();
  
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
            <h1 className="text-4xl font-bold text-sdblue">School Uniform</h1>
          </div>
          
          {/* Hero Image */}
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/uniform.jpg"
              alt="SD Academy School Uniform"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h2 className="text-3xl font-bold mb-2">Uniform Guidelines</h2>
              <p className="text-lg">Dress for success with pride and discipline</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose max-w-none">
            
            {/* Summer Uniform Section with Summer Theme */}
            <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 flex items-center">
                <Sun className="h-8 w-8 text-white mr-3" />
                <h3 className="text-2xl font-bold text-white m-0">Summer Uniform (Class 1 to 12)</h3>
              </div>
              
              <div className="p-6 bg-orange-50">
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  {/* Boys Section with Boy Theme */}
                  <div className="bg-white rounded-lg p-5 shadow-md border-l-4 border-blue-500">
                    <div className="flex items-center mb-3">
                      <UserCircle2 className="h-6 w-6 text-blue-500 mr-2" />
                      <h4 className="text-lg font-bold text-blue-700 m-0">Boys</h4>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Blue and Red check half shirt with blue half pant</li>
                      <li>School tie, belt, white socks with blue stripes</li>
                      <li>Black shoes</li>
                    </ul>
                  </div>

                  {/* Girls Section with Girl Theme */}
                  <div className="bg-white rounded-lg p-5 shadow-md border-l-4 border-pink-500">
                    <div className="flex items-center mb-3">
                      <User2 className="h-6 w-6 text-pink-500 mr-2" />
                      <h4 className="text-lg font-bold text-pink-700 m-0">Girls</h4>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Blue and Red check half shirt with blue tunic pant</li>
                      <li>School tie, belt, white socks with blue stripes</li>
                      <li>Black shoes</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-5 shadow-md">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-6 w-6 text-orange-500 mr-2" />
                    <p className="font-bold text-orange-700 m-0">Days of the Week:</p>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Monday, Tuesday, Thursday, Friday:</strong> Regular uniform as described above</li>
                    <li><strong>Wednesday:</strong> White shirt and white tunic, school tie, belt, white socks and white canvas shoes</li>
                    <li><strong>Saturday:</strong> House colour T-shirt, white tunic, white socks and white canvas shoes</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Winter Uniform Section with Winter Theme */}
            <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 flex items-center">
                <Snowflake className="h-8 w-8 text-white mr-3" />
                <h3 className="text-2xl font-bold text-white m-0">Winter Uniform (Class 1 to 12)</h3>
              </div>
              
              <div className="p-6 bg-blue-50">
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  {/* Boys Section with Boy Theme */}
                  <div className="bg-white rounded-lg p-5 shadow-md border-l-4 border-blue-500">
                    <div className="flex items-center mb-3">
                      <UserCircle2 className="h-6 w-6 text-blue-500 mr-2" />
                      <h4 className="text-lg font-bold text-blue-700 m-0">Boys</h4>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Blue and Red check full shirt with blue full pant</li>
                      <li>School tie, belt, white socks with blue stripes</li>
                      <li>Black shoes</li>
                      <li>School blazers with School monogram</li>
                      <li>Half blue colour sweater with maroon stripes</li>
                    </ul>
                  </div>

                  {/* Girls Section with Girl Theme */}
                  <div className="bg-white rounded-lg p-5 shadow-md border-l-4 border-pink-500">
                    <div className="flex items-center mb-3">
                      <User2 className="h-6 w-6 text-pink-500 mr-2" />
                      <h4 className="text-lg font-bold text-pink-700 m-0">Girls</h4>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Blue and Red check full shirt with blue tunic pant</li>
                      <li>School tie, belt, white socks with blue stripes</li>
                      <li>Black shoes</li>
                      <li>School blazers with School monogram</li>
                      <li>Half blue colour sweater with maroon stripes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Play Way to UKG Uniform */}
            <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 flex items-center">
                <Shield className="h-8 w-8 text-white mr-3" />
                <h3 className="text-2xl font-bold text-white m-0">Play Way to UKG Uniform</h3>
              </div>
              
              <div className="p-6 bg-purple-50">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Summer Section */}
                  <div className="bg-white rounded-lg p-5 shadow-md border-t-4 border-yellow-400">
                    <div className="flex items-center mb-3">
                      <Sun className="h-6 w-6 text-yellow-500 mr-2" />
                      <h4 className="text-lg font-bold text-yellow-700 m-0">Summer Uniform</h4>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li><strong>Monday, Tuesday, Thursday:</strong> Blue track suit with Maroon stripes, Maroon cape and black shoes</li>
                      <li><strong>Wednesday & Friday:</strong> House Track suit</li>
                    </ul>
                  </div>
                  
                  {/* Winter Section */}
                  <div className="bg-white rounded-lg p-5 shadow-md border-t-4 border-blue-400">
                    <div className="flex items-center mb-3">
                      <Snowflake className="h-6 w-6 text-blue-500 mr-2" />
                      <h4 className="text-lg font-bold text-blue-700 m-0">Winter Uniform</h4>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Same as summer with additional School blazer and warm track suit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Guidelines */}
            <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-4 flex items-center">
                <BookOpen className="h-8 w-8 text-white mr-3" />
                <h3 className="text-2xl font-bold text-white m-0">Additional Guidelines</h3>
              </div>
              
              <div className="p-6 bg-gray-50">
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Students must wear the prescribed School uniform. A defaulter is liable to be sent home.</li>
                  <li>Proper grooming and neat appearance is mandatory</li>
                  <li>Hair should be neatly combed and properly maintained</li>
                  <li>Jewelry and accessories are not permitted</li>
                  <li>ID cards must be worn at all times</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg border-l-4 border-blue-600 shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Important Note</h3>
              <p className="text-blue-900">
                All uniform items can be purchased from the school's authorized uniform vendor. 
                For any queries regarding the school uniform, please contact the school office.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}