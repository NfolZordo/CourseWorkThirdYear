import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../../services/authorization/auth-service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() title: string
  ngOnInit(): void {
  }
  @Output() closeClicked = new EventEmitter<void>();
  constructor(headerComponent:HeaderComponent, private authService:AuthService) {
  }

  closeModal() {
    this.closeClicked.emit();
    this.authService.checkUser()
  }
}
