import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, Clock, MapPin, ArrowLeft } from 'lucide-react';

interface Notice {
  id: number;
  title: string;
  date: string;
  description: string;
  time: string;
  venue: string;
  category: string;
  imageUrl?: string | null;
  aspectRatio?: string;
}

export default function AdminNotices() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [venue, setVenue] = useState('');
  const [category, setCategory] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let imageUrl = null;
    let aspectRatio = null;

    if (imageFile) {
      imageUrl = URL.createObjectURL(imageFile);
      // For this example, we'll set a default aspect ratio
      aspectRatio = '16:9';
    }

    const newNotice: Notice = {
      id: Date.now(),
      title,
      description,
      date,
      time,
      venue,
      category,
      imageUrl,
      aspectRatio
    };

    const existingNotices = JSON.parse(localStorage.getItem('notices') || '[]');
    localStorage.setItem('notices', JSON.stringify([newNotice, ...existingNotices]));

    toast({
      title: "Notice Added",
      description: "The notice has been successfully added.",
    });

    // Reset form
    setTitle('');
    setDescription('');
    setDate('');
    setTime('');
    setVenue('');
    setCategory('');
    setImageFile(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E5DEFF] to-[#FDE1D3]">
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
          <h1 className="text-4xl font-bold mb-8 text-center animate-text-shimmer bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#8B5CF6]">
            Add New Notice
          </h1>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-purple-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-purple-700">Title</label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter notice title"
                className="border-purple-200 focus:border-purple-400"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-purple-700">Description</label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter notice description"
                className="border-purple-200 focus:border-purple-400"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-purple-700">Date</label>
                <div className="relative">
                  <Input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border-purple-200 focus:border-purple-400"
                    required
                  />
                  <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-purple-400" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-purple-700">Time</label>
                <div className="relative">
                  <Input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="border-purple-200 focus:border-purple-400"
                    required
                  />
                  <Clock className="absolute right-3 top-2.5 h-5 w-5 text-purple-400" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-purple-700">Venue</label>
                <div className="relative">
                  <Input
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    placeholder="Enter venue"
                    className="border-purple-200 focus:border-purple-400"
                    required
                  />
                  <MapPin className="absolute right-3 top-2.5 h-5 w-5 text-purple-400" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-purple-700">Category</label>
                <Input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Enter category"
                  className="border-purple-200 focus:border-purple-400"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-purple-700">Image (Optional)</label>
              <Input 
                type="file" 
                accept="image/*"
                onChange={handleImageChange}
                className="border-purple-200 focus:border-purple-400"
              />
              <Alert className="mt-2 bg-purple-50 border-purple-200">
                <AlertDescription className="text-purple-700">
                  Upload images to make your notice more engaging
                </AlertDescription>
              </Alert>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:from-[#7C3AED] hover:to-[#C026D3] text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Add Notice
            </Button>
          </form>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] bg-clip-text text-transparent">
            Existing Notices
          </h2>
          <div className="space-y-4">
            {JSON.parse(localStorage.getItem('notices') || '[]').map((notice: Notice) => (
              <div key={notice.id} className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-purple-100 hover:border-purple-200 transition-all duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg text-purple-800">{notice.title}</h3>
                    <p className="text-gray-600 mt-1">{notice.description}</p>
                  </div>
                  <Button
                    variant="destructive"
                    className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
                    onClick={() => {
                      const notices = JSON.parse(localStorage.getItem('notices') || '[]');
                      const updatedNotices = notices.filter((n: Notice) => n.id !== notice.id);
                      localStorage.setItem('notices', JSON.stringify(updatedNotices));
                      toast({
                        title: "Notice Deleted",
                        description: "The notice has been removed.",
                      });
                      navigate(0);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
