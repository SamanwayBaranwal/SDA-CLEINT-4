
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function GeneralSection() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <Button 
        className="h-32 text-lg"
        onClick={() => navigate('/admin/gallery')}
      >
        Manage Gallery
      </Button>
      <Button 
        className="h-32 text-lg"
        onClick={() => navigate('/admin/teachers')}
      >
        Manage Teachers
      </Button>
      <Button 
        className="h-32 text-lg"
        onClick={() => navigate('/admin/testimonials')}
      >
        Manage Video Testimonials
      </Button>
    </div>
  );
}
