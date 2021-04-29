import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirationsCategoriesComponent } from './inspirations-categories.component';

describe('InspirationsCategoriesComponent', () => {
  let component: InspirationsCategoriesComponent;
  let fixture: ComponentFixture<InspirationsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspirationsCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspirationsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
