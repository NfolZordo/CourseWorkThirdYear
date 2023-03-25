import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../authorization/auth-service';
import { ResponseData } from '../authorization/token-response';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {

    form = new FormGroup({
      firstname: new FormControl<string>(''),
      lastname: new FormControl<string>(''),
      email: new FormControl<string>('',[
        Validators.required,
        Validators.email
      ]),
      phoneNumber: new FormControl<string>(''),
      password: new FormControl<string>('',[
        Validators.required,
        Validators.minLength(6)
      ]),

      repitPassword: new FormControl<string>('', [
        (control: AbstractControl) => {
          const password = control.root.get('password');
          const repitPassword = control.value;
          if (password && repitPassword && password.value !== repitPassword) {
            return { passwordMismatch: true };
          }
          return null;
        }
      ])
    })
  
    get firstname() {
      return this.form.controls.firstname as FormControl
    }
    get lastname() {
      return this.form.controls.lastname as FormControl
    }
    get email() {
      return this.form.controls.email as FormControl
    }
    get phoneNumber() {
      return this.form.controls.phoneNumber as FormControl
    }
    get password() {
      return this.form.controls.password as FormControl
    }
    get repitPassword() {
      return this.form.controls.repitPassword as FormControl
    }
    ngOnInit(): void {
    }
    constructor(private http:HttpClient, private authService: AuthService) { }
  
    submit() {
      if (this.form.valid) {
        const data = this.form.value;
        this.http.post<ResponseData>('http://localhost:8080/api/auth/register', data).subscribe(response => {
          console.log(response);
          const token = response.token;
          this.authService.setToken(token);
        });
      }
    }
  }
  // import { TokenResponse } from '../authorization/auth-interceptor';


