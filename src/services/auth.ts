<<<<<<< HEAD
import { apiService, ApiResponse } from './api';
import { LoginForm, RegisterForm, User } from '@types/auth';

export class AuthService {
    static async login(credentials: LoginForm): Promise<ApiResponse<{ user: User; token: string }>> {
        // В реальном приложении здесь будет запрос к серверу
        return apiService.post('/auth/login', credentials);
    }

    static async register(userData: RegisterForm): Promise<ApiResponse<{ user: User; token: string }>> {
        // В реальном приложении здесь будет запрос к серверу  
        return apiService.post('/auth/register', userData);
    }

    static async logout(): Promise<ApiResponse> {
        // В реальном приложении здесь будет запрос к серверу
        return apiService.post('/auth/logout', {});
    }

    static async refreshToken(): Promise<ApiResponse<{ token: string }>> {
        // В реальном приложении здесь будет запрос к серверу
        return apiService.post('/auth/refresh', {});
    }

    static async getCurrentUser(): Promise<ApiResponse<User>> {
        // В реальном приложении здесь будет запрос к серверу
        return apiService.get('/auth/me');
    }
=======
import {apiService, ApiResponse} from './api';
import {LoginForm, RegisterForm, User} from '@types/auth';

export class AuthService {
  static async login(credentials: LoginForm): Promise<ApiResponse<{user: User; token: string}>> {
    // В реальном приложении здесь будет запрос к серверу
    return apiService.post('/auth/login', credentials);
  }

  static async register(userData: RegisterForm): Promise<ApiResponse<{user: User; token: string}>> {
    // В реальном приложении здесь будет запрос к серверу  
    return apiService.post('/auth/register', userData);
  }

  static async logout(): Promise<ApiResponse> {
    // В реальном приложении здесь будет запрос к серверу
    return apiService.post('/auth/logout', {});
  }

  static async refreshToken(): Promise<ApiResponse<{token: string}>> {
    // В реальном приложении здесь будет запрос к серверу
    return apiService.post('/auth/refresh', {});
  }

  static async getCurrentUser(): Promise<ApiResponse<User>> {
    // В реальном приложении здесь будет запрос к серверу
    return apiService.get('/auth/me');
  }
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
}