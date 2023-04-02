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
  navigation: string = "user-info";
  constructor(private authService:AuthService){
  }
  ngOnInit(): void {
    this.userInfo = this.authService.getUserInfo();
  }
  buttons = [
    { text: 'Користувач', onclick: this.openUserInfo.bind(this) },
    { text: 'Оформити замовлення', onclick: this.openMakeOrder.bind(this)  },
    { text: 'Мої замовлення', onclick:  this.openMakeOrder.bind(this)}
  ];

  public openMakeOrder() {
    console.log('openMakeOrder()')
    this.navigation = "make-oredr";
  }
  public openUserInfo() {
    console.log('openUserInfo()')
    this.navigation = "user-info";
  }


}
