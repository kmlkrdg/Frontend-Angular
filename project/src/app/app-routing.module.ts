import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminPostDetailComponent } from './admin/admin-post-detail/admin-post-detail.component';
import { AdminPostPageComponent } from './admin/admin-post-page/admin-post-page.component';
import { AdminUserDetailComponent } from './admin/admin-user-detail/admin-user-detail.component';
import { AdminUserPageComponent } from './admin/admin-user-page/admin-user-page.component';
import { AdminVisitorPageComponent } from './admin/admin-visitor-page/admin-visitor-page.component';
import { AboutComponent } from './main/about/about.component';
import { GalleryComponent } from './main/gallery/gallery.component';
import { HomeComponent } from './main/home/home.component';
import { VisitorsBookComponent } from './main/visitors-book/visitors-book.component';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';

const routes: Routes = [
  {path:'',component:MainLayoutComponent,children: [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'gallery',component:GalleryComponent},
    {path:'visitors-book',component:VisitorsBookComponent},
  ]},
  {path:'admin',component:AdminLayoutComponent,children: [
    {path:'admin-home',component:AdminHomeComponent},
    {path:'admin-post-page',component:AdminPostPageComponent},
    {path:'admin-user-page',component:AdminUserPageComponent},
    {path:'admin-visitor-page',component:AdminVisitorPageComponent},
    {path:'admin-post-detail/:id',component:AdminPostDetailComponent},
    {path:'admin-user-detail/:id',component:AdminUserDetailComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
