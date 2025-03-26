import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface GalleryImage {
  id: number;
  url: string;
  caption: string;
  section: string;
  showOnHome?: boolean;
}

export default function AdminGallery() {
  const navigate = useNavigate();
  const [image, setImage] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [section, setSection] = useState("");
  const [showOnHome, setShowOnHome] = useState(false);
  const [sections, setSections] = useState<string[]>([]);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const { toast } = useToast();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const existingImages = JSON.parse(localStorage.getItem('gallery') || '[]') as GalleryImage[];
    setGalleryImages(existingImages);
    const uniqueSections = Array.from(new Set(existingImages.map((img: GalleryImage) => img.section)));
    setSections(uniqueSections as string[]);
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sectionExists = sections.some(s => s.toLowerCase() === section.toLowerCase());
    
    const newImage = {
      id: Date.now(),
      url: image ? URL.createObjectURL(image) : null,
      caption: caption,
      section: section,
      showOnHome: showOnHome
    };

    const updatedImages = [...galleryImages, newImage];
    setGalleryImages(updatedImages);
    
    if (!sectionExists) {
      setSections([...sections, section]);
    }
    
    localStorage.setItem('gallery', JSON.stringify(updatedImages));

    toast({
      title: "Image Added",
      description: "The image has been successfully added to the gallery.",
    });

    setImage(null);
    setCaption("");
    setSection("");
    setShowOnHome(false);
  };

  const handleDeleteImage = (imageId: number) => {
    const updatedImages = galleryImages.filter(img => img.id !== imageId);
    setGalleryImages(updatedImages);
    localStorage.setItem('gallery', JSON.stringify(updatedImages));

    const remainingSections = Array.from(new Set(updatedImages.map(img => img.section)));
    setSections(remainingSections);

    toast({
      title: "Image Deleted",
      description: "The image has been removed from the gallery.",
    });
  };

  const toggleShowOnHome = (imageId: number) => {
    const updatedImages = galleryImages.map(img => 
      img.id === imageId ? { ...img, showOnHome: !img.showOnHome } : img
    );
    setGalleryImages(updatedImages);
    localStorage.setItem('gallery', JSON.stringify(updatedImages));

    toast({
      title: "Image Updated",
      description: `Image will ${updatedImages.find(img => img.id === imageId)?.showOnHome ? 'now' : 'no longer'} be shown on home page.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white perspective-1000">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate(-1)}
            className="hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-3xl font-bold text-sdblue animate-fade-in">
            Manage Gallery
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50">
              <h2 className="text-xl font-semibold mb-4 text-sdblue">Add New Image</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Image</label>
                  <Input 
                    type="file" 
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full"
                    required
                  />
                  <Alert className="mt-2">
                    <AlertDescription>
                      Please upload images in 16:9 aspect ratio for optimal display
                    </AlertDescription>
                  </Alert>
                </div>
                
                <div className="transform hover:scale-105 transition-transform duration-200">
                  <label className="block text-sm font-medium mb-2">Caption</label>
                  <Input
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Enter image caption"
                    required
                    className="hover:border-sdblue transition-colors duration-200"
                  />
                </div>

                <div className="transform hover:scale-105 transition-transform duration-200">
                  <label className="block text-sm font-medium mb-2">Section</label>
                  <Input
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                    placeholder="Enter section name (e.g., Diwali, Christmas)"
                    required
                    className="hover:border-sdblue transition-colors duration-200"
                    list="sections"
                  />
                  <datalist id="sections">
                    {sections.map((s) => (
                      <option key={s} value={s} />
                    ))}
                  </datalist>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="showOnHome"
                    checked={showOnHome}
                    onChange={(e) => setShowOnHome(e.target.checked)}
                    className="w-4 h-4 text-sdblue"
                  />
                  <label htmlFor="showOnHome" className="text-sm font-medium">
                    Show on Home Page
                  </label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-sdblue hover:bg-sdblue/90 transform hover:scale-105 transition-all duration-300"
                >
                  Add Image to Gallery
                </Button>
              </form>
            </Card>
          </div>

          <div className="perspective-1000">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="flex flex-wrap justify-start mb-8 bg-gradient-to-r from-gray-50 to-white p-1 rounded-lg">
                <TabsTrigger value="all" className="px-4 py-2">All Images</TabsTrigger>
                <TabsTrigger value="home" className="px-4 py-2">Home Page Images</TabsTrigger>
                {sections.map((section) => (
                  <TabsTrigger 
                    key={section} 
                    value={section} 
                    className="px-4 py-2"
                  >
                    {section}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="all">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {galleryImages.map((image) => (
                    <ImageCard 
                      key={image.id}
                      image={image}
                      onDelete={handleDeleteImage}
                      onToggleHome={toggleShowOnHome}
                      hoveredCard={hoveredCard}
                      setHoveredCard={setHoveredCard}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="home">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {galleryImages
                    .filter(img => img.showOnHome)
                    .map((image) => (
                      <ImageCard 
                        key={image.id}
                        image={image}
                        onDelete={handleDeleteImage}
                        onToggleHome={toggleShowOnHome}
                        hoveredCard={hoveredCard}
                        setHoveredCard={setHoveredCard}
                      />
                    ))}
                </div>
              </TabsContent>

              {sections.map((section) => (
                <TabsContent key={section} value={section}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {galleryImages
                      .filter((img) => img.section === section)
                      .map((image) => (
                        <ImageCard 
                          key={image.id}
                          image={image}
                          onDelete={handleDeleteImage}
                          onToggleHome={toggleShowOnHome}
                          hoveredCard={hoveredCard}
                          setHoveredCard={setHoveredCard}
                        />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ImageCardProps {
  image: GalleryImage;
  onDelete: (id: number) => void;
  onToggleHome: (id: number) => void;
  hoveredCard: number | null;
  setHoveredCard: (id: number | null) => void;
}

const ImageCard = ({ image, onDelete, onToggleHome, hoveredCard, setHoveredCard }: ImageCardProps) => {
  return (
    <Card 
      className={`
        relative overflow-hidden transform transition-all duration-500
        hover:scale-105 hover:shadow-2xl
        ${hoveredCard === image.id ? 'rotate-y-180' : ''}
      `}
      onMouseEnter={() => setHoveredCard(image.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className="absolute top-2 right-2 z-10 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          variant="destructive"
          size="icon"
          className="transform hover:scale-110"
          onClick={() => onDelete(image.id)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="aspect-video">
        <img 
          src={image.url} 
          alt={image.caption}
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-4 bg-gradient-to-b from-transparent to-gray-50">
        <p className="text-sm font-medium text-sdblue mb-2">{image.caption}</p>
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onToggleHome(image.id)}
            className={`text-xs ${image.showOnHome ? 'bg-sdblue text-white' : ''}`}
          >
            {image.showOnHome ? 'Remove from Home' : 'Show on Home'}
          </Button>
        </div>
      </div>
    </Card>
  );
};
