import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { QrCodeModule } from 'ng-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { QuesPage1Service } from './services/ques-page1.service';
import { Page1Component } from './setQuesttion/page1/page1.component';
import { Page2Component } from './setQuesttion/page2/page2.component';
import { Page3Component } from './setQuesttion/page3/page3.component';
import { GetPCodeComponent } from './get-pcode/get-pcode.component';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    GetPCodeComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QrCodeModule

  ],
  providers: [QuesPage1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
