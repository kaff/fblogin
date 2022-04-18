import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageModule } from "./dashboard/dashboard-page.module";

@NgModule({
  imports: [
    CommonModule,
    DashboardPageModule
  ]
})
export class PagesModule { }
