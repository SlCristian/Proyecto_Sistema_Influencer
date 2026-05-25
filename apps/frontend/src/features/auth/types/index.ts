export interface LoginCredentials {
  email: string;
  password: string; 
  rememberMe: boolean;
}

export interface AuthUser {
  email: string;
  fullName: string;
  role: 'ADMIN' | 'VOLUNTARIO';
  status: 'Activo' | 'Inactivo';
}