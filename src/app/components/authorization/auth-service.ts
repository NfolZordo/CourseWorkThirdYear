import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
// import { AppComponent } from 'src/app/app.component';

  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {

    constructor(private http: HttpClient
      // , private appComponent:AppComponent
      ) { }

    private readonly TOKEN_KEY = 'my-app-token';
    private token: string;
    private authorized = false;

    public setToken(token: string) {

      localStorage.setItem(this.TOKEN_KEY, token);
      this.authorized = true;
      this.checkAuthorized()
    }

    public getToken(): string | null {
      return this.token || localStorage.getItem(this.TOKEN_KEY);
    }
    public getAuthorized(): boolean {
      return this.authorized;
    }

    public checkAuthorized(): boolean {
      const token = this.getToken();
      console.log("*** checkAuthorized token 1 ***"  )

      if (!token) {
        console.log("*** if (!token) ***"  )
        return false;
      }
      const headers = {
        'Authorization': 'Bearer ' + token
      };
      console.log("*** checkAuthorized token 2 ***"  )

      const options = {
        headers: headers
      };
      console.log("*** checkAuthorized token 3 ***"  )
      this.http.post('http://localhost:8080/api/auth/getUser', {}, options)
      .subscribe({
        next: (response) => {
          console.log("*** checkAuthorized token 4 ***");
          this.authorized = true;
          // this.appComponent.setAuthorized(true);
          return true;
        },
        error: (error) => {
          console.error(error);
          console.log("*** checkAuthorized 5***" )
          if (error.status === 403) {
            console.log("*** checkAuthorized token 6***"  )
    
            this.authorized = false;
          }
        }
      });
      console.log("*** checkAuthorized end 7 ***" + this.authorized)
      return this.authorized;
    }
  }


//   public async checkAuthorized(): Promise<boolean> {
//     const token = this.getToken();
//     console.log("*** checkAuthorized token 1 ***"  )

//     if (!token) {
//       console.log("*** if (!token) ***"  )
//       return false;
//     }
//     const headers = {
//       'Authorization': 'Bearer ' + token
//     };
//     console.log("*** checkAuthorized token 2 ***"  )

//     const options = {
//       headers: headers
//     };
//     console.log("*** checkAuthorized token 3 ***"  )
//     try {
//       const response = await this.http.post('http://localhost:8080/api/auth/getUser', {}, options).toPromise();
//       this.authorized = true;
//       console.log("*** checkAuthorized end 4 ***" + this.authorized)
      
//     } catch (error) {
//       console.error(error);
//       console.log("*** checkAuthorized end 5 ***" + this.authorized)

//       this.authorized = false;
//     }
//     console.log("*** checkAuthorized end 7 ***" + this.authorized)
//     return this.authorized;
//   }
// }