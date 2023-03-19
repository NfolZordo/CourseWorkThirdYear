import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../authorization/auth-service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() loginClicked = new EventEmitter<void>();
  @Output() registClicked = new EventEmitter<void>();
  @Output() personalClicked = new EventEmitter<void>();

  autorized:boolean = false;
  constructor(private authService: AuthService) { 
    this.autorized = authService.checkAuthorized();
  }
  
  openLoginModal() {
    this.loginClicked.emit();
  }
  openRegistrationModal() {
    this.registClicked.emit();
  }
  openPersonalModal() {
    this.personalClicked.emit();
  }
}
