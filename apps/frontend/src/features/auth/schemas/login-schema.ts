import { z } from "zod";
/*Es una lista de vallidaciones que los datos deben cumplir, es como un contracto , nerfica por ejemplo email que sea de texto en formato string de correo y que con refine que termine en @sembrandoperou , */ 
/*se relaciona con zustand  cuando este seria como doble filtro una veez se confirma que respetas las refglas y se guarda los doatos en zustand o algo asi uu (estado global)*/
export const loginSchema = z.object({
  email: z.string()
    .email("El correo debe ser institucional (@sembrandoperu.org)")
    .refine((val) => val.endsWith("@sembrandoperu.org"), {
      message: "Solo se permiten correos de Sembrando Perú",
    }),
  password: z.string().min(6, "La contraseña es requerida"),
  rememberMe: z.boolean().default(false),
});
//tipo que zod genera a partir del esquema
export type LoginFormValues = z.infer<typeof loginSchema>;