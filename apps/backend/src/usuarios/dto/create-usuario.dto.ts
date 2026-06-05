import { IsEmail, IsNotEmpty, IsString, IsInt, Matches } from 'class-validator';

export class CreateUsuarioDto {
  @IsEmail({}, { message: 'El correo electrónico no es válido' })
  @Matches(/@sembrandoperu\.org$/, {
    message: 'Solo se pueden registrar correos bajo el dominio autorizado.',
  })
  @IsNotEmpty({ message: 'El correo es obligatorio' })
  email!: string;

  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre!: string;

  @IsInt({ message: 'Debe seleccionar un rol válido' })
  roleId!: number; // 👈 El Admin elige el rol desde el panel
}







