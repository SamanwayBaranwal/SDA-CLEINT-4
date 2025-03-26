import { Card, CardContent } from '@/components/ui/card';
import { Monitor, Microscope, Trophy, Bus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const facilities = [
  {
    title: "Computer Lab",
    description: "State-of-the-art computers with high-speed internet",
    icon: Monitor,
    image: "/computerlab.png",
    link: "/infrastructure/computer-lab"
  },
  {
    title: "Science Lab",
    description: "Well-equipped laboratories for practical learning",
    icon: Microscope,
    image: "/sciencelab1.jpeg",
    link: "/infrastructure/science-lab"
  },
  {
    title: "Sports Complex",
    description: "Multiple sports facilities and trained coaches",
    icon: Trophy,
    image: "/Sports/Sports1.jpeg",
    link: "/beyond-academic/sports"
  },
  {
    title: "Transport",
    description: "Safe and comfortable transportation service",
    icon: Bus,
    image: "/Transport/sd academy transport gkp 1.jpeg",
    link: "/essential-info/transport"
  }
];

export const Facilities = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#0EA5E9]">
            Our Facilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <Card 
                key={index}
                className="transform transition-all duration-300 hover:shadow-xl backdrop-blur-sm bg-white/80 border-none overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <facility.icon className="w-12 h-12 text-white drop-shadow-lg" />
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] bg-clip-text text-transparent">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {facility.description}
                  </p>
                  <div className="flex justify-center mt-2">
                    <Link to={facility.link}>
                      <Button 
                        variant="outline" 
                        className="border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9] hover:text-white transition-all"
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
