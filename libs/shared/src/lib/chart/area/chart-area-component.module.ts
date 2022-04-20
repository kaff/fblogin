import { NgModule } from "@angular/core";
import { ChartAreaComponent } from "./chart-area.component";
import { CommonModule } from "@angular/common";
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  imports: [
    CommonModule,
    HighchartsChartModule,
  ],
  declarations: [ChartAreaComponent],
  exports: [ChartAreaComponent]
})
export class ChartAreaComponentModule {}
