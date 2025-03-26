
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import type { EssentialInfoContent } from '@/types/content';

export default function EssentialInfoDetailPage() {
  const { slug } = useParams();
  const [content, setContent] = useState<EssentialInfoContent | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      const { data, error } = await supabase
        .from('essential_info_content')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (error) {
        console.error('Error fetching content:', error);
        return;
      }

      setContent(data);
    };

    fetchContent();
  }, [slug]);

  if (!content) {
    return (
      <div>
        <Navigation />
        <div className="container mx-auto px-4 pt-24">
          <p className="text-center text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-center mb-12 animate-text-shimmer bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#8B5CF6] bg-clip-text text-transparent">
          {content.section_name}
        </h1>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6">
            {content.image_url && (
              <div className="w-full h-64 mb-6 overflow-hidden rounded-xl">
                <img 
                  src={content.image_url} 
                  alt={content.section_name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            )}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 whitespace-pre-wrap">
                {content.content}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
