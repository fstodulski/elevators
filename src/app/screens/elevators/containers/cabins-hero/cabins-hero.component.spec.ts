import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinsHeroComponent } from './cabins-hero.component';

describe('CabinsHeroComponent', () => {
  let component: CabinsHeroComponent;
  let fixture: ComponentFixture<CabinsHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinsHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinsHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
