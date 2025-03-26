import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const phoneNumber = "+918881110745";
  const message = "Hello! I'm interested in learning more about SD Academy.";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 p-3 bg-[#25D366] text-white rounded-full shadow-lg 
                hover:bg-[#1fba59] transition-all duration-300 transform hover:scale-110 
                animate-bounce-slow group"
      aria-label="Contact on WhatsApp"
    >
      <div className="absolute -top-10 right-0 bg-white px-4 py-2 rounded-lg shadow-lg 
                    text-gray-700 text-sm whitespace-nowrap opacity-0 invisible 
                    group-hover:opacity-100 group-hover:visible transition-all duration-300 
                    transform group-hover:translate-y-0 translate-y-2">
        Chat with us on WhatsApp
      </div>
      <svg 
        viewBox="0 0 32 32" 
        className="w-7 h-7 fill-current"
      >
        <path d="M16 2C8.28 2 2 8.28 2 16C2 18.8587 2.8797 21.4904 4.4037 23.6667L2.0313 29.9687L8.4896 27.6354C10.5945 29.0077 13.0758 29.8333 15.7917 29.9896L16 30C23.72 30 30 23.72 30 16C30 8.28 23.72 2 16 2ZM23.2083 21.1667C22.9167 21.9167 21.5833 22.5833 20.6667 22.75C19.9167 22.9167 18.9167 23 17.75 22.5833C17.0833 22.3333 16.2083 22 15.0833 21.4167C11.8333 19.8333 9.66667 16.5833 9.5 16.4167C9.33333 16.25 8 14.4167 8 12.5C8 10.5833 9 9.66667 9.33333 9.25C9.66667 8.83333 10.0833 8.75 10.3333 8.75C10.5833 8.75 10.8333 8.75 11.0833 8.75C11.3333 8.75 11.6667 8.66667 12 9.5C12.3333 10.3333 13.1667 12.25 13.25 12.4167C13.3333 12.5833 13.3333 12.8333 13.25 13.0833C13.1667 13.3333 13.0833 13.5833 12.8333 13.8333C12.5833 14.0833 12.3333 14.4167 12.1667 14.5833C11.9167 14.8333 11.6667 15.0833 11.9167 15.5C12.1667 15.9167 13 17.3333 14.3333 18.5C16.0833 20 17.5833 20.4167 18 20.5833C18.4167 20.75 18.6667 20.75 18.9167 20.5C19.1667 20.25 20 19.3333 20.3333 18.9167C20.6667 18.5 21 18.5833 21.4167 18.75C21.8333 18.9167 23.75 19.8333 24.1667 20.0833C24.5833 20.3333 24.8333 20.4167 24.9167 20.5833C25 20.8333 25 21.5833 23.2083 21.1667Z"/>
      </svg>
    </button>
  );
};
