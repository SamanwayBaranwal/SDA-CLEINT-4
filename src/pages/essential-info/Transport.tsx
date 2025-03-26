import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Bus, MapPin, Clock, Phone, AlertCircle, Wrench, Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Transport() {
  const navigate = useNavigate();
  
  const routes = [
    {
      route: "Route 1 - Golghar Area",
      stops: [
        { location: "Golghar", time: "6:45 AM" },
        { location: "Medical College", time: "7:00 AM" },
        { location: "Gorakhnath", time: "7:15 AM" }
      ]
    },
    {
      route: "Route 2 - Rapti Nagar",
      stops: [
        { location: "Rapti Nagar Phase 1", time: "6:45 AM" },
        { location: "Rapti Nagar Phase 2", time: "7:00 AM" },
        { location: "Rapti Nagar Phase 3", time: "7:15 AM" }
      ]
    },
    {
      route: "Route 3 - Mohaddipur",
      stops: [
        { location: "Mohaddipur", time: "6:45 AM" },
        { location: "Shahpur", time: "7:00 AM" },
        { location: "Rustampur", time: "7:15 AM" }
      ]
    }
  ];

  const transportFeatures = [
    {
      icon: Bus,
      title: "Modern Fleet",
      description: "Well-maintained, air-conditioned buses with safety features"
    },
    {
      icon: Clock,
      title: "Timely Service",
      description: "Punctual pickup and drop service"
    },
    {
      icon: Wrench,
      title: "Regular Maintenance",
      description: "Scheduled servicing and safety checks for all vehicles"
    },
    {
      icon: AlertCircle,
      title: "Safety First",
      description: "Trained drivers and conductors with first-aid knowledge"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigate(-1)}
              className="hover:bg-gray-100"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-4xl font-bold text-sdblue">Transport Service</h1>
          </div>
          
          {/* Hero Section */}
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-12 shadow-lg">
            <img 
              src="/Transport/sd academy transport gkp 1.jpeg"
              alt="SD Academy Transport"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">School Transport</h2>
              <p className="text-gray-200">Safe and comfortable journey for every student</p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {transportFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bus Routes */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-8 w-8 text-yellow-600" />
              <h2 className="text-2xl font-semibold">Bus Routes</h2>
            </div>
            <div className="space-y-8">
              {routes.map((route, index) => (
                <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                  <h3 className="text-lg font-semibold text-yellow-600 mb-4">{route.route}</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {route.stops.map((stop, idx) => (
                      <div key={idx} className="bg-yellow-50 p-4 rounded-lg">
                        <p className="font-medium">{stop.location}</p>
                        <p className="text-gray-600 text-sm">{stop.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[1, 2, 3].map((num) => (
              <div key={num} className="relative h-64 rounded-xl overflow-hidden group">
                <img 
                  src={`/Transport/sd academy transport gkp ${num}.jpeg`}
                  alt={`Transport ${num}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Transport Information</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Transport facility is available for all areas of Gorakhpur</li>
              <li>• Monthly transport fee varies according to distance</li>
              <li>• School-owned transport fleet with speed governors</li>
              <li>• Contact transport in-charge: +91 88811 16275 (Ashok Nigam)</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 