import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/authorization/auth-service';
import { UserData } from 'src/app/services/authorization/user-response';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  userInfo: UserData;
  constructor(private authService:AuthService){
  }
  ngOnInit(): void {
    this.userInfo = this.authService.getUserInfo();
  }

}
