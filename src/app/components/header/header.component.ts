import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from '../../services/authorization/auth-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit {
  @Output() loginClicked = new EventEmitter<void>();
  @Output() registClicked = new EventEmitter<void>();
  @Output() personalClicked = new EventEmitter<void>();
  @Input() authorized = new Subject<boolean>();;

  
  setAustrized(autorized: boolean) {
    this.authorized.next(autorized);
  }

  constructor(private authService:AuthService) { 
  }
  ngOnInit(): void {
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
  singOut() {
    this.authService.singOut();
    this.authService.checkUser()
    .then(authorized => {
      this.authorized.next(authorized);
    });
  }
}
