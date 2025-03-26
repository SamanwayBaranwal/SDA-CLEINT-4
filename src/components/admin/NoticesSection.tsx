import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { FileText, Loader2 } from 'lucide-react';

interface Notice {
  id: number;
  title: string;
  pdfUrl: string;
  fileName: string;
  isNew?: boolean;
  createdAt?: number;
}

export function NoticesSection() {
  const [notices, setNotices] = useState<Notice[]>(() => 
    JSON.parse(localStorage.getItem('scrollingNotices') || '[]')
  );
  const [newNoticeTitle, setNewNoticeTitle] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = async () => {
    if (!selectedFile || !newNoticeTitle.trim()) {
      toast({
        title: "Error",
        description: "Please provide both a title and a PDF file",
        variant: "destructive"
      });
      return;
    }

    if (!selectedFile.type.includes('pdf')) {
      toast({
        title: "Error",
        description: "Please upload a PDF file",
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);

    try {
      // Convert file to base64
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = () => {
        const base64String = reader.result as string;
        
        // Create new notice
        const newNotice: Notice = {
          id: Date.now(),
          title: newNoticeTitle,
          pdfUrl: base64String,
          fileName: selectedFile.name,
          isNew: true,
          createdAt: Date.now()
        };

        // Update notices
        const updatedNotices = [newNotice, ...notices];
        setNotices(updatedNotices);
        localStorage.setItem('scrollingNotices', JSON.stringify(updatedNotices));

        // Reset form
        setNewNoticeTitle('');
        setSelectedFile(null);
        setIsUploading(false);

        toast({
          title: "Notice added",
          description: "The notice has been added successfully"
        });
      };
    } catch (error) {
      setIsUploading(false);
      toast({
        title: "Error",
        description: "Failed to upload PDF. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <Card className="p-6">
      <div className="grid gap-4">
        <Input
          placeholder="Enter notice title"
          value={newNoticeTitle}
          onChange={(e) => setNewNoticeTitle(e.target.value)}
        />
        <div className="grid gap-2">
          <Input
            type="file"
            accept=".pdf"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setSelectedFile(e.target.files[0]);
              }
            }}
          />
          {selectedFile && (
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <FileText size={16} />
              Selected: {selectedFile.name}
            </p>
          )}
        </div>
        <Button 
          onClick={handleFileUpload}
          disabled={isUploading || !selectedFile || !newNoticeTitle.trim()}
        >
          {isUploading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Uploading...
            </>
          ) : (
            'Add Notice'
          )}
        </Button>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-4">Current Notices</h3>
        <div className="space-y-2">
          {notices.map((notice) => (
            <div key={notice.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <FileText className="text-blue-500" size={20} />
                <div>
                  <span className="font-medium">{notice.title}</span>
                  <p className="text-sm text-gray-500">{notice.fileName}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    // Create a temporary link to download the PDF
                    const link = document.createElement('a');
                    link.href = notice.pdfUrl;
                    link.download = notice.fileName;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  Download
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => {
                    const updatedNotices = notices.filter(n => n.id !== notice.id);
                    setNotices(updatedNotices);
                    localStorage.setItem('scrollingNotices', JSON.stringify(updatedNotices));
                    toast({
                      title: "Notice deleted",
                      description: "The notice has been deleted successfully"
                    });
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
