
import { Card } from '@/components/ui/card';
import { useState } from 'react';

interface EnquiryData {
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
}

export function EnquiriesSection() {
  const [enquiries] = useState<EnquiryData[]>(() => 
    JSON.parse(localStorage.getItem('enquiries') || '[]')
  );

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-sdblue mb-6">Recent Enquiries</h2>
      <div className="space-y-4">
        {enquiries.map((enquiry, index) => (
          <Card key={index} className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">{enquiry.name}</h3>
                <p className="text-gray-500">{enquiry.email}</p>
                <p className="text-gray-500">{enquiry.phone}</p>
              </div>
              <div>
                <p className="text-gray-700">{enquiry.message}</p>
                <p className="text-gray-400 text-sm mt-2">{enquiry.date}</p>
              </div>
            </div>
          </Card>
        ))}
        {enquiries.length === 0 && (
          <p className="text-center text-gray-500">No enquiries received yet</p>
        )}
      </div>
    </div>
  );
}
