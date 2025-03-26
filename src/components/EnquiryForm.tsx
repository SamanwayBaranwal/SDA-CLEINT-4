import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { ADDRESSES, PHONE_NUMBERS, CONTACT_EMAILS, EMAIL_PURPOSES } from '@/constants/contact';

export const EnquiryForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    enquiryType: "",
    name: "",
    email: "",
    phone: "",
    fullAddress: "",
    message: ""
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formcarry.com/s/jpFEOVCmLiA", {
        method: 'POST',
        headers: { 
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.code === 200) {
        toast({
          title: "Enquiry Submitted Successfully!",
          description: "We'll get back to you soon.",
          duration: 3000,
        });
        // Reset form
        setFormData({
          enquiryType: "",
          name: "",
          email: "",
          phone: "",
          fullAddress: "",
          message: ""
        });
      } else {
        setError(data.message || "Something went wrong. Please try again.");
        toast({
          title: "Submission Failed",
          description: data.message || "Something went wrong. Please try again.",
          duration: 3000,
          variant: "destructive"
        });
      }
    } catch (error: any) {
      setError(error.message || "Failed to submit form. Please try again.");
      toast({
        title: "Submission Failed",
        description: error.message || "Failed to submit form. Please try again.",
        duration: 3000,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 w-full max-w-7xl mx-auto">
      {/* Contact Information Section */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-sdblue mb-6">Contact Information</h2>
        
        <div className="space-y-6">
          {/* Addresses */}
          <div className="space-y-4">
            <div className="flex items-start gap-3 group">
              <MapPin className="w-5 h-5 text-sdblue mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-semibold text-gray-800">Our Branches</h3>
                {ADDRESSES.map((address, index) => (
                  <p key={index} className="text-gray-600">{address}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="flex items-start gap-3 group">
            <Phone className="w-5 h-5 text-sdblue mt-1 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="font-semibold text-gray-800">Phone Numbers</h3>
              <p className="text-gray-600">{PHONE_NUMBERS.join(', ')}</p>
            </div>
          </div>

          {/* Email Addresses */}
          <div className="space-y-3">
            {Object.entries(CONTACT_EMAILS).map(([key, email]) => (
              <div key={key} className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-sdblue group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold text-gray-800">{EMAIL_PURPOSES[key as keyof typeof EMAIL_PURPOSES]}</h3>
                  <a 
                    href={`mailto:${email}`}
                    className="text-gray-600 hover:text-sdblue transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="mt-8 rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.5956576869307!2d83.3814157752671!3d26.789155976721045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145015195c359%3A0x477ad60165759ca3!2sS%20D%20ACADEMY%20%26%20TENDERCARE%20PLAYWAY%20RAPTINAGAR%20GORAKHPUR!5e0!3m2!1sen!2sin!4v1738936171984!5m2!1sen!2sin"
            className="w-full h-[300px] md:h-[400px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Enquiry Form Section */}
      <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-sdblue mb-6">Send us a Message</h2>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <Select
          value={formData.enquiryType}
          onValueChange={(value) => setFormData({ ...formData, enquiryType: value })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Enquiry Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admission">Admission Enquiry</SelectItem>
            <SelectItem value="general">General Enquiry</SelectItem>
            <SelectItem value="academic">Academic Enquiry</SelectItem>
            <SelectItem value="transport">Transport Enquiry</SelectItem>
            <SelectItem value="fee">Fee Structure Enquiry</SelectItem>
          </SelectContent>
        </Select>

        <div className="space-y-5">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 rounded-lg"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />

          <Input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full px-4 py-2 rounded-lg"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />

          <Input
            type="text"
            name="fullAddress"
            placeholder="Full Address"
            className="w-full px-4 py-2 rounded-lg"
            value={formData.fullAddress}
            onChange={(e) => setFormData({ ...formData, fullAddress: e.target.value })}
            required
          />

          <Textarea
            name="message"
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded-lg min-h-[120px]"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-sdblue hover:bg-blue-700 text-white py-2 rounded-lg flex items-center justify-center gap-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
};
