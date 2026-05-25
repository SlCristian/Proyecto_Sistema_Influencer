import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#fcfcfc]">
      {/* 1. Sidebar: Se queda fijo a la izquierda */}
      <Sidebar />

      <div className="flex flex-col flex-1 h-screen overflow-hidden">
        {/* 2. Header: Se queda arriba */}
        <Header />

        {/* 3. Contenido Dinámico: Aquí se cargarán tus vistas (Influencers, etc.) */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-[1400px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}