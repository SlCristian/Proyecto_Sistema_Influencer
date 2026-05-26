"use client";
import { Users, UserPlus, FileOutput, CheckCircle } from "lucide-react";
import { VolunteerCard } from "@/features/volunteers/components/volunteer-card";

const mockVolunteers = [
  { id: '1', name: 'Mateo Rivera', email: 'm.rivera@impact.org', avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg', specialty: 'Reforestación', status: 'Disponible', disability: 85, assignedInfluencers: 12, performance: [5, 8, 6] },
  { id: '2', name: 'Elena Salas', email: 'e.salas@eco.pe', avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg', specialty: 'Educación', status: 'Saturado', disability: 10, assignedInfluencers: 28, performance: [9, 9, 8] },
  { id: '3', name: 'Carlos Pardo', email: 'c.pardo@impact.org', avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg', specialty: 'Medio Ambiente', status: 'Inactivo', disability: 0, assignedInfluencers: 0, performance: [0, 0, 0] },
];

export default function VolunteersPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gestión de Voluntarios</h1>
          <p className="text-sm text-gray-500">Administra disponibilidad, asignaciones y rendimiento del equipo.</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 border px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all">
            <FileOutput size={16} />
            <span>Exportar</span>
          </button>
          <button className="flex items-center space-x-2 bg-[#053d2b] text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#064e37] shadow-lg shadow-green-900/20 transition-all">
            <UserPlus size={16} />
            <span>Nuevo voluntario</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-[10px] uppercase font-bold text-gray-400">Total Voluntarios</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">124</p>
            <span className="text-[10px] text-green-600 font-bold">↗ +8% este mes</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-[10px] uppercase font-bold text-gray-400">Disponibles</p>
            <p className="text-2xl font-bold text-gray-900 mt-1 text-green-600">42</p>
            <span className="text-[10px] text-gray-400">34% del total</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-[10px] uppercase font-bold text-gray-400">Saturados</p>
            <p className="text-2xl font-bold text-gray-900 mt-1 text-red-600">12</p>
            <span className="text-[10px] text-gray-400">Requieren balance</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-[10px] uppercase font-bold text-gray-400">Influencers Asig.</p>
            <p className="text-2xl font-bold text-gray-900 mt-1 text-blue-600">850</p>
            <span className="text-[10px] text-gray-400">Promedio 6.8 p/v</span>
        </div>
      </div>

      {/* Grid de Voluntarios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockVolunteers.map((v) => (
          <VolunteerCard key={v.id} volunteer={v} onEdit={(vol) => alert(`Editando a ${vol.name} uu`)} />
        ))}
      </div>
    </div>
  );
}