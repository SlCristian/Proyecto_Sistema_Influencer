import { Pencil, Mail, BarChart3, UserCheck } from "lucide-react";
import { Volunteer } from "../types";

interface VolunteerCardProps {
  volunteer: Volunteer;
  onEdit: (v: Volunteer) => void;
}

export function VolunteerCard({ volunteer, onEdit }: VolunteerCardProps) {
  const statusColors = {
    Disponible: "text-green-600 bg-green-50",
    Saturado: "text-red-600 bg-red-50",
    Inactivo: "text-gray-500 bg-gray-50",
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <img src={volunteer.avatarUrl} className="w-12 h-12 rounded-full object-cover" alt="" />
          <div>
            <h3 className="font-bold text-gray-900 leading-tight">{volunteer.name}</h3>
            <p className="text-xs text-gray-500">{volunteer.email}</p>
          </div>
        </div>
        <button onClick={() => onEdit(volunteer)} className="p-2 text-gray-400 hover:text-[#053d2b] hover:bg-green-50 rounded-lg transition-colors">
          <Pencil size={16} />
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Especialidad:</span>
          <span className="px-2 py-0.5 bg-green-100 text-[#053d2b] rounded-md text-[10px] font-bold uppercase">
            {volunteer.specialty}
          </span>
        </div>

        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Estado:</span>
          <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${statusColors[volunteer.status]}`}>
            ● {volunteer.status}
          </span>
        </div>

        <div className="pt-2 border-t border-gray-50">
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-gray-400">Disponibilidad</span>
            <span className="font-bold text-gray-700">{volunteer.disability}%</span>
          </div>
          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full ${volunteer.disability > 70 ? 'bg-green-500' : 'bg-yellow-500'}`}
              style={{ width: `${volunteer.disability}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
            <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase font-bold">Asignados</span>
                <span className="text-sm font-bold text-gray-700">{volunteer.assignedInfluencers} Influencers</span>
            </div>
            {/* Simulación de gráfico de rendimiento simple */}
            <div className="flex items-end space-x-0.5 h-6">
                {[4, 7, 5, 8, 6].map((h, i) => (
                    <div key={i} className="w-1 bg-green-200 rounded-t-sm" style={{ height: `${h * 10}%` }} />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}