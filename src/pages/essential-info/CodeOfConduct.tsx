import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield, Book, Bell, Users, Award, AlertTriangle, BookOpen, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

export default function CodeOfConduct() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const conductRules = [
    {
      category: "General Rules",
      icon: Shield,
      color: "purple",
      rules: [
        "Every child has to follow all the disciplinary rules of the institution to maintain the school decorum",
        "The Child should attend the school regularly & punctually. Students are expected to be at school ten minutes before school starts",
        "Students whose attendance is below 75% of the working days are ordinarily not eligible to appear in the Annual Examination",
        "No student must be seen wandering here and there after school in school uniform",
        "In campus, Students are restricted to converse in English"
      ]
    },
    {
      category: "Academic Conduct",
      icon: Book,
      color: "blue",
      rules: [
        "Diary should be regularly checked and reports, home works assigned by the teachers there of, be positively signed by the parents",
        "Diary must be brought to school everyday & followed in details",
        "Wards must come to school with lesson well prepared and with completed home work",
        "Children found using unfair means in tests or examinations, will automatically merit a zero",
        "It is compulsory for students to participate in school functions, sports, cultural and literary activities"
      ]
    },
    {
      category: "Discipline & Conduct",
      icon: Bell,
      color: "green",
      rules: [
        "Students must not roam around in the verandah and nearby the class room during the class hours",
        "Students are strictly forbidden to use bike for their conveyance",
        "Students should come to school in neat, clean, tidy & proper school uniform",
        "Wrist watches are not allowed upto class Vth",
        "Those arriving after the assembly will have to take the permission of the principal before entering the class"
      ]
    },
    {
      category: "Parent's Responsibilities",
      icon: Users,
      color: "orange",
      rules: [
        "Parents are expected to participate regularly in school functions or meetings whenever they are invited",
        "Parents are requested to collect progress reports of their wards regularly on the dates announced by the school after every examination",
        "Parents and other persons are not allowed to see their children or teachers during school hours without the permission of the Principal",
        "Remarks made in the school diary may kindly be acknowledged and countersigned regularly by the parents"
      ]
    },
    {
      category: "Prohibited Items",
      icon: AlertTriangle,
      color: "red",
      rules: [
        "Students are prohibited to bring money, blades, calculator, camera, transistor, video games, mobile phone etc. in school",
        "No jewellery is to be worn except a wristwatch. Nails should be trimmed properly",
        "No collection of money for any purpose what so ever may be made without the permission of the principal",
        "Filthy language towards anyone is seriously objectionable"
      ]
    }
  ];

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 font-sans text-white"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.1) 0%, rgba(0, 0, 0, 0) 50%)`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Navigation />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-1/3 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-96 -right-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-32 left-16 w-72 h-72 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0% { transform: translateY(0px) }
          50% { transform: translateY(-10px) }
          100% { transform: translateY(0px) }
        }
        @keyframes blob {
          0% { transform: scale(1) translate(0px, 0px); }
          33% { transform: scale(1.1) translate(30px, -50px); }
          66% { transform: scale(0.9) translate(-20px, 20px); }
          100% { transform: scale(1) translate(0px, 0px); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .glass-card {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
        .neomorphic {
          box-shadow: 
            5px 5px 10px rgba(0, 0, 0, 0.3),
            -5px -5px 10px rgba(255, 255, 255, 0.05);
        }
        .neomorphic-inset {
          box-shadow: 
            inset 2px 2px 5px rgba(0, 0, 0, 0.3),
            inset -2px -2px 5px rgba(255, 255, 255, 0.05);
        }
      `}} />
      
      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigate(-1)}
              className="hover:bg-gray-100"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-4xl font-bold text-sdblue">Code of Conduct</h1>
          </div>
          
          {/* Hero Section */}
          <div 
            className="relative h-[400px] rounded-2xl overflow-hidden mb-16 neomorphic transform transition-all hover:scale-[1.01] duration-500 ease-out"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`
            }}
          >
            <img 
              src="https://plus.unsplash.com/premium_photo-1661549683908-b11e9855c469?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cnVsZXN8ZW58MHx8MHx8fDA%3D"
              alt="Code of Conduct"
              className="w-full h-full object-cover transform transition-all duration-1000 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 text-white">
              <h2 className="text-4xl font-bold mb-3 leading-tight">Student Guidelines</h2>
              <p className="text-purple-100 text-xl max-w-md">Building character through discipline and fostering a culture of excellence</p>
            </div>
          </div>

          {/* Rules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {conductRules.map((section, index) => {
              const gradients = {
                purple: 'from-purple-100/90 to-purple-200/90',
                blue: 'from-blue-100/90 to-blue-200/90',
                green: 'from-green-100/90 to-green-200/90',
                orange: 'from-orange-100/90 to-orange-200/90',
                red: 'from-red-100/90 to-red-200/90',
              }[section.color];
              
              const borderColors = {
                purple: 'border-purple-500/30',
                blue: 'border-blue-500/30',
                green: 'border-green-500/30',
                orange: 'border-orange-500/30',
                red: 'border-red-500/30',
              }[section.color];
              
              const iconColors = {
                purple: 'text-purple-600',
                blue: 'text-blue-600',
                green: 'text-green-600',
                orange: 'text-orange-600',
                red: 'text-red-600',
              }[section.color];
              
              const glowColors = {
                purple: 'purple',
                blue: 'blue',
                green: 'green',
                orange: 'orange',
                red: 'red',
              }[section.color];

              return (
                <div 
                  key={index} 
                  className={`glass-card p-8 rounded-2xl border border-gray-300 ${borderColors} transition-all duration-500 
                    hover:scale-[1.02] bg-gradient-to-br ${gradients} backdrop-blur-md neomorphic flex flex-col h-full`}
                  style={{
                    transform: `translateY(${Math.sin((scrollY + index * 100) / 300) * 7}px)`,
                  }}
                >
                  <div className="flex items-center gap-5 mb-6 pb-6 border-b border-gray-400/50">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center neomorphic
                      bg-gradient-to-br ${gradients} relative group overflow-hidden`}>
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at center, ${glowColors}, transparent 70%)`,
                          filter: 'blur(5px)'
                        }}
                      ></div>
                      <section.icon className={`h-8 w-8 ${iconColors} relative z-10`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{section.category}</h3>
                  </div>
                  <ul className="space-y-4 flex-grow">
                    {section.rules.map((rule, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-800">
                        <span className={`${iconColors} text-lg mt-1`}>●</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Guidelines Section */}
          <div 
            className="glass-card bg-gray-100/90 backdrop-blur-md rounded-2xl border border-gray-300 neomorphic p-8 mb-16 
              transition-all duration-500 hover:scale-[1.01]"
            style={{
              transform: `translateY(${scrollY * 0.03}px)`
            }}
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-4 pb-6 border-b border-gray-400/50 text-gray-900">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-200 rounded-xl neomorphic flex items-center justify-center">
                <Award className="h-6 w-6 text-pink-600" />
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">Important Guidelines</span>
            </h2>
            <div className="space-y-6">
              <p className="text-gray-800 text-lg font-medium">
                All students should adhere to the following additional guidelines:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-800">
                <div className="p-4 rounded-xl neomorphic-inset bg-gradient-to-br from-gray-200/80 to-gray-100/80 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start gap-3">
                    <span className="text-pink-600 text-lg mt-1">●</span>
                    <span>Every student must be present on the re-opening day of the school after each vacation/holiday</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl neomorphic-inset bg-gradient-to-br from-gray-200/80 to-gray-100/80 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start gap-3">
                    <span className="text-pink-600 text-lg mt-1">●</span>
                    <span>Wards found writing, scratching or damaging school property will be penalised</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl neomorphic-inset bg-gradient-to-br from-gray-200/80 to-gray-100/80 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start gap-3">
                    <span className="text-pink-600 text-lg mt-1">●</span>
                    <span>The school authorities will not be responsible in any way for the students after school hours</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl neomorphic-inset bg-gradient-to-br from-gray-200/80 to-gray-100/80 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start gap-3">
                    <span className="text-pink-600 text-lg mt-1">●</span>
                    <span>Students should keep their bicycles properly locked in the school cycle stand</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl neomorphic-inset bg-gradient-to-br from-gray-200/80 to-gray-100/80 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start gap-3">
                    <span className="text-pink-600 text-lg mt-1">●</span>
                    <span>The name of any student who is continuously absent for 10 days without any information shall be struck off</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl neomorphic-inset bg-gradient-to-br from-gray-200/80 to-gray-100/80 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start gap-3">
                    <span className="text-pink-600 text-lg mt-1">●</span>
                    <span>No student can leave the school premises during school hours without permission</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl neomorphic-inset bg-gradient-to-br from-gray-200/80 to-gray-100/80 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start gap-3">
                    <span className="text-pink-600 text-lg mt-1">●</span>
                    <span>Criticism of other students, teachers or the school in front of children should be avoided</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl neomorphic-inset bg-gradient-to-br from-gray-200/80 to-gray-100/80 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start gap-3">
                    <span className="text-pink-600 text-lg mt-1">●</span>
                    <span>Irregular attendance, non-cooperation, or any offense against discipline may result in dismissal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* School's Prerogative Section */}
          <div 
            className="glass-card bg-gradient-to-br from-purple-100/90 to-purple-200/90 backdrop-blur-md rounded-2xl border 
              border-purple-300 p-8 neomorphic transition-all duration-500 hover:scale-[1.01]"
            style={{
              transform: `translateY(${scrollY * 0.02}px)`
            }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              School's Prerogative
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl neomorphic-inset bg-gradient-to-br from-purple-200/80 to-purple-100/80 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-3 text-gray-800">
                  <span className="text-purple-600 text-lg mt-1">●</span>
                  <span>The school reserves the right to modify these rules as needed</span>
                </div>
              </div>
              <div className="p-4 rounded-xl neomorphic-inset bg-gradient-to-br from-purple-200/80 to-purple-100/80 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-3 text-gray-800">
                  <span className="text-purple-600 text-lg mt-1">●</span>
                  <span>The school does not accept responsibility for the loss of personal items</span>
                </div>
              </div>
              <div className="p-4 rounded-xl neomorphic-inset bg-gradient-to-br from-purple-200/80 to-purple-100/80 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-3 text-gray-800">
                  <span className="text-purple-600 text-lg mt-1">●</span>
                  <span>If he/she comes late, he/she may be sent back home</span>
                </div>
              </div>
              <div className="p-4 rounded-xl neomorphic-inset bg-gradient-to-br from-purple-200/80 to-purple-100/80 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-3 text-gray-800">
                  <span className="text-purple-600 text-lg mt-1">●</span>
                  <span>Strict action will be taken against those who disobey the rules</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 