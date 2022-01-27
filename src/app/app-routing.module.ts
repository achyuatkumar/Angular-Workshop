import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostPageComponent } from './post-page/post-page.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path:'login',component:LoginPageComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent, children:[
    {path:'',redirectTo:'posts', pathMatch:'full'},
    {path:'posts',component:PostPageComponent},
    {path:'posts/:postId',component:PostDetailsComponent},
    {path:'settings',component:SettingsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
