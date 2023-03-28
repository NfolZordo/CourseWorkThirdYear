import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { GlobalErrorComponent } from './components/global-error/global-error.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './services/authorization/auth-interceptor';
import { HeaderComponent } from './components/header/header.component';
import { RegistComponent } from './components/regist/regist.component';
import { PersonalComponent } from './components/personal/personal.component';
import { AuthService } from './services/authorization/auth-service';
import { OfficeComponent } from './components/office/office.component';
import { UserInfoComponent } from './components/office-elements/user-info/user-info.component';
import { MakeOrderComponent } from './components/office-elements/make-order/make-order.component';
import { ViewOrderComponent } from './components/office-elements/view-order/view-order.component';
import { CancelOrderComponent } from './components/office-elements/cancel-order/cancel-order.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    ModalComponent,
    LoginComponent,
    HeaderComponent,
    RegistComponent,
    PersonalComponent,
    OfficeComponent,
    UserInfoComponent,
    MakeOrderComponent,
    ViewOrderComponent,
    CancelOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
     HeaderComponent
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
 