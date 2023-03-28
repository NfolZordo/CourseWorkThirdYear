import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/authorization/auth-service';
import { ResponseData } from '../../services/authorization/token-response';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  autorithError = false;
  form = new FormGroup({
    email: new FormControl<string>('',[
      Validators.required,
      Validators.email
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
  constructor(private http:HttpClient, private authService: AuthService, private modalComponent:ModalComponent) { }

  submit() {
    if (this.form.valid) {
      const data = this.form.value;
      console.log(data);
      this.http.post<ResponseData>('http://localhost:8080/api/auth/authenticate',data,).subscribe (response => {
        const token = response.token;
        this.authService.setToken(token);
        this.modalComponent.closeClicked.emit();
      });
      this.autorithError = true;
  }
    // console.log(this.form.value)
    // this.authService.checkAuthorized()

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
//     this.http.post('http://localhost:8080/api/auth/authenticate',data,{headers}).subscribe (response => {
//       console.log(response);
//     });
//   }
//   // console.log(this.form.value)
  
// }
