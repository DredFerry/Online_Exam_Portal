import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetPCodeComponent } from './get-pcode/get-pcode.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ResultComponent } from './result/result.component';
import { Page1Component } from './setQuesttion/page1/page1.component';
import { Page2Component } from './setQuesttion/page2/page2.component';
import { Page3Component } from './setQuesttion/page3/page3.component';

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"page1",component:Page1Component},
  {path:"page2",component:Page2Component},
  {path:"page3",component:Page3Component},
  {path:"getPCode",component:GetPCodeComponent},
  {path:"Tresult",component:ResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
