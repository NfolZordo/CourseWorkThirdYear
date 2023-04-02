import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITour } from 'src/app/models/tour';
import { ToursService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css']
})
export class MakeOrderComponent implements OnInit{
  constructor(private toursService: ToursService) {

  }
  tours$: Observable<ITour[]>
  ngOnInit(): void {
      this.tours$ = this.toursService.getAll();
  }
  getNextDayISOString() {
    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1);
    return nextDay.toISOString().split('T')[0];
  }
}
