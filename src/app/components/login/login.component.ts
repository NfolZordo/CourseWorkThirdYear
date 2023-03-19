import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../authorization/auth-service';
import { ResponseData } from '../authorization/token-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl<string>('',[
      Validators.required,
      Validators.minLength(4)
    ]),
    password: new FormControl<string>('',[
      Validators.required,
      Validators.minLength(6)
    ]),
  })

  get email() {
    return this.form.controls.email as FormControl
  }
  get password() {
    return this.form.controls.password as FormControl
  }

  ngOnInit(): void {
  }
  constructor(private http:HttpClient, private authService: AuthService) { }

  submit() {
    if (this.form.valid) {
      const data = this.form.value;

      this.http.post<ResponseData>('http://localhost:8080/api/auth/authenticate',data,).subscribe (response => {
        console.log(response);
        const token = response.token;
        this.authService.setToken(token);
      });
  }
    // console.log(this.form.value)
  
  }
}
// interface ResponseData {
// token: string;
// }

// submit() {
//   if (this.form.valid) {
//     const data = this.form.value;
//     console.log(data)
//     const headers = { 
//       'Authorization': 'Bearer ' + this.authService.getToken()
//     };
//     this.http.post('http://localhost:8080/api/v1/auth/authenticate',data,{headers}).subscribe (response => {
//       console.log(response);
//     });
//   }
//   // console.log(this.form.value)
  
// }
