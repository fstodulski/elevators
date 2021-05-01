import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageGuard implements Resolve<string> {
  constructor(private translocoService: TranslocoService) {}

  public resolve(
    route: ActivatedRouteSnapshot
  ): string | Observable<string> | Promise<string> {
    const lang = route.params?.lang ?? this.translocoService.getDefaultLang();

    if (lang) {
      this.translocoService.setActiveLang(lang);
    }

    return route.params.lang;
  }
}
