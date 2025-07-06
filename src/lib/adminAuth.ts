import { supabase } from './supabase';

class AdminAuth {
  private readonly ADMIN_EMAIL = 'admin@camphormind.com';
  private readonly ADMIN_PASSWORD = 'CAsingh@2010';
  private readonly TOKEN_KEY = 'admin_token';
  private readonly SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

  async login(email: string, password: string) {
    try {
      // Verify admin credentials
      if (email !== this.ADMIN_EMAIL || password !== this.ADMIN_PASSWORD) {
        return { success: false, error: 'Invalid credentials' };
      }

      // Create session token
      const token = this.generateToken();
      const expiresAt = Date.now() + this.SESSION_DURATION;
      
      // Store session
      localStorage.setItem(this.TOKEN_KEY, JSON.stringify({
        token,
        expiresAt,
        email
      }));

      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Login failed' };
    }
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    try {
      const session = localStorage.getItem(this.TOKEN_KEY);
      if (!session) return false;

      const { expiresAt } = JSON.parse(session);
      if (Date.now() > expiresAt) {
        this.logout();
        return false;
      }

      return true;
    } catch {
      return false;
    }
  }

  getSession() {
    try {
      const session = localStorage.getItem(this.TOKEN_KEY);
      return session ? JSON.parse(session) : null;
    } catch {
      return null;
    }
  }

  private generateToken(): string {
    return btoa(Date.now() + Math.random().toString(36));
  }
}

export const adminAuth = new AdminAuth();