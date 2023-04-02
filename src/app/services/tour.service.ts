import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { Observable, catchError, retry, throwError } from "rxjs";
import { ErrorService } from "./error.service";
import { ITour } from "../models/tour";

@Injectable({
    providedIn: 'root'
})
export class ToursService {
    constructor(private http: HttpClient,
        private errorService: ErrorService
    ) {
        this.allTourse = this.http.get<ITour[]>('http://localhost:8080/api/info/getAllTours', {
            params: new HttpParams({
                fromObject: { limit: 20 }
            })
        }).pipe(
            retry(2),
            catchError(this.errorHandler.bind(this))
        )
    }
    private allTourse: Observable<ITour[]>


    getAll(): Observable<ITour[]> {
        return this.allTourse;
    }

    private errorHandler(error: HttpErrorResponse) {
        this.errorService.handle(error.message)
        return throwError(() => error.message)
    }
}