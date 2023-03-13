import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { GalleryComponent } from './main/gallery/gallery.component';
import { VisitorsBookComponent } from './main/visitors-book/visitors-book.component';
import { SharedModule } from './shared/shared.module';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminPostPageComponent } from './admin/admin-post-page/admin-post-page.component';
import { AdminUserPageComponent } from './admin/admin-user-page/admin-user-page.component';
import { AdminVisitorPageComponent } from './admin/admin-visitor-page/admin-visitor-page.component';
import { AdminPostDetailComponent } from './admin/admin-post-detail/admin-post-detail.component';
import { AdminUserDetailComponent } from './admin/admin-user-detail/admin-user-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    VisitorsBookComponent,
    AdminHomeComponent,
    AdminPostPageComponent,
    AdminUserPageComponent,
    AdminVisitorPageComponent,
    AdminPostDetailComponent,
    AdminUserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
