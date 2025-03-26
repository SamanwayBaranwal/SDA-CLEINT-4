import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Award, Users, Trophy, BookOpen, Star, Medal, Target, Flag } from "lucide-react";

const SuccessSaga = () => {
  const navigate = useNavigate();

  const achievements = [
    {
      icon: Award,
      number: "25+",
      label: "Years of Excellence",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      number: "10,000+",
      label: "Alumni Network",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Trophy,
      number: "500+",
      label: "Awards & Recognition",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: BookOpen,
      number: "100%",
      label: "Board Results",
      color: "from-green-500 to-green-600"
    }
  ];

  const milestones = [
    {
      year: "2005",
      title: "Foundation",
      description: "S.D. Academy was established with a vision to provide quality education.",
      icon: Flag
    },
    {
      year: "2010",
      title: "First Batch Graduation",
      description: "Our first batch of students graduated with outstanding results, setting a legacy of excellence.",
      icon: Star
    },
    {
      year: "2012",
      title: "Infrastructure Expansion",
      description: "Major expansion of school facilities, including modern classrooms, a library, and science labs.",
      icon: Target
    },
    {
      year: "2016",
      title: "Academic Recognition",
      description: "Received the \"Excellence in Education\" Award for consistent high-performing students.",
      icon: Medal
    },
    {
      year: "2018",
      title: "Digital Transformation",
      description: "Introduction of smart classrooms, e-learning modules, and tech-driven teaching methods.",
      icon: BookOpen
    },
    {
      year: "2025",
      title: "20 Years of Excellence",
      description: "Celebrating two decades of commitment to quality education and student success.",
      icon: Trophy
    }
  ];

  const recentAchievements = [
    "100% pass percentage in Board Examinations",
    "State-level Sports Championships",
    "National Science Olympiad Winners",
    "Best School Infrastructure Award",
    "Excellence in Co-curricular Activities",
    "Community Service Recognition"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate(-1)}
            className="hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-4xl font-bold text-sdblue">Success Saga</h1>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-16 group">
          <img 
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1200"
            alt="Success Journey" 
            className="w-full h-[400px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Journey of Excellence</h2>
              <p className="text-lg text-blue-50 max-w-2xl">
                A legacy of success built on dedication, innovation, and commitment to 
                educational excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((stat, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${stat.color} rounded-xl p-1`}>
                <div className="bg-white rounded-lg p-6 text-center hover:bg-opacity-95 transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-gray-800" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-sdblue mb-8 text-center">Our Milestones</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="relative flex items-start gap-6 group"
              >
                <div className="w-20 h-20 flex-shrink-0 bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] rounded-2xl flex flex-col items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <milestone.icon className="w-6 h-6 mb-1" />
                  <span className="text-sm font-bold">{milestone.year}</span>
                </div>
                <div className="flex-grow bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="bg-gradient-to-br from-[#E5DEFF] to-[#FDE1D3] rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-sdblue mb-8 text-center">Recent Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentAchievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700">{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Be Part of Our Success Story</h3>
          <p className="text-blue-50 mb-8 max-w-2xl mx-auto">
            Join S.D. Academy and become part of our legacy of excellence and achievement.
          </p>
          <Button
            onClick={() => navigate('/enquiry')}
            size="lg"
            className="bg-white text-sdblue hover:bg-blue-50"
          >
            Enquire Now
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SuccessSaga; 