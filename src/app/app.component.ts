import { Component, OnInit } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
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
  authorized = new Subject<boolean>();
  loading = false
  tours$: Observable<ITour[]>
  term = ''
  constructor(private toursService: ToursService, private authService: AuthService) {
    this.loading = true;
    this.authService.checkUser()
      .then(authorized => {
        this.authorized.next(authorized);
      });
  }
  // public setAuthorized(authorized:boolean){
  //   this.authorized = authorized;
  // }

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
    this.modalHeading = '';
    this.authService.checkUser()
      .then(authorized => {
        this.authorized.next(authorized);
        this.loading = false;
      });
      }
  ngOnInit(): void {
    this.loading = true
    this.tours$ = this.toursService.getAll().pipe(
      tap(()=> this.loading = false)
    )
  }


}
