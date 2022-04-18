import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { PageComponent } from './page/page.component';
import { DashboardPageComponent } from '../../../../apps/customer-portal/src/app/pages/dashboard/dashboard-page.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LayoutComponent,
    PageComponent,
  ],
})
export class LayoutModule {}
