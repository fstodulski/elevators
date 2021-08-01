import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPreviewCardComponent } from './company-preview-card.component';

describe('CompanyPreviewCardComponent', () => {
  let component: CompanyPreviewCardComponent;
  let fixture: ComponentFixture<CompanyPreviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyPreviewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyPreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
