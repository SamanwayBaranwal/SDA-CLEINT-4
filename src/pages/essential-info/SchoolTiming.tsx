import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Clock, Sun, Moon, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function SchoolTiming() {
  const navigate = useNavigate();

  const timings = [
    {
      session: "Morning Session",
      icon: Sun,
      time: "7:30 AM - 1:30 PM",
      classes: "Classes I to XII",
      details: [
        "Assembly: 7:30 AM - 7:45 AM",
        "First Period: 7:45 AM",
        "Lunch Break: 10:30 AM - 11:00 AM",
        "Last Period Ends: 1:30 PM"
      ]
    },
    {
      session: "Pre-Primary",
      icon: Clock,
      time: "9:00 AM - 12:30 PM",
      classes: "Nursery to KG",
      details: [
        "Arrival: 8:45 AM - 9:00 AM",
        "Activity Time: 10:30 AM",
        "Snack Break: 11:00 AM",
        "Departure: 12:30 PM"
      ]
    }
  ];

  const importantDates = [
    {
      month: "April",
      events: [
        "1st: New Session Begins",
        "15th: Parent-Teacher Meeting"
      ]
    },
    {
      month: "May-June",
      events: [
        "15th May - 30th June: Summer Vacation"
      ]
    },
    {
      month: "July",
      events: [
        "1st: School Reopens",
        "20th: First Unit Test"
      ]
    }
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
            <h1 className="text-4xl font-bold text-sdblue">School Timing</h1>
          </div>
          
          {/* Hero Section */}
          <div className="relative h-[300px] rounded-xl overflow-hidden mb-12 shadow-lg">
            <img 
              src="/School Building.jpeg"
              alt="SD Academy Campus"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Academic Schedule</h2>
              <p className="text-gray-200">Structured for optimal learning</p>
            </div>
          </div>

          {/* Daily Schedule */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {timings.map((session, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <session.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{session.session}</h3>
                    <p className="text-blue-600">{session.time}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{session.classes}</p>
                <ul className="space-y-2">
                  {session.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-600">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Academic Calendar */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-semibold">Academic Calendar</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {importantDates.map((date, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-blue-600 mb-3">{date.month}</h3>
                  <ul className="space-y-2">
                    {date.events.map((event, idx) => (
                      <li key={idx} className="text-gray-600">{event}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Important Notes</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Students should arrive 10 minutes before their scheduled time</li>
              <li>Late arrival must be justified with a written note from parents</li>
              <li>School gates close 15 minutes after the start time</li>
              <li>Parents must pick up their children on time</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 