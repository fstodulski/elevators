import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken('WINDOW', {
  factory: () => window,
});
