import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  // Inyectamos Prisma para poder usar la base de datos
  constructor(private readonly prisma: PrismaService) {}

  async crearPorAdmin(createUsuarioDto: CreateUsuarioDto): Promise<any> {
    const { email, nombre, roleId } = createUsuarioDto;


    // 2. Validar que el correo no esté repetido
    const usuarioExiste = await this.prisma.usuario.findUnique({ where: { email } });
    if (usuarioExiste) {
      throw new BadRequestException('Este correo ya está registrado en el sistema.');
    }

    // 3. Contraseña por defecto para que el voluntario la cambie después
    const contrasenaTemporal = 'Sembrando2026*';
    const hashedPassword = await bcrypt.hash(contrasenaTemporal, 10);

    // 4. Guardar en la base de datos
    const usuarioCreado= await this.prisma.usuario.create({
      data: {
        email,
        nombre,
        password: hashedPassword,
        roleId,
      },
      select: { // lo que te da como respuesta el backend despues de crear el usuario
        id: true,
        email: true,
        nombre: true,
        estado: true,
        roleId: true,
      }
    });
    return usuarioCreado;
  }

}