export const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-full w-full bg-gray-800">
      <div className="relative">
        <div className="w-20 h-20 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-b-4 border-purple-500 rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
      </div>
      <p className="text-white text-lg font-medium ml-4">Loading images...</p>
    </div>
  );
};
