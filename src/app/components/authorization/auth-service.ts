import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {

    constructor(private http: HttpClient) { }

    private readonly TOKEN_KEY = 'my-app-token';
    private token: string;
    private authorized = false;

    public setToken(token: string) {
      localStorage.setItem(this.TOKEN_KEY, token);
      this.checkAuthorized()
    }

    public getToken(): string | null {
      return this.token || localStorage.getItem(this.TOKEN_KEY);
    }
    public getAuthorized(): boolean {
      return this.authorized;
    }
    public singOut() {
      this.setToken("");
      this.http.get('http://localhost:8080/api/auth/logout');
    }
    public checkAuthorized(): Promise<boolean> {
      const token = this.getToken();
    
      if (!token) {
        return Promise.resolve(false);
      }
    
      const headers = {
        'Authorization': 'Bearer ' + token
      };
    
      const options = {
        headers: headers
      };
    
      return new Promise<boolean>((resolve, reject) => {
        this.http.post('http://localhost:8080/api/auth/getUser', {}, options)
          .subscribe({
            next: (response) => {
              console.log(response);
              this.authorized = true;
              resolve(true);
            },
            error: (error) => {
              console.error(error);
              this.authorized = false;
              resolve(false);
            }
          });
      });
    }
  }
      
    // public checkAuthorized(): boolean {
    //   const token = this.getToken();
    //   console.log("*** checkAuthorized token 1 ***"  )

    //   if (!token) {
    //     console.log("*** if (!token) ***"  )
    //     return false;
    //   }
    //   const headers = {
    //     'Authorization': 'Bearer ' + token
    //   };
    //   console.log("*** checkAuthorized token 2 ***"  )

    //   const options = {
    //     headers: headers
    //   };
    //   console.log("*** checkAuthorized token 3 ***"  )
    //   this.http.post('http://localhost:8080/api/auth/getUser', {}, options)
    //   .subscribe({
    //     next: (response) => {
    //       console.log("*** checkAuthorized token 4 ***");
    //       console.log(response);
    //       this.authorized = true;
    //       // this.appComponent.setAuthorized(true);
    //       this.headerComponent.setAustrized(this.authorized);
    //       return true;
    //     },
    //     error: (error) => {
    //       console.error(error);
    //       console.log("*** checkAuthorized 5***" )
    //       if (error.status === 403) {
    //         console.log("*** checkAuthorized token 6***"  )
    
    //         this.authorized = false;
    //       }
    //     }
    //   });
    //   console.log("*** checkAuthorized end 7 ***" + this.authorized)
    //   return this.authorized;
    // }
