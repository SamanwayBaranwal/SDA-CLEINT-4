import { useEffect } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { Footer } from '@/components/Footer';
import { Flask, Atom, Microscope, Thermometer, Droplets, Zap, Beaker } from 'lucide-react';

export const ScienceLabPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Science Lab | SD Academy';
  }, []);

  const labFeatures = [
    {
      icon: <Flask className="w-10 h-10 text-blue-600" />,
      title: "Chemistry Lab",
      description: "Fully equipped chemistry lab with modern apparatus and chemicals for practical experiments."
    },
    {
      icon: <Atom className="w-10 h-10 text-blue-600" />,
      title: "Physics Lab",
      description: "Advanced physics lab with equipment for mechanics, optics, electricity, and modern physics experiments."
    },
    {
      icon: <Microscope className="w-10 h-10 text-blue-600" />,
      title: "Biology Lab",
      description: "Comprehensive biology lab with microscopes, specimens, and models for detailed study."
    },
    {
      icon: <Thermometer className="w-10 h-10 text-blue-600" />,
      title: "Environmental Science",
      description: "Equipment for environmental monitoring and ecosystem studies."
    },
    {
      icon: <Droplets className="w-10 h-10 text-blue-600" />,
      title: "Water Testing",
      description: "Facilities for water quality analysis and environmental assessments."
    },
    {
      icon: <Zap className="w-10 h-10 text-blue-600" />,
      title: "Electrical Experiments",
      description: "Safe setups for conducting electrical and electronic experiments."
    },
    {
      icon: <Beaker className="w-10 h-10 text-blue-600" />,
      title: "Lab Safety",
      description: "Comprehensive safety equipment and protocols for secure experimentation."
    }
  ];

  const labBenefits = [
    "Hands-on learning experience",
    "Development of scientific inquiry skills",
    "Practical application of theoretical concepts",
    "Fostering curiosity and critical thinking",
    "Preparation for competitive exams",
    "Development of research aptitude",
    "Exposure to scientific methodology"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader 
        title="Science Laboratory" 
        subtitle="Where theory meets practical exploration" 
        backgroundImage="/images/science-lab-bg.jpg"
      />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#003049]">
            Our Science Laboratories
          </h2>
          
          <p className="text-lg mb-8">
            At SD Academy, we believe that science education is most effective when students can 
            experience scientific principles firsthand. Our state-of-the-art science laboratories 
            provide students with the opportunity to conduct experiments, make observations, and 
            develop critical thinking skills through practical applications.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {labFeatures.map((feature, index) => (
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
            <h3 className="text-2xl font-semibold mb-4 text-[#003049]">Benefits of Our Science Labs</h3>
            <p className="text-lg mb-4">
              Our science laboratories are designed to provide numerous educational benefits:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {labBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-3 bg-white rounded-md shadow-sm">
                  <span className="text-blue-500 mr-3">•</span>
                  <span className="text-gray-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-[#003049]">Our Science Vision</h3>
            <p className="text-lg">
              We aim to inspire the next generation of scientists, engineers, and innovators by 
              providing them with hands-on experience in our laboratories. By combining theoretical 
              knowledge with practical experimentation, we prepare our students for success in 
              scientific fields and foster a lifelong love of discovery and innovation.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ScienceLabPage;
