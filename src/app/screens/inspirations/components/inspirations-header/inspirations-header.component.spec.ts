import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirationsHeaderComponent } from './inspirations-header.component';

describe('InspirationsHeaderComponent', () => {
  let component: InspirationsHeaderComponent;
  let fixture: ComponentFixture<InspirationsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspirationsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspirationsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
