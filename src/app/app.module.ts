import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { GlobalErrorComponent } from './components/global-error/global-error.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './components/authorization/auth-interceptor';
import { HeaderComponent } from './components/header/header.component';
import { RegistComponent } from './components/regist/regist.component';
import { PersonalComponent } from './components/personal/personal.component';
import { AuthService } from './components/authorization/auth-service';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    ModalComponent,
    CreateProductComponent,
    LoginComponent,
    HeaderComponent,
    RegistComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
     HeaderComponent
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
 