import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgClass],
  templateUrl: './shell.html',
})
export class Shell {
  sidebarOpen = signal(false);

  toggleSidebar() {
    this.sidebarOpen.update((i) => !i);
  }
}
