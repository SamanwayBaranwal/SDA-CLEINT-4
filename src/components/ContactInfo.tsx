import { MapPin, Phone, Mail } from 'lucide-react';
import { ADDRESSES, PHONE_NUMBERS, CONTACT_EMAILS, EMAIL_PURPOSES } from '@/constants/contact';

export const ContactInfo = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
      
      {/* Address */}
      <div className="flex items-start gap-2">
        <MapPin className="w-5 h-5 text-sdblue mt-1" />
        <div>
          <h3 className="font-semibold">Our Branches</h3>
          {ADDRESSES.map((address, index) => (
            <p key={index} className="text-gray-700">{address}</p>
          ))}
        </div>
      </div>

      {/* Phone Numbers */}
      <div className="flex items-start gap-2">
        <Phone className="w-5 h-5 text-sdblue mt-1" />
        <p className="text-gray-700">
          {PHONE_NUMBERS.join(', ')}
        </p>
      </div>

      {/* Email */}
      {Object.entries(CONTACT_EMAILS).map(([key, email]) => (
        <div key={key} className="flex items-start gap-2">
          <Mail className="w-5 h-5 text-sdblue mt-1" />
          <div>
            <h3 className="font-semibold">{EMAIL_PURPOSES[key as keyof typeof EMAIL_PURPOSES]}</h3>
            <a 
              href={`mailto:${email}`}
              className="text-gray-700 hover:text-sdblue"
            >
              {email}
            </a>
          </div>
        </div>
      ))}

      {/* Map */}
      <div className="mt-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.3446543788367!2d83.35655827499171!3d26.89031447679721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a0c332939%3A0x2d3146a0c0884722!2sS.D.%20ACADEMY!5e0!3m2!1sen!2sin!4v1708612805399!5m2!1sen!2sin"
          width="100%"
          height="250"
          style={{ border: 0, borderRadius: '0.5rem' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};