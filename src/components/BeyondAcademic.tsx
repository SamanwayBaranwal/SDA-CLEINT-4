
import { Card, CardContent } from "@/components/ui/card";
import { 
  Trophy, Music, Palette, Activity, 
  Clock, Bus, ScrollText, Newspaper,
  FileSpreadsheet, UserPlus, School
} from "lucide-react";

const beyondAcademicItems = [
  {
    title: "House System & Sports",
    description: "Comprehensive sports program and house system for holistic development",
    icon: Trophy
  },
  {
    title: "Dance and Music",
    description: "Express creativity through dance and musical performances",
    icon: Music
  },
  {
    title: "Art and Craft",
    description: "Develop artistic skills and creative expression",
    icon: Palette
  },
  {
    title: "Yoga and Meditation",
    description: "Focus on mental and physical well-being",
    icon: Activity
  }
];

const essentialInfoItems = [
  {
    title: "School Uniform",
    description: "Details about school uniform and dress code",
    icon: School
  },
  {
    title: "School Timing",
    description: "Class schedules and important timings",
    icon: Clock
  },
  {
    title: "Transport",
    description: "School transport facilities and routes",
    icon: Bus
  },
  {
    title: "Code of Conduct",
    description: "School rules and behavioral guidelines",
    icon: ScrollText
  },
  {
    title: "SDA in Newspaper",
    description: "Media coverage and school achievements",
    icon: Newspaper
  },
  {
    title: "Online Registration",
    description: "Register for admission online",
    icon: FileSpreadsheet
  },
  {
    title: "Job Entrance Form",
    description: "Career opportunities at SDA",
    icon: UserPlus
  }
];

export const BeyondAcademic = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F2FCE2] to-[#FEF7CD]">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 animate-text-shimmer bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#8B5CF6] bg-clip-text text-transparent">
            Beyond Academic
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beyondAcademicItems.map((item, index) => (
              <Card 
                key={index}
                className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm bg-white/80 border-none"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] rounded-2xl flex items-center justify-center mb-4 mx-auto transform rotate-3 hover:rotate-6 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-center mb-12 animate-text-shimmer bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#8B5CF6] bg-clip-text text-transparent">
            Essential Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {essentialInfoItems.map((item, index) => (
              <Card 
                key={index}
                className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm bg-white/80 border-none"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] rounded-2xl flex items-center justify-center mb-4 mx-auto transform rotate-3 hover:rotate-6 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
