import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const InfoHub = () => {
  const navigate = useNavigate();

  const handleInfoHubClick = () => {
    // Directly navigate to the essential-info page
    navigate('/essential-info');
    
    // Scroll to top
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 shadow-lg mx-auto max-w-4xl my-8 transform transition-all hover:scale-[1.01] duration-300">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
        <div className="flex items-center">
          <div className="bg-white rounded-full p-2 mr-3">
            <Info className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <h3 className="text-xl font-bold">ℹ️ Information Hub</h3>
            <p className="text-blue-100">Find all essential school info here</p>
          </div>
        </div>
        <Button 
          onClick={handleInfoHubClick}
          variant="secondary" 
          className="bg-white hover:bg-blue-50 text-blue-600 font-medium"
        >
          Explore Essential Info
        </Button>
      </div>
    </div>
  );
};
