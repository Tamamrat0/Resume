import { Injectable, signal, computed } from '@angular/core';

export type Role = 'user' | 'admin';
export interface User {
  id: string;
  name: string;
  roles: Role[];
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user = signal<User | null>(null);
  readonly user = computed(() => this._user());
  readonly isAuthenticated = computed(() => this._user() !== null);

  // ตัวอย่าง login จำลอง — ในงานจริงเรียก API แล้วตั้งค่า user จาก response
  async login(username: string, password: string) {
    // TODO: call API
    const fakeUser: User = { id: 'u1', name: username, roles: ['admin'] };
    this._user.set(fakeUser);
    // TODO: จัดการ token: เก็บใน memory หรือใช้ httpOnly cookie ฝั่ง server
  }

  logout() {
    this._user.set(null);
    // TODO: เคลียร์ token/เซสชันที่เกี่ยวข้อง
  }

  setUser(u: User | null) {
    this._user.set(u);
  }

  hasRole(role: Role) {
    const u = this._user();
    return !!u && u.roles.includes(role);
  }
}
