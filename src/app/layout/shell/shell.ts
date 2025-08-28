import { NgClass, CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

export interface MenuItem {
  name: string;
  icon: string;
  path: string;
}
@Component({
  selector: 'app-shell',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NgClass, MatIconModule],
  templateUrl: './shell.html',
})
export class Shell {
  menuList: MenuItem[] = [
    { name: 'หน้าแรก', icon: 'home', path: '/home' },
    { name: 'เกี่ยวกับ', icon: 'person', path: '/about' },
    { name: 'รางวัล', icon: 'work', path: '/project' },
    { name: 'ผลงาน', icon: 'work', path: '/project' },
  ];
  sidebarOpen = signal(false);

  toggleSidebar() {
    this.sidebarOpen.update((i) => !i);
  }
}
