
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Teacher {
  id: number;
  name: string;
  subject: string;
  degree: string;
  image: string;
}

export default function AdminTeachers() {
  const navigate = useNavigate();
  const [image, setImage] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [degree, setDegree] = useState("");
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTeacher = {
      id: Date.now(),
      name,
      subject,
      degree,
      image: image ? URL.createObjectURL(image) : null
    };

    const existingTeachers = JSON.parse(localStorage.getItem('teachers') || '[]');
    localStorage.setItem('teachers', JSON.stringify([...existingTeachers, newTeacher]));

    toast({
      title: "Teacher Added",
      description: "The teacher has been successfully added to the database.",
    });

    // Reset form
    setImage(null);
    setName("");
    setSubject("");
    setDegree("");
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
          <h1 className="text-3xl font-bold text-sdblue">Manage Teachers</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Teacher Photo</label>
            <Input 
              type="file" 
              accept="image/*"
              onChange={handleImageChange}
              className="w-full"
              required
            />
            <Alert className="mt-2">
              <AlertDescription>
                Please upload photos in 1:1 aspect ratio for optimal display
              </AlertDescription>
            </Alert>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter teacher's name"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Subject</label>
            <Input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter subject"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Degree</label>
            <Input
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              placeholder="Enter academic degree"
              required
            />
          </div>
          
          <Button type="submit" className="w-full">Add Teacher</Button>
        </form>
      </div>
    </div>
  );
}
