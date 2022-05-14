import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@glow-workspace/layout';
import {PagesModule} from './pages/pages.module';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {FooterComponentModule, HeaderComponentModule, SidebarComponentModule} from "@glow-workspace/shared";
import {MatSidenavModule} from '@angular/material/sidenav';
import {FacebookLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from "@abacritt/angularx-social-login";
import {CONFIG} from "./config.token";
import { environment } from './../environments/environment';

// import { SocialAuthServiceConfig } from 'angularx-social-login/socialauth.service';

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
    SocialLoginModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('933028590699016', {
              scope: 'email,pages_messaging,pages_messaging_subscriptions,pages_show_list, pages_read_user_content,pages_manage_engagement',
              // scope: 'email,pages_messaging,pages_messaging_subscriptions,pages_show_list,manage_pages',
              return_scopes: true,
              enable_profile_selector: true
            }),
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    {
      provide: CONFIG,
      useValue: environment
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
