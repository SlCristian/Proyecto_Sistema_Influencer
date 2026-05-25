"use client";
import { Mail, Lock, EyeOff, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormValues } from "../schemas/login-schema";

export function LoginForm() {
    /*useForm es la funcion principal de react-hook-form register: es una funciona que se encarga de conectar cada input de html con el esquema de validacion . Cuando haces {...register }, le estas dando al input el poder de avisarle al cerebro cada vez que cambia el texto */
    /*handlesumbit es una funcion que decide si los datos estan bien deja pasar la informacion, si esta mal bloquealo 
    formSate:{errors} es un objeta que siempre esta escuchando , si encuentra un error este objeto se llena automatimaente */

    /*
    resolver: zodResolver(loginSchema): "No valides tú mismo; usa las reglas que escribí en loginSchema". Devbuelve un objeto con errores si no cumple y si cumplen devuelve limpio para usarlos 
    
    */
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
    email: "",
    password: "",
    rememberMe: false,
  }
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("Iniciando sesión con:", data);
    // Aquí llamaremos al hook useLogin después
  };

  return (
    <div className="w-full max-w-sm">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Bienvenido</h2>
        <p className="text-gray-500 mt-2">Ingresa tus credenciales para acceder a la plataforma.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Correo electrónico</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              {...register("email")}
              type="email"
              placeholder="nombre@ejemplo.com"
               className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all text-gray-900 font-semibold"
            />
          </div>
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Contraseña</label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
           <input
  {...register("password")}
  type="password"
  placeholder="••••••••"
  className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all text-gray-900 font-semibold"
/>
            <EyeOff className="absolute right-3 top-3 h-5 w-5 text-gray-400 cursor-pointer" />
          </div>
          {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
        </div>

        {/* Remember & Forgot */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input {...register("rememberMe")} type="checkbox" className="rounded border-gray-300 text-green-700 focus:ring-green-600" />
            <span className="text-gray-600">Recordarme</span>
          </label>
          <a href="#" className="text-green-800 font-semibold hover:underline">¿Olvidaste tu contraseña?</a>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#03251a] text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-[#053d2b] transition-colors"
        >
          <span>Ingresar</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <div className="mt-8 flex items-center justify-center space-x-4">
        <div className="h-[1px] bg-gray-200 w-full"></div>
        <span className="text-[10px] text-gray-400 uppercase tracking-widest whitespace-nowrap">Sistema Automatizado</span>
        <div className="h-[1px] bg-gray-200 w-full"></div>
      </div>
    </div>
  );
}