import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubscribeService {
  private readonly mailChimpEndpoint =
    'https://gmail.us14.list-manage.com/subscribe/post?u=1c633aedee7ca4c18e19a286a&amp;id=d9af2460bc';
  constructor(private readonly http: HttpClient) {}

  public subscribeToList(data: string): any {
    const params = new HttpParams().set('EMAIL', data);
    const mailChimpUrl = `${this.mailChimpEndpoint}&${params.toString()}`;
    console.log(mailChimpUrl);
    return this.http.jsonp(mailChimpUrl, 'c');
  }
}
