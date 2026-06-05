import { Injectable, UnauthorizedException } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {

constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
async login(loginDto: LoginDto): Promise<any> {
    const { email, password, recordar } = loginDto;

    
    const usuario = await this.prisma.usuario.findUnique({
      where: { email },
      include: { role: true }, 
    });

    if(!usuario) {
      throw new UnauthorizedException('El correo o la contraseña son incorrectos.');
    }
    if(usuario.estado === 'INACTIVO'){
      throw new UnauthorizedException('El usuario esta inactivo. Comunicate con un administrador.');
    }
   

   
    const passwordValido = await bcrypt.compare(password, usuario.password);
    if (!passwordValido) {
      throw new UnauthorizedException('El correo o la contraseña son incorrectos.');
    }

    
    const tiempoExpiracion = recordar ? '30d' : '1d';

    // 5. Crear el Payload (La información pública e inmutable que viajará dentro del JWT)
    const payload = { 
      sub: usuario.id, 
      email: usuario.email, 
      role: usuario.role.name 
    };

    // 6. Firmar el token y armar la respuesta del recibo para el Frontend
    return {
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        role: usuario.role.name,
      },
      backendToken: this.jwtService.sign(payload, { expiresIn: tiempoExpiracion }),
    };
  }
}
