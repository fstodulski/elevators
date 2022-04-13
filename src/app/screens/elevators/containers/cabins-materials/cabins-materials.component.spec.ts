import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinsMaterialsComponent } from './cabins-materials.component';

describe('CabinsMaterialsComponent', () => {
  let component: CabinsMaterialsComponent;
  let fixture: ComponentFixture<CabinsMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [CabinsMaterialsComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinsMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
