import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

interface Teacher {
  id: number;
  name: string;
  image: string;
}

export const TEACHERS_DATA = [
  {
    id: 1,
    name: "Abid Ali",
    image: "/Teachers/Abid Ali.JPG"
  },
  {
    id: 2,
    name: "Anamika Mishra",
    image: "/Teachers/Anamika Mishra.JPG"
  },
  {
    id: 3,
    name: "Aviriti Srivastav",
    image: "/Teachers/Aviriti.JPG"
  },
  {
    id: 4,
    name: "Jagriti Solanki",
    image: "/Teachers/Jagriti Solanki.JPG"
  },
  {
    id: 5,
    name: "Jaya Singh",
    image: "/Teachers/Jaya Singh.JPG"
  },
  {
    id: 6,
    name: "JP Shukla",
    image: "/Teachers/JP Shukla.JPG"
  },
  {
    id: 7,
    name: "Karuna Singh",
    image: "/Teachers/Karuna Singh.JPG"
  },
  {
    id: 8,
    name: "KM Pandey",
    image: "/Teachers/KM Pandey.jpeg"
  },
  {
    id: 9,
    name: "Madhav Tripathi",
    image: "/Teachers/Madhav Tripathi.jpeg"
  },
  {
    id: 10,
    name: "Mamta Tiwari",
    image: "/Teachers/Mamta Tiwari.JPG"
  },
  {
    id: 11,
    name: "Muskan Gupta",
    image: "/Teachers/Muskan Gupta.JPG"
  },
  {
    id: 12,
    name: "Naveen Chaurasia",
    image: "/Teachers/Naveen Chaurasia.jpeg"
  },
  {
    id: 13,
    name: "Ashok Nigam",
    image: "/Teachers/Nigam.jpg"
  },
  {
    id: 14,
    name: "Ruby Srivastav",
    image: "/Teachers/Ruby Srivastav.JPG"
  },
  {
    id: 15,
    name: "Vishal Rai",
    image: "/Teachers/Vishal Rai.JPG"
  },
  {
    id: 16,
    name: "Satya Prakash Yadav",
    image: "/Teachers/Satya Prakash Yadav.png"
  }
];

export const TeachersSection = () => {
  const navigate = useNavigate();
  const [teachers] = useState<Teacher[]>(TEACHERS_DATA);

  // Create three sets for seamless infinite scroll
  const displayTeachers = [...teachers, ...teachers, ...teachers];

  return (
    <section className="py-20 bg-gradient-to-br from-[#E5DEFF] to-[#FDE1D3] overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-12 animate-text-shimmer bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#8B5CF6] bg-clip-text text-transparent">
        Our Expert Teachers
      </h2>
      
      <div className="teachers-scroll-container">
        <div className="teachers-scroll">
          {displayTeachers.map((teacher, index) => (
            <div
              key={`${teacher.id}-${index}`}
              className="flex-none w-[250px] md:w-[250px] px-3 cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/teachers')}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 hover:shadow-xl">
                <div className="relative w-36 h-36 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] rounded-full animate-pulse"></div>
                  <img 
                    src={teacher.image} 
                    alt={teacher.name}
                    className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full teacher-circle-image"
                    loading={index < 6 ? "eager" : "lazy"}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
                    {teacher.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Button
          onClick={() => navigate('/teachers')}
          className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-white px-8 py-3 text-lg rounded-full hover:opacity-90 transform transition-all duration-300 hover:scale-105 shadow-lg"
        >
          View All Teachers
        </Button>
      </div>
    </section>
  );
};
