import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ToursService } from './services/tour.service';
import { ITour } from './models/tour';
import { AuthService } from './components/authorization/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  modalHeading = '';
  authorized = false;
  // products: IProduct[] = []
  loading = false
  tours$: Observable<ITour[]>
  term = ''
  constructor(private toursService: ToursService, private authService:AuthService) {
    this.authorized = this.authService.checkAuthorized();
    console.log("*** AppComponent constructor ***" + this.authorized)

  }
  public setAuthorized(authorized:boolean){
    this.authorized = authorized;
  }

  openModal() {
    this.modalHeading = "Авторизація"
  }
  openRegistModal() {
    this.modalHeading = "Регістрація"
  }
  openPersonalModal() {
    this.modalHeading = "Особистий кабінет"
  }

  closeModal() {
    console.log("*** closeModal() ***" + this.authorized);
    this.modalHeading = '';
    this.authorized = this.authService.checkAuthorized();
  }
  ngOnInit(): void {
    this.loading = true
    this.tours$ = this.toursService.getAll().pipe(
      tap(()=> this.loading = false)
    )
  }


}
