import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { DashboardPageComponent } from "./dashboard-page.component";
import { MatDividerModule } from '@angular/material/divider';
import {ChartAreaComponentModule} from "@glow-workspace/shared";

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
    MatDividerModule,
    ChartAreaComponentModule,
  ],
  exports: [
    DashboardPageComponent
  ]
})
export class DashboardPageModule { }
