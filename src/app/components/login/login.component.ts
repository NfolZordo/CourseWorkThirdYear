import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl<string>('',[
      Validators.required,
      Validators.minLength(4)
    ]),
    password: new FormControl<string>('',[
      Validators.required,
      Validators.minLength(6)
    ]),
  })

  get username() {
    return this.form.controls.username as FormControl
  }
  get password() {
    return this.form.controls.password as FormControl
  }

  ngOnInit(): void {
  }
  constructor(private http:HttpClient) { }

  submit() {
    if (this.form.valid) {
      const data = this.form.value;
      console.log(data)
      this.http.post('http://localhost:8080/login',data).subscribe (response => {
        console.log(response);
      });
    }
    // console.log(this.form.value)
  }

}
