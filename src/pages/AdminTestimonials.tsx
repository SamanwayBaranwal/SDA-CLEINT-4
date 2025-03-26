
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminTestimonials() {
  const navigate = useNavigate();
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState<"parent" | "student">("parent");
  const [studentClass, setStudentClass] = useState("");
  const { toast } = useToast();

  const getEmbedUrl = (url: string) => {
    try {
      const videoId = url.split('v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } catch (error) {
      return url; // Return original URL if parsing fails
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const embedUrl = getEmbedUrl(youtubeUrl);
    const newTestimonial = {
      id: Date.now(),
      youtubeUrl: embedUrl,
      type,
      name,
      ...(type === "student" && { class: studentClass })
    };

    const existingTestimonials = JSON.parse(localStorage.getItem('videoTestimonials') || '[]');
    localStorage.setItem('videoTestimonials', JSON.stringify([...existingTestimonials, newTestimonial]));

    toast({
      title: "Video Testimonial Added",
      description: "The video testimonial has been successfully added.",
    });

    setYoutubeUrl("");
    setName("");
    setType("parent");
    setStudentClass("");
  };

  return (
    <div>
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate(-1)}
            className="hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-3xl font-bold text-sdblue mb-8">Manage Video Testimonials</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">YouTube Video URL</label>
            <Input 
              type="url" 
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              placeholder="Enter YouTube video URL"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter person's name"
              required
            />
          </div>
          
          <div className="space-y-3">
            <label className="block text-sm font-medium">Type</label>
            <RadioGroup value={type} onValueChange={(value: "parent" | "student") => setType(value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="parent" id="parent" />
                <Label htmlFor="parent">Parent</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="student" id="student" />
                <Label htmlFor="student">Student</Label>
              </div>
            </RadioGroup>
          </div>

          {type === "student" && (
            <div>
              <label className="block text-sm font-medium mb-2">Class</label>
              <Select value={studentClass} onValueChange={setStudentClass}>
                <SelectTrigger>
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(12)].map((_, i) => (
                    <SelectItem key={i + 1} value={String(i + 1)}>
                      Class {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          
          <Button type="submit" className="w-full">Add Video Testimonial</Button>
        </form>
      </div>
    </div>
  );
}
