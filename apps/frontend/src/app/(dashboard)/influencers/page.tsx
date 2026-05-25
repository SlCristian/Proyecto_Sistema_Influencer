import { InfluencerTable } from "@/features/influencers/components/influencer-table";
import { InfluencerFilters } from "@/features/influencers/components/influencer-filters";
import { FileInput, FileOutput, Users, Target, BotMessageSquare } from "lucide-react";

export default function InfluencersPage() {
  return (
    <div className="space-y-8">
      {/* Encabezado con Acciones */}
      <div className="flex items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gestión de Influencers</h1>
          <p className="text-sm text-gray-500 mt-1">Administra, valida y contacta influencers obtenidos mediante IA.</p>
        </div>
        <div className="flex items-center space-x-2 shrink-0">
          <button className="flex items-center space-x-2 border border-gray-200 text-gray-700 px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors shadow-xs">
            <FileInput size={16} className="text-gray-400"/>
            <span>Importar</span>
          </button>
          <button className="flex items-center space-x-2 border border-gray-200 text-gray-700 px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors shadow-xs">
            <FileOutput size={16} className="text-gray-400"/>
            <span>Exportar</span>
          </button>
        </div>
      </div>
      
      {/* Estadísticas de Resumen (Basadas en los placeholders que tenías) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard icon={<Users size={20}/>} label="Total Influencers" value="128" change="+12.5%" />
        <StatCard icon={<Target size={20}/>} label="Validados por Voluntarios" value="34" change="+5.2%" />
        <StatCard icon={<BotMessageSquare size={20}/>} label="Score IA Promedio" value="84" />
      </div>

      {/* Filtros */}
      <InfluencerFilters />

      {/* Tabla Real */}
      <InfluencerTable />
    </div>
  );
}

// Un pequeño componente helper para las cards de estadísticas
interface StatCardProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    change?: string;
}
function StatCard({ icon, label, value, change }: StatCardProps) {
    return (
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 flex items-start space-x-4">
            <div className="bg-green-50 text-green-700 p-3 rounded-lg border border-green-100">
                {icon}
            </div>
            <div className="flex-1">
                <p className="text-sm text-gray-500 font-medium">{label}</p>
                <div className="flex items-baseline space-x-2 mt-1">
                    <p className="text-2xl font-bold text-gray-900">{value}</p>
                    {change && <span className="text-xs text-green-600 font-semibold">{change}</span>}
                </div>
            </div>
        </div>
    );
}