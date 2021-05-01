import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinsRealisationComponent } from './cabins-realisation.component';

describe('CabinsRealisationComponent', () => {
  let component: CabinsRealisationComponent;
  let fixture: ComponentFixture<CabinsRealisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinsRealisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinsRealisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
