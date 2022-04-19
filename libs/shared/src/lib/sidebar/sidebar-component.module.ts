import { NgModule } from "@angular/core";
import { SidebarComponent } from "./sidebar.component";
import { CommonModule } from "@angular/common";
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from "@angular/router";
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [CommonModule, MatDividerModule, MatListModule, RouterModule, MatIconModule],
  declarations: [SidebarComponent],
  exports: [SidebarComponent]
})
export class SidebarComponentModule {}
