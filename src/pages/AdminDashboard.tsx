
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/Navigation';
import { useToast } from '@/components/ui/use-toast';
import { ArrowLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from '@/integrations/supabase/client';
import type { BeyondAcademicContent, EssentialInfoContent } from '@/types/content';
import { GeneralSection } from '@/components/admin/GeneralSection';
import { ContentSection } from '@/components/admin/ContentSection';
import { NoticesSection } from '@/components/admin/NoticesSection';
import { EnquiriesSection } from '@/components/admin/EnquiriesSection';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [beyondAcademicContent, setBeyondAcademicContent] = useState<BeyondAcademicContent[]>([]);
  const [essentialInfoContent, setEssentialInfoContent] = useState<EssentialInfoContent[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/login');
    }
    
    const fetchContent = async () => {
      const { data: beyondData, error: beyondError } = await supabase
        .from('beyond_academic_content')
        .select('*');
      
      if (beyondError) {
        console.error('Error fetching beyond academic content:', beyondError);
      } else {
        setBeyondAcademicContent(beyondData || []);
      }

      const { data: essentialData, error: essentialError } = await supabase
        .from('essential_info_content')
        .select('*');
      
      if (essentialError) {
        console.error('Error fetching essential info content:', essentialError);
      } else {
        setEssentialInfoContent(essentialData || []);
      }
    };

    fetchContent();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/login');
  };

  const handleImageUpload = async (file: File, section: string, contentId: string, contentType: 'beyond' | 'essential') => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${crypto.randomUUID()}.${fileExt}`;
      const filePath = `${section}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('section_images')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('section_images')
        .getPublicUrl(filePath);

      const table = contentType === 'beyond' ? 'beyond_academic_content' : 'essential_info_content';
      const { error: updateError } = await supabase
        .from(table)
        .update({ image_url: publicUrl })
        .eq('id', contentId);

      if (updateError) {
        throw updateError;
      }

      toast({
        title: "Success",
        description: "Image uploaded successfully",
      });

      const { data, error: fetchError } = await supabase
        .from(table)
        .select('*');
      
      if (fetchError) {
        throw fetchError;
      }

      if (contentType === 'beyond') {
        setBeyondAcademicContent(data || []);
      } else {
        setEssentialInfoContent(data || []);
      }

    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: "Error",
        description: "Failed to upload image",
        variant: "destructive",
      });
    }
  };

  const handleContentUpdate = async (id: string, content: string, type: 'beyond' | 'essential') => {
    const table = type === 'beyond' ? 'beyond_academic_content' : 'essential_info_content';
    try {
      const { error } = await supabase
        .from(table)
        .update({ content })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Content updated successfully",
      });

      const { data, error: fetchError } = await supabase
        .from(table)
        .select('*');
      
      if (fetchError) throw fetchError;

      if (type === 'beyond') {
        setBeyondAcademicContent(data || []);
      } else {
        setEssentialInfoContent(data || []);
      }

    } catch (error) {
      console.error('Error updating content:', error);
      toast({
        title: "Error",
        description: "Failed to update content",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate(-1)}
            className="hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-3xl font-bold text-sdblue">Admin Dashboard</h1>
          <div className="ml-auto">
            <Button onClick={handleLogout} variant="outline">Logout</Button>
          </div>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="beyond">Beyond Academic</TabsTrigger>
            <TabsTrigger value="essential">Essential Info</TabsTrigger>
            <TabsTrigger value="notices">Notices</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <GeneralSection />
          </TabsContent>

          <TabsContent value="beyond">
            <ContentSection 
              content={beyondAcademicContent}
              type="beyond"
              onImageUpload={handleImageUpload}
              onContentUpdate={handleContentUpdate}
            />
          </TabsContent>

          <TabsContent value="essential">
            <ContentSection 
              content={essentialInfoContent}
              type="essential"
              onImageUpload={handleImageUpload}
              onContentUpdate={handleContentUpdate}
            />
          </TabsContent>

          <TabsContent value="notices">
            <NoticesSection />
          </TabsContent>
        </Tabs>

        <EnquiriesSection />
      </div>
    </div>
  );
}
