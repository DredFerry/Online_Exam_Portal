import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ExamHomePageComponent } from './exam-home-page/exam-home-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'examHomePage',component:ExamHomePageComponent},
  {path:'result',component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
