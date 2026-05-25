import { Search, Bell, Mail } from "lucide-react";
import { UserNav } from "./user-nav";

export function Header() {
  return (
    <header className="h-16 border-b border-gray-200 bg-white/80 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-20">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Buscar influencers, campañas o voluntarios..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100/50 border-transparent border focus:bg-white focus:border-green-100 rounded-xl text-sm outline-none transition-all"
          />
        </div>
      </div>

      <div className="flex items-center space-x-5">
        <div className="flex items-center space-x-2 text-gray-400 border-r pr-5">
          <button className="p-2 hover:bg-gray-50 hover:text-gray-600 rounded-full transition-all">
            <Mail size={20} />
          </button>
          <button className="p-2 hover:bg-gray-50 hover:text-gray-600 rounded-full transition-all relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </div>
        <UserNav />
      </div>
    </header>
  );
}