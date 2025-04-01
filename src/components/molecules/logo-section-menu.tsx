import { GraduationCap } from "lucide-react";

function LogoSection() {
  return (
      <div className="p-4 border-b border-gray-700 flex items-center justify-center">
          <div className="bg-blue-500 rounded-lg p-2 flex items-center">
              <div className="relative">
                  <div className="bg-gray-200 rounded-full p-2">
                      <GraduationCap className="text-blue-600 h-6 w-6" />
                  </div>
                  <div className="absolute -top-1 -right-1 bg-blue-400 rounded-full p-1">
                      <div className="h-2 w-2 bg-white rounded-full"></div>
                  </div>
              </div>
              <span className="ml-2 text-white font-bold text-sm">
                  Rate My Class
              </span>
          </div>
      </div>
  );
}
export { LogoSection };