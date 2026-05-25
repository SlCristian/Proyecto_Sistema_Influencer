"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
/*Realizando destructuracion de props */
interface NavItemProps {
  icon: ReactNode;
  label: string;
  href: string;
  active?: boolean; // Por si queremos forzarlo, pero usaremos el pathname
}

export function NavItem({ icon, label, href }: NavItemProps) {
  const pathname = usePathname();
  // Si la ruta actual coincide con el href, se pone verde
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
        isActive 
          ? "bg-green-50 text-green-700 font-semibold" 
          : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      <span className={`${isActive ? "text-green-700" : "text-gray-400 group-hover:text-gray-600"}`}>
        {icon}
      </span>
      <span className="text-sm">{label}</span>
    </Link>
  );
}