import { Filter, Search } from "lucide-react";

export function InfluencerFilters() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
      {/* Búsqueda */}
      <div className="md:col-span-2 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Buscar por nombre, usuario o campaña..."
            className="w-full pl-11 pr-4 py-3 bg-white border border-gray-100 shadow-sm rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-600/20 transition-all"
          />
      </div>

      {/* Selectores */}
      <div>
          <label className="text-xs text-gray-500 font-medium mb-1.5 block">Estado</label>
          <select className="w-full px-4 py-3 bg-white border border-gray-100 shadow-sm rounded-xl text-sm text-gray-700 outline-none">
              <option>Todos los estados</option>
              <option>Validado</option>
              <option>Nuevo</option>
              <option>Contactado</option>
          </select>
      </div>
      
      {/* Botón Más Filtros */}
      <button className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors">
          <Filter size={16}/>
          <span>Más filtros</span>
      </button>
    </div>
  );
}