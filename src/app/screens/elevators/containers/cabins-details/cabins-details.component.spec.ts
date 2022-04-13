import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinsDetailsComponent } from './cabins-details.component';

describe('CabinsDetailsComponent', () => {
  let component: CabinsDetailsComponent;
  let fixture: ComponentFixture<CabinsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [CabinsDetailsComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
