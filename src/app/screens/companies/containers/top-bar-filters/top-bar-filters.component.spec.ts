import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarFiltersComponent } from './top-bar-filters.component';

describe('TopBarFiltersComponent', () => {
  let component: TopBarFiltersComponent;
  let fixture: ComponentFixture<TopBarFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [TopBarFiltersComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
