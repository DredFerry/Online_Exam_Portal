import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { QrCodeModule } from 'ng-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './login/login.component';
import { ExamHomePageComponent } from './exam-home-page/exam-home-page.component';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    RegistrationComponent,
    ProfileComponent,
    LoginComponent,
    ExamHomePageComponent,
    ResultComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxScannerQrcodeModule,
    QrCodeModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
