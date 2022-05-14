import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {SocialUser, FacebookLoginProvider, SocialAuthService } from "@abacritt/angularx-social-login";
import {HttpFbService} from "./http-fb.service";

@Component({
  selector: 'glo-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageComponent implements OnInit {

  isLoggedin?: boolean = undefined;
  socialUser!: SocialUser;

  constructor(private socialAuthService: SocialAuthService, private _fbClient: HttpFbService) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      console.log(user);
      this._fbClient.setUpSubscriptions(user.authToken).subscribe();
      this.socialUser = user;
      this.isLoggedin = user != null;
    });

  }
  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.socialAuthService.signOut();
  }
}
