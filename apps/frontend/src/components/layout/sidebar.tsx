import { LayoutDashboard, Users, UserCheck, Calendar, MessageSquarePlus, LogOut } from "lucide-react";
import { NavItem } from "./nav-item";

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-gray-200 bg-white flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <div className="flex items-center space-x-2 text-[#053d2b]">
          <div className="bg-[#053d2b] p-1.5 rounded-lg text-white font-bold text-xs">SP</div>
          <span className="font-bold text-lg tracking-tight">Sembrando Perú</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-7">
        <div>
          <p className="px-2 mb-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">General</p>
          <div className="space-y-1">
            <NavItem icon={<LayoutDashboard size={20}/>} label="Dashboard" href="/dashboard" />
            <NavItem icon={<Users size={20}/>} label="Influencers" href="/influencers" />
          </div>
        </div>

        <div>
          <p className="px-2 mb-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Gestión</p>
          <div className="space-y-1">
            <NavItem icon={<MessageSquarePlus size={20}/>} label="Generar Prompt" href="/prompts" />
            <NavItem icon={<UserCheck size={20}/>} label="Voluntarios" href="/volunteers" />
            <NavItem icon={<Calendar size={20}/>} label="Agendar Disponibilidad" href="/agenda" />
          </div>
        </div>
      </nav>

      <div className="p-4 border-t border-gray-50">
        <button className="flex w-full items-center space-x-3 px-3 py-2 text-gray-400 hover:text-red-600 transition-colors text-sm font-medium">
          <LogOut size={20}/>
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
}