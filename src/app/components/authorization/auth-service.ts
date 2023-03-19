import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {

    constructor(private http: HttpClient) { }

    private token: string = '';
    private authorized = false;

    public setToken(token: string) {
      this.token = token;
      this.authorized = true;
    }

    public getToken(): string {
      return this.token;
    }
    public getAuthorized(): boolean {
      return this.authorized;
    }

    public checkAuthorized(): boolean {
      const headers = {
        'Authorization': 'Bearer ' + this.token
      };
      this.http.post('http://localhost:8080/api/v1/auth/authenticate', { headers }).subscribe(
        response => {
          console.log(response);
          this.authorized = true;
        },
        error => {
          console.error(error);
          if (error.status === 403) {
            this.authorized = false;
          }
        }
      );
      return this.authorized;
    }
  }