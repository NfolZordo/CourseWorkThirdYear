import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

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
  headerComponent: HeaderComponent;
  constructor(headerComponent:HeaderComponent) {
    this.headerComponent = headerComponent;
  }

  closeModal() {
    this.closeClicked.emit();
    this.headerComponent.setAustrized(true);
  }
}
