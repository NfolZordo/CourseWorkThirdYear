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
  title = 'Course Work Third Year';
  // products: IProduct[] = []
  loading = false
  tours$: Observable<ITour[]>
  term = ''
  constructor(private toursService: ToursService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.tours$ = this.toursService.getAll().pipe(
      tap(()=> this.loading = false)
    )
    // this.productsService.getAll().subscribe(products => {
    //   this.products = products
    //   this.loading = false
    // })
  }


}
