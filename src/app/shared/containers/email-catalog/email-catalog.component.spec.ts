import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCatalogComponent } from './email-catalog.component';

describe('EmailCatalogComponent', () => {
  let component: EmailCatalogComponent;
  let fixture: ComponentFixture<EmailCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
