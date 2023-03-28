import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authorization/auth-service';
import { UserData } from 'src/app/services/authorization/user-response';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent  implements OnInit  {
  userInfo: UserData;
  constructor(private authService:AuthService){
  }
  ngOnInit(): void {
    this.userInfo = this.authService.getUserInfo();
  }
  buttons = [
    { text: 'Користувач', onclick: '' },
    { text: 'Оформити замовлення' },
    { text: 'Мої замовлення' },
    { text: 'Button 4' },
    { text: 'Button 5' }
  ];

  // onClick(button) {
  //   console.log('Clicked ' + button.text);
  // }
}
