import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LikeDislikeComponent } from './like-dislike/like-dislike.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PostPageComponent } from './post-page/post-page.component';
import { LikeComponent } from './like/like.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingsComponent } from './settings/settings.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    LikeDislikeComponent,
    ParentComponent,
    ChildComponent,
    PostPageComponent,
    LikeComponent,
    LoginPageComponent,
    DashboardComponent,
    SidebarComponent,
    SettingsComponent,
    PostDetailsComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
