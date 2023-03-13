import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AppRoutingModule } from '../app-routing.module';
import {  ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    AdminLayoutComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgOptimizedImage,
  ],
  exports:[
    ReactiveFormsModule,
    NgOptimizedImage
  ]
})
export class SharedModule { }
