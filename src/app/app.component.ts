import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ToursService } from './services/tour.service';
import { ITour } from './models/tour';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  modalHeading = '';
  // products: IProduct[] = []
  loading = false
  tours$: Observable<ITour[]>
  term = ''
  constructor(private toursService: ToursService) {
  }

  openModal() {
    this.modalHeading="Авторизація"
  }
  openRegistModal() {
    this.modalHeading="Регістрація"
  }
  openPersonalModal() {
    this.modalHeading="Особистий кабінет"
  }

  closeModal() {
    this.modalHeading = '';
  }
  ngOnInit(): void {
    this.loading = true
    this.tours$ = this.toursService.getAll().pipe(
      tap(()=> this.loading = false)
    )
  }


}
