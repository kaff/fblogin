import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {concat, concatMap, tap} from "rxjs";
import {Inject, Injectable} from "@angular/core";
import {CONFIG} from "../../config.token";

@Injectable()
export class HttpFbService {

  constructor(
    private _httpClient: HttpClient,
    @Inject(CONFIG) private _config: any,
  ) {
  }

  setUpSubscriptions(authToken: string) {
    return this._getPageIds(authToken).pipe(
      tap(pages => {
        console.log('pages', pages);
      }),
      concatMap((pages: any) => this._setWebhook(pages.data[0].id, authToken))
    );
  }

  private _getPageIds(authToken: string) {
    return this._httpClient.get('https://graph.facebook.com/v13.0/me/accounts', {
      params: new HttpParams({
        fromObject: {
          'access_token': authToken
        }
      })
    })
  }

  private _setWebhook(pageId: string, authToken: string) {
    // let url = new URL(`${config.apiUrl}/${config.appId}/subscriptions`);
    // url.search = new URLSearchParams({
    //   access_token: `${config.appId}|${config.appSecret}`,
    //   object: "page",
    //   callback_url: config.webhookUrl,
    //   verify_token: config.verifyToken,
    //   fields: fields,
    //   include_values: "true"
    // });

    const fields = "messages,messaging_postbacks,messaging_optins,message_deliveries,messaging_referrals";

    console.log('webhook')

    return this._httpClient.post(`https://graph.facebook.com/v13.0/${this._config.appId}/subscriptions`, {
      access_token: `${this._config.appId}|${this._config.appSecret}`,
      object: "page",
      callback_url: this._config.botAppWebhookUrl,
      verify_token: this._config.verifyToken,
      fields: fields,
      include_values: "true",
    },{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
}

// curl -i -X GET \
//  "https://graph.facebook.com/v13.0/me/accounts?access_token=EAANQlaW2wggBAEoZBWqua4kwtloeXsmonMCucHZBAhytbmZBMusIUsmZCNWukZCL7zqj5nZAnHt43mWzW1hsHogAK20sXt361jaLVijgJ8MER7g3oPjIfaC7P0t2vDnYIuA0KSM1Ocmfapm3ChRM5ournQshiTUIz12ZAZAZCKDF1qE9C4aHWLB1AvxfVv4SVakNexFjJNDZBZBnAV41RQ6n7vP"
