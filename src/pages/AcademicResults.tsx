import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { Trophy, Star, Award } from 'lucide-react';

const AcademicResults = () => {
  const { data: results, isLoading } = useQuery({
    queryKey: ['academic-results'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('academic_results')
        .select('*')
        .order('year', { ascending: false });

      if (error) throw error;
      return data;
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Navigation />
        <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-sdblue mb-4">Academic Excellence</h1>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our students consistently achieve outstanding results through dedication, 
              hard work, and the guidance of our experienced faculty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Skeleton className="w-full h-64" />
                <div className="p-6">
                  <Skeleton className="h-8 w-3/4 mb-4" />
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((j) => (
                      <Skeleton key={j} className="h-6 w-2/3" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-sdblue mb-4">Academic Excellence</h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our students consistently achieve outstanding results through dedication, 
            hard work, and the guidance of our experienced faculty.
          </p>
        </div>

        {/* Latest Results Highlight */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] p-6">
            <h2 className="text-2xl font-bold text-white">Class X Board Results 2024</h2>
            <p className="text-blue-50">Celebrating Outstanding Achievements</p>
          </div>
          
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative group">
                <img 
                  src="/Results/10thresult.jpg" 
                  alt="Class 10 Toppers" 
                  className="rounded-lg shadow-md w-full transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50/50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center gap-2 mb-4">
                    <Trophy className="w-6 h-6 text-yellow-500" />
                    <h3 className="text-xl font-semibold text-gray-800">School Toppers</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">First Position:</span>
                        <p>Niharika Singh - 94.4%</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Second Position:</span>
                        <p>Khushi Verma - 87.4%</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Third Position:</span>
                        <p>Prakhar Srivastava - 86.0%</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50/50 p-6 rounded-lg border border-purple-100">
                  <h4 className="font-semibold text-gray-800 mb-3">Subject-wise Achievements:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Hindi: 88 marks (Khushi Verma, Avinash Kumar)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>English: 94 marks (Niharika Singh, Prakhar Srivastava)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Science: 95 marks (Niharika Singh)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Social Science: 98 marks (Niharika Singh)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Mathematics: 86 marks (Niharika Singh)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50/50 p-6 rounded-lg border border-green-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-6 h-6 text-green-600" />
                    <h4 className="font-semibold text-gray-800">Key Highlights</h4>
                  </div>
                  <ul className="grid grid-cols-2 gap-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      100% Pass Rate
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Multiple students scoring above 85%
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Outstanding performance in core subjects
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Consistent academic excellence
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Historical Results Section */}
        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        ) : (
          <div className="grid gap-6">
            {results?.map((result) => (
              <div key={result.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={result.image_url || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"}
                  alt={`${result.class_name} Results`} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {result.class_name} Results {result.year}
                  </h2>
                  <div className="space-y-3">
                    <p className="text-gray-600">
                      • School Average: {result.school_average}%
                    </p>
                    <p className="text-gray-600">
                      • Number of Students: {result.total_students}
                    </p>
                    <p className="text-gray-600">
                      • Students Scoring Above 90%: {result.students_above_90}
                    </p>
                    <p className="text-gray-600">
                      • Top Scorer: {result.top_scorer_name} ({result.top_scorer_percentage}%)
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AcademicResults;

