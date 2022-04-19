import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer.component";
import { CommonModule } from "@angular/common";
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [CommonModule, MatDividerModule],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterComponentModule {}
