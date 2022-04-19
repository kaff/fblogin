import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from "@glow-workspace/layout";
import {PagesModule} from "./pages/pages.module";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {FooterComponentModule, HeaderComponentModule, SidebarComponentModule} from "@glow-workspace/shared";
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    PagesModule,
    RouterModule,
    HeaderComponentModule,
    FooterComponentModule,
    SidebarComponentModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
