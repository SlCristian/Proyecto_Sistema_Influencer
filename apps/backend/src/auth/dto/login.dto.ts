import { IsEmail, IsNotEmpty, IsString, IsBoolean, IsOptional, MinLength, Matches } from 'class-validator';

export class LoginDto {
 @IsEmail({}, { message: 'El correo electrónico no es válido' })
   @Matches(/@sembrandoperu\.org$/, {
     message: 'Solo se pueden registrar correos bajo el dominio autorizado.',
   })
   @IsNotEmpty({ message: 'El correo es obligatorio' })
  email!: string;

  @IsString()
  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password!: string;

  @IsBoolean({ message: 'El campo recordar debe ser un booleano' })
  @IsOptional()
  recordar?: boolean; // 👈 Opcional, si viene en true, el token durará más tiempo


  
}