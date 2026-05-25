"use client";
import { Mail, Eye, MoreVertical, CalendarDays, CheckCircle2, XCircle, FileInput, FileOutput, BotMessageSquare, Search, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { useState } from "react";
import { Influencer, InfluencerStatus } from "../types";

// Datos de prueba basados en tu imagen
const mockInfluencers: Influencer[] = [
  {
    id: "1", name: "Andrea Paz", handle: "@andreapaz_eco", avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    platform: 'Instagram', followers: 145200, followersFormatted: "145.2k", engagement: 4.8, scoreIA: 92, status: 'VALIDADO'
  },
  {
    id: "2", name: "Carlos Ruiz", handle: "@cruiz_viajes", avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    platform: 'TikTok', followers: 82500, followersFormatted: "82.5k", engagement: 6.2, scoreIA: 78, status: 'NUEVO'
  },
  {
    id: "3", name: "Lucia Mendez", handle: "@lucia_impacto", avatarUrl: "https://randomuser.me/api/portraits/women/65.jpg",
    platform: 'YouTube', followers: 310000, followersFormatted: "310.0k", engagement: 3.5, scoreIA: 85, status: 'CONTACTADO'
  },
  // Duplicamos para llenar la tabla
  {
    id: "4", name: "Mateo Torres", handle: "@mateo_naturaleza", avatarUrl: "https://randomuser.me/api/portraits/men/75.jpg",
    platform: 'Instagram', followers: 220100, followersFormatted: "220.1k", engagement: 5.1, scoreIA: 88, status: 'VALIDADO'
  },
  {
    id: "5", name: "Elena Gomez", handle: "@elena_planeta", avatarUrl: "https://randomuser.me/api/portraits/women/71.jpg",
    platform: 'TikTok', followers: 95300, followersFormatted: "95.3k", engagement: 5.9, scoreIA: 81, status: 'NUEVO'
  },
];

const StatusBadge = ({ status }: { status: InfluencerStatus }) => {
  const styles = {
    VALIDADO: "bg-green-100 text-green-700 border-green-200",
    NUEVO: "bg-gray-100 text-gray-700 border-gray-200",
    CONTACTADO: "bg-blue-100 text-blue-700 border-blue-200",
  };
  return (
    <span className={`px-2.5 py-1 text-xs font-bold rounded-full border ${styles[status]}`}>
      {status}
    </span>
  );
};

const ScoreIA = ({ score }: { score: number }) => {
  const width = `${score}%`;
  return (
    <div className="flex items-center space-x-3">
      <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-green-500 rounded-full" style={{ width }}></div>
      </div>
      <span className="text-xs font-bold text-gray-700 w-6">{score}</span>
    </div>
  );
};

export function InfluencerTable() {
  const [selectedInfluencers, setSelectedInfluencers] = useState<string[]>([]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedInfluencers(mockInfluencers.map(i => i.id));
    } else {
      setSelectedInfluencers([]);
    }
  };

  const handleSelectOne = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedInfluencers(prev => [...prev, id]);
    } else {
      setSelectedInfluencers(prev => prev.filter(itemId => itemId !== id));
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
      
      {/* Barra de Herramientas de la Tabla */}
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 bg-[#053d2b] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#064e37] transition-colors">
                <BotMessageSquare size={16}/>
                <span>Procesar con IA</span>
            </button>
            <button className="flex items-center space-x-2 border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                <Mail size={16} className="text-gray-400"/>
                <span>Enviar correo masivo</span>
            </button>
        </div>
        <div className="text-xs text-gray-500">
            Mostrando 1-{mockInfluencers.length} de {mockInfluencers.length * 5} influencers
        </div>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-500 uppercase bg-gray-50/50">
            <tr>
              <th scope="col" className="px-5 py-3.5">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300 text-green-700 focus:ring-green-600 w-4 h-4"
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              </th>
              <th scope="col" className="px-5 py-3.5">Influencer</th>
              <th scope="col" className="px-5 py-3.5">Red Social</th>
              <th scope="col" className="px-5 py-3.5">Seguidores</th>
              <th scope="col" className="px-5 py-3.5">Engagement</th>
              <th scope="col" className="px-5 py-3.5">Score IA</th>
              <th scope="col" className="px-5 py-3.5">Estado</th>
              <th scope="col" className="px-5 py-3.5 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {mockInfluencers.map((inf) => (
              <tr key={inf.id} className="bg-white border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="px-5 py-4">
                  <input 
                    type="checkbox" 
                    className="rounded border-gray-300 text-green-700 focus:ring-green-600 w-4 h-4"
                    checked={selectedInfluencers.includes(inf.id)}
                    onChange={(e) => handleSelectOne(inf.id, e.target.checked)}
                  />
                </td>
                <td className="px-5 py-4 flex items-center space-x-3">
                  <img src={inf.avatarUrl} alt={inf.name} className="w-10 h-10 rounded-full border border-gray-100" />
                  <div>
                    <p className="font-bold text-gray-900">{inf.name}</p>
                    <p className="text-xs text-gray-500">{inf.handle}</p>
                  </div>
                </td>
                <td className="px-5 py-4 text-gray-600 text-xs font-medium">{inf.platform}</td>
                <td className="px-5 py-4 font-bold text-gray-800">{inf.followersFormatted}</td>
                <td className="px-5 py-4 text-green-600 font-bold">{inf.engagement}%</td>
                <td className="px-5 py-4"><ScoreIA score={inf.scoreIA} /></td>
                <td className="px-5 py-4"><StatusBadge status={inf.status} /></td>
                <td className="px-5 py-4">
                    <div className="flex items-center justify-center space-x-1.5 text-gray-500">
                        <button className="p-1.5 hover:bg-gray-100 hover:text-gray-800 rounded-md transition-colors">
                            <Eye size={16}/>
                        </button>
                        {inf.status === 'VALIDADO' ? (
                            <button className="p-1.5 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
                                <Mail size={16}/>
                            </button>
                        ) : inf.status === 'CONTACTADO' ? (
                             <button className="p-1.5 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors">
                                <CalendarDays size={16}/>
                            </button>
                        ) : (
                            <div className="flex space-x-0.5">
                                <button className="p-1.5 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors">
                                    <CheckCircle2 size={16}/>
                                </button>
                                <button className="p-1.5 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors">
                                    <XCircle size={16}/>
                                </button>
                            </div>
                        )}
                        <button className="p-1.5 hover:bg-gray-100 hover:text-gray-800 rounded-md transition-colors">
                            <MoreVertical size={16}/>
                        </button>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="px-5 py-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-600">
          <p>Página 1 de 13</p>
          <div className="flex items-center space-x-1">
              <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-400">
                  <ChevronLeft size={16}/>
              </button>
              <button className="px-3.5 py-1.5 bg-[#053d2b] text-white rounded-lg font-bold text-xs">1</button>
              <button className="px-3.5 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">2</button>
              <button className="px-3.5 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">3</button>
              <span className="text-gray-400">...</span>
              <button className="px-3.5 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">13</button>
              <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-400">
                  <ChevronRight size={16}/>
              </button>
          </div>
      </div>
    </div>
  );
}