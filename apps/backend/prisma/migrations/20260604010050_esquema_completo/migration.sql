-- CreateEnum
CREATE TYPE "EstadoUsuario" AS ENUM ('ACTIVO', 'INACTIVO');

-- CreateEnum
CREATE TYPE "EstadoConsulta" AS ENUM ('PROCESANDO', 'COMPLETADO', 'ERROR');

-- CreateEnum
CREATE TYPE "EstadoValidacion" AS ENUM ('PENDIENTE', 'VALIDADO', 'RECHAZADO');

-- CreateEnum
CREATE TYPE "EstadoContacto" AS ENUM ('SIN_CONTACTAR', 'CORREO_ENVIADO', 'FORMULARIO_LLENADO', 'REUNION_AGENDADA', 'RECHAZO_CONTACTO');

-- CreateEnum
CREATE TYPE "DiaSemana" AS ENUM ('LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO');

-- CreateEnum
CREATE TYPE "EstadoReunion" AS ENUM ('PENDIENTE', 'REALIZADA', 'CANCELADA', 'NO_ASISTIO');

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "foto" TEXT,
    "estado" "EstadoUsuario" NOT NULL DEFAULT 'ACTIVO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plantilla" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "asunto" TEXT NOT NULL,
    "cuerpo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Plantilla_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConsultaIA" (
    "id" TEXT NOT NULL,
    "descripcionPrompt" TEXT NOT NULL,
    "cantidadSolicitada" INTEGER NOT NULL,
    "rangoSeguidores" TEXT NOT NULL,
    "estado" "EstadoConsulta" NOT NULL DEFAULT 'PROCESANDO',
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "voluntarioId" TEXT NOT NULL,
    "plantillaId" TEXT NOT NULL,

    CONSTRAINT "ConsultaIA_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Influencer" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "usuarioIg" TEXT NOT NULL,
    "linkIg" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "seguidoresGemini" INTEGER NOT NULL,
    "seguidoresReales" INTEGER,
    "likesGemini" INTEGER NOT NULL,
    "likesReales" INTEGER,
    "estadoValidacion" "EstadoValidacion" NOT NULL DEFAULT 'PENDIENTE',
    "estadoContacto" "EstadoContacto" NOT NULL DEFAULT 'SIN_CONTACTAR',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "consultaIaId" TEXT NOT NULL,
    "validadoPorId" TEXT,

    CONSTRAINT "Influencer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HorarioVoluntario" (
    "id" TEXT NOT NULL,
    "diaSemana" "DiaSemana" NOT NULL,
    "horaInicio" TEXT NOT NULL,
    "horaFin" TEXT NOT NULL,
    "voluntarioId" TEXT NOT NULL,

    CONSTRAINT "HorarioVoluntario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DisponibilidadCita" (
    "id" TEXT NOT NULL,
    "fechaHora" TIMESTAMP(3) NOT NULL,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "voluntarioId" TEXT NOT NULL,

    CONSTRAINT "DisponibilidadCita_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reunion" (
    "id" TEXT NOT NULL,
    "fechaHora" TIMESTAMP(3) NOT NULL,
    "duracionMinutos" INTEGER NOT NULL DEFAULT 20,
    "estado" "EstadoReunion" NOT NULL DEFAULT 'PENDIENTE',
    "googleMeetLink" TEXT,
    "googleCalendarEventId" TEXT,
    "influencerId" TEXT NOT NULL,
    "disponibilidadCitaId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reunion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Plantilla_nombre_key" ON "Plantilla"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "HorarioVoluntario_voluntarioId_diaSemana_horaInicio_horaFin_key" ON "HorarioVoluntario"("voluntarioId", "diaSemana", "horaInicio", "horaFin");

-- CreateIndex
CREATE UNIQUE INDEX "Reunion_disponibilidadCitaId_key" ON "Reunion"("disponibilidadCitaId");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConsultaIA" ADD CONSTRAINT "ConsultaIA_voluntarioId_fkey" FOREIGN KEY ("voluntarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConsultaIA" ADD CONSTRAINT "ConsultaIA_plantillaId_fkey" FOREIGN KEY ("plantillaId") REFERENCES "Plantilla"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Influencer" ADD CONSTRAINT "Influencer_consultaIaId_fkey" FOREIGN KEY ("consultaIaId") REFERENCES "ConsultaIA"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Influencer" ADD CONSTRAINT "Influencer_validadoPorId_fkey" FOREIGN KEY ("validadoPorId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HorarioVoluntario" ADD CONSTRAINT "HorarioVoluntario_voluntarioId_fkey" FOREIGN KEY ("voluntarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisponibilidadCita" ADD CONSTRAINT "DisponibilidadCita_voluntarioId_fkey" FOREIGN KEY ("voluntarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reunion" ADD CONSTRAINT "Reunion_influencerId_fkey" FOREIGN KEY ("influencerId") REFERENCES "Influencer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reunion" ADD CONSTRAINT "Reunion_disponibilidadCitaId_fkey" FOREIGN KEY ("disponibilidadCitaId") REFERENCES "DisponibilidadCita"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
