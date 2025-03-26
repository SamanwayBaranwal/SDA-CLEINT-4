import { useEffect } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { Footer } from '@/components/Footer';
import { Heart, Activity, Stethoscope, Utensils, Dumbbell, Clipboard, Users } from 'lucide-react';

export const HealthPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Health Facilities | SD Academy';
  }, []);

  const healthFeatures = [
    {
      icon: <Heart className="w-10 h-10 text-blue-600" />,
      title: "Medical Room",
      description: "Fully equipped medical room with essential first aid supplies and basic medical equipment."
    },
    {
      icon: <Stethoscope className="w-10 h-10 text-blue-600" />,
      title: "Healthcare Staff",
      description: "Qualified healthcare professionals available during school hours to attend to student needs."
    },
    {
      icon: <Activity className="w-10 h-10 text-blue-600" />,
      title: "Health Monitoring",
      description: "Regular health check-ups and monitoring for all students throughout the academic year."
    },
    {
      icon: <Utensils className="w-10 h-10 text-blue-600" />,
      title: "Nutrition Guidance",
      description: "Expert advice on balanced nutrition and healthy eating habits for students."
    },
    {
      icon: <Dumbbell className="w-10 h-10 text-blue-600" />,
      title: "Physical Fitness",
      description: "Comprehensive physical education program to promote fitness and well-being."
    },
    {
      icon: <Clipboard className="w-10 h-10 text-blue-600" />,
      title: "Health Records",
      description: "Detailed health records maintained for each student with confidentiality."
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: "Health Education",
      description: "Regular workshops and sessions on health awareness and preventive healthcare."
    }
  ];

  const healthPrograms = [
    "Annual medical check-ups",
    "Dental health camps",
    "Vision screening",
    "Immunization awareness",
    "Mental health support",
    "Hygiene education",
    "First aid training"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader 
        title="Health Facilities" 
        subtitle="Nurturing healthy minds and bodies" 
        backgroundImage="/images/health-bg.jpg"
      />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#003049]">
            Our Health Infrastructure
          </h2>
          
          <p className="text-lg mb-8">
            At SD Academy, we believe that good health is essential for effective learning and overall 
            development. Our comprehensive health facilities and programs are designed to ensure the 
            physical and mental well-being of all our students.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {healthFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-[#003049]">{feature.title}</h3>
                <p className="text-gray-700 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-[#003049]">Health Programs</h3>
            <p className="text-lg mb-4">
              Throughout the academic year, we organize various health programs to promote wellness:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {healthPrograms.map((program, index) => (
                <div key={index} className="flex items-center p-3 bg-white rounded-md shadow-sm">
                  <span className="text-blue-500 mr-3">•</span>
                  <span className="text-gray-800">{program}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-[#003049]">Our Health Philosophy</h3>
            <p className="text-lg">
              We believe in a holistic approach to health that encompasses physical, mental, and emotional 
              well-being. By providing comprehensive health facilities and programs, we aim to instill 
              healthy habits and awareness that will benefit our students throughout their lives.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HealthPage;
