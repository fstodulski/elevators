import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MobileNavigationService {
  private readonly status: BehaviorSubject<boolean>;

  constructor() {
    this.status = new BehaviorSubject<boolean>(false);
  }

  public toggleMobileMenu(): void {
    this.status.next(!this.status.getValue());
  }

  public get isOpen$(): Observable<boolean> {
    return this.status.asObservable();
  }
}
