import { XCircle } from "lucide-react";
import { Influencer } from "../types";

interface InfluencerModalProps {
  isOpen: boolean;
  onClose: () => void;
  influencer: Influencer | null;
}

export default function InfluencerModal({ isOpen, onClose, influencer }: InfluencerModalProps) {
  // Si no está abierto o no hay influencer, no renderizamos nada
  if (!isOpen || !influencer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 className="text-xl font-bold text-gray-900">Validar Influencer</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <XCircle size={24} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl border border-green-100">
            <img src={influencer.avatarUrl} className="w-12 h-12 rounded-full" alt="" />
            <div>
              <p className="font-bold text-gray-900">{influencer.name}</p>
              <p className="text-sm text-gray-500">{influencer.handle}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">Seguidores</label>
              <input type="text" defaultValue={influencer.followersFormatted} className="w-full mt-1 p-2 bg-gray-50 border rounded-lg outline-none" />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">Engagement</label>
              <input type="text" defaultValue={`${influencer.engagement}%`} className="w-full mt-1 p-2 bg-gray-50 border rounded-lg outline-none" />
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 flex space-x-3">
          <button onClick={onClose} className="flex-1 py-2.5 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-xl">
            Cancelar
          </button>
          <button 
            onClick={() => { alert("Guardado uu"); onClose(); }}
            className="flex-1 py-2.5 text-sm font-semibold text-white bg-[#053d2b] rounded-xl"
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
}