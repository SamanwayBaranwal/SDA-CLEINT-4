import { useEffect, useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Music, Palette, Activity } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import type { BeyondAcademicContent } from '@/types/content';
import { useNavigate } from 'react-router-dom';

const sectionIcons = {
  'Sports & Games': Trophy,
  'Dance & Music': Music,
  'Art & Craft': Palette,
  'Yoga & Meditation': Activity,
};

const activities = [
  {
    title: "Sports & Games",
    description: "Comprehensive sports program developing physical fitness and team spirit",
    icon: Trophy,
    link: "/beyond-academic/sports",
    image: "/Sports/Sports1.jpeg"
  },
  {
    title: "Dance & Music",
    description: "Express creativity through classical and contemporary performances",
    icon: Music,
    link: "/beyond-academic/dance-music",
    image: "/Celebrations and Programs/image15.jpg"
  },
  {
    title: "Art & Craft",
    description: "Nurturing creativity and artistic expression",
    icon: Palette,
    link: "/beyond-academic/art-craft",
    image: "/Celebrations and Programs/image8.jpg"
  },
  {
    title: "Yoga",
    description: "Holistic development through yoga and meditation",
    icon: Activity,
    link: "/beyond-academic/yoga",
    image: "/Yoga/Yoga1.jpeg"
  }
];

export default function BeyondAcademicPage() {
  const [contents, setContents] = useState<BeyondAcademicContent[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContent = async () => {
      const { data, error } = await supabase
        .from('beyond_academic_content')
        .select('*');
      
      if (error) {
        console.error('Error fetching beyond academic content:', error);
        return;
      }

      if (data) {
        setContents(data);
      } else {
        setContents([]);
      }
    };

    fetchContent();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-sdblue mb-8">Beyond Academics</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              At S.D. Academy, we believe in nurturing well-rounded individuals through a 
              balanced approach to education that extends beyond traditional academics. 
              Our diverse range of co-curricular activities helps students discover and 
              develop their talents while building essential life skills.
            </p>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/Celebrations and Programs/image1.jpg"
              alt="Beyond Academic Activities"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Holistic Development</h2>
              <p className="text-gray-200">Nurturing talents beyond the classroom</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <Card 
              key={index}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => navigate(activity.link)}
            >
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img 
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] rounded-lg flex items-center justify-center mb-4">
                  <activity.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            onClick={() => navigate('/enquiry')}
            className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-white px-8 py-6 text-lg hover:opacity-90"
          >
            Enquire About Activities
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
