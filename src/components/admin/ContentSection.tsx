
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import type { BeyondAcademicContent, EssentialInfoContent } from '@/types/content';

interface ContentSectionProps {
  content: (BeyondAcademicContent | EssentialInfoContent)[];
  type: 'beyond' | 'essential';
  onImageUpload: (file: File, section: string, contentId: string, contentType: 'beyond' | 'essential') => Promise<void>;
  onContentUpdate: (id: string, content: string, type: 'beyond' | 'essential') => Promise<void>;
}

export function ContentSection({ content, type, onImageUpload, onContentUpdate }: ContentSectionProps) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">
        {type === 'beyond' ? 'Manage Beyond Academic Content' : 'Manage Essential Information'}
      </h2>
      <div className="space-y-6">
        {content.map((item) => (
          <div key={item.id} className="space-y-4">
            <h3 className="font-semibold">{item.section_name}</h3>
            {item.image_url && (
              <img 
                src={item.image_url} 
                alt={item.section_name}
                className="w-32 h-32 object-cover rounded-lg"
              />
            )}
            <div className="flex gap-4">
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    onImageUpload(file, item.section_name, item.id, type);
                  }
                }}
              />
            </div>
            <textarea 
              className="w-full p-2 border rounded"
              rows={4}
              value={item.content}
              onChange={(e) => onContentUpdate(item.id, e.target.value, type)}
            />
          </div>
        ))}
      </div>
    </Card>
  );
}
