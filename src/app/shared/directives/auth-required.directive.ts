import { Directive, HostListener, Input, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { AuthModalService } from '../../core/services/auth-modal.service';

@Directive({ selector: '[authRequired]' })
export class AuthRequiredDirective {
  private auth = inject(AuthService);
  private modal = inject(AuthModalService);

  @Input('authRequired') action?: () => void; // ฟังก์ชันที่จะรันถ้า login แล้ว

  @HostListener('click', ['$event'])
  onClick(e: MouseEvent) {
    if (!this.auth.isAuthenticated()) {
      e.preventDefault();
      e.stopPropagation();
      this.modal.open(); // ถ้าไม่ login → เด้ง modal
    } else {
      this.action?.(); // ถ้า login → ทำ action
    }
  }
}
