export type VolunteerStatus = 'Disponible' | 'Saturado' | 'Inactivo';

export interface Volunteer {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  specialty: string;
  status: VolunteerStatus;
  disability: number; // Porcentaje (ej: 85)
  assignedInfluencers: number;
  performance: number[]; // Array para el mini gráfico (ej: [4, 7, 5, 9])
}