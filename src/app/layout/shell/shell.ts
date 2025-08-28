import { Component, signal } from '@angular/core';
import { NgClass, CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

export interface MenuItem {
  name: string;
  icon: string;
  path: string;
  desc?: string;
}
@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NgClass],
  templateUrl: './shell.html',
})
export class Shell {
  menuList: MenuItem[] = [
    { name: 'หน้าแรก', icon: 'pi pi-home', path: '/home', desc: 'สรุปภาพรวมทั้งหมด' },
    { name: 'เกี่ยวกับ', icon: 'pi pi-user', path: '/about', desc: 'แนะนำตัวและประวัติ' },
    { name: 'รางวัล', icon: 'pi pi-star', path: '/mywork', desc: 'ผลงานที่คัดมา' },
    { name: 'ผลงาน', icon: 'pi pi-file', path: '/project', desc: 'โปรเจกต์ที่คัดมา' },
    { name: 'ผลงาน', icon: 'pi pi-file', path: '/project', desc: 'โปรเจกต์ที่คัดมา' },
    { name: 'ผลงาน', icon: 'pi pi-file', path: '/project', desc: 'โปรเจกต์ที่คัดมา' },
    { name: 'ผลงาน', icon: 'pi pi-file', path: '/project', desc: 'โปรเจกต์ที่คัดมา' },
  ];
  sidebarOpen = signal(false);

  toggleSidebar() {
    this.sidebarOpen.update((i) => !i);
  }
}
