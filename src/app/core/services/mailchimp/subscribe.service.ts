import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  mailChimpEndpoint = 'https://us14.api.mailchimp.com/3.0/lists/d9af2460bc';
  constructor(
    private http: HttpClient
  ) { }
  subscribeToList(data: string) {


    const mailchimpFactory = import("@mailchimp/mailchimp_transactional/src/index.js");
    const client = mailchimpFactory("2c5261a5d743779ae1f2e3653fe3d773-us14");

    client.setConfig({
      apiKey: "2c5261a5d743779ae1f2e3653fe3d773-us14",
      server: "us14",
    });
    const response = client.lists.batchListMembers("list_id", {
      members: [{
        email_adresss: data
      }],
    });
    console.log(response);


  }
}
