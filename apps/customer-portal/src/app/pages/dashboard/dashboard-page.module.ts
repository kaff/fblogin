import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { DashboardPageComponent } from "./dashboard-page.component";
import { MatDividerModule } from '@angular/material/divider';
import {ChartAreaComponentModule} from "@glow-workspace/shared";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {HttpFbService} from "./http-fb.service";

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
    MatDividerModule,
    ChartAreaComponentModule,
    FlexLayoutModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [
    HttpFbService,
  ],
  exports: [
    DashboardPageComponent
  ]
})
export class DashboardPageModule { }
