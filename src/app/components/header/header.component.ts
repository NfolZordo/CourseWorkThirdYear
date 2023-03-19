import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit {
  @Output() loginClicked = new EventEmitter<void>();
  @Output() registClicked = new EventEmitter<void>();
  @Output() personalClicked = new EventEmitter<void>();
  @Input() autorized:boolean;

  setAustrized(autorized: boolean) {
    this.autorized = autorized;
    console.log("*** setAustrized ***" + this.autorized)
  }

  constructor() { 
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
}
