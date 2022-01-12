import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './sidebar.component';
import { LikeDislikeComponent } from './like-dislike/like-dislike.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    LikeDislikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
