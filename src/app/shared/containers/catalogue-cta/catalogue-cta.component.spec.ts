import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueCtaComponent } from './catalogue-cta.component';

describe('CatalogueCtaComponent', () => {
  let component: CatalogueCtaComponent;
  let fixture: ComponentFixture<CatalogueCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [CatalogueCtaComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
