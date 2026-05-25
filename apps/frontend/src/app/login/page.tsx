import { LoginForm } from "@/features/auth/components/login-form";
import Image from "next/image";
/*Es un componente especial de Next.js que optimza las fotos para que la pagina cargue mas rapido */
export default function LoginPage() {
  return (
    <main className="flex min-h-screen bg-white">
      {/* Panel Izquierdo: Imagen e Impacto */}
      <div className="hidden lg:flex w-1/2 relative bg-[#053d2b] p-12 flex-col justify-end">
        <Image 
          src="/login-foto.png" // Pon aquí la imagen de la IA que tienes
          alt="Impacto Social"
          fill
          className="object-cover opacity-60"
        />
        <div className="relative z-10 text-white max-w-lg">
          <h1 className="text-5xl font-bold leading-tight">Gestiona influencers de impacto social</h1>
          <p className="mt-6 text-lg text-gray-200">
            Automatiza validaciones, campañas, agendas y seguimiento con nuestra plataforma inteligente diseñada para el cambio.
          </p>
          <div className="mt-8 flex space-x-2">
            <div className="h-1 w-12 bg-white rounded-full"></div>
            <div className="h-1 w-4 bg-white/30 rounded-full"></div>
            <div className="h-1 w-4 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Panel Derecho: Formulario */}
      <div className="w-full lg:w-1/2 flex flex-col p-8 lg:p-16">
        <div className="flex justify-end mb-12">
            {/* Aquí iría el logo de Sembrando Perú */}
            <div className="flex items-center space-x-2">
                <div className="bg-[#053d2b] p-2 rounded-lg">🍃</div>
                <span className="font-bold text-gray-800">Sembrando Perú</span>
            </div>
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <LoginForm />
        </div>

        <footer className="mt-auto pt-8 flex justify-between text-[11px] text-gray-400 uppercase tracking-wider">
          <span>Sembrando Perú © 2026</span>
          <div className="space-x-4">
            <a href="#">Políticas de Privacidad</a>
            <a href="#">Términos de Servicio</a>
            <a href="#">Ayuda</a>
          </div>
        </footer>
      </div>
    </main>
  );
}