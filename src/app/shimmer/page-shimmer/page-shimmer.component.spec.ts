import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShimmerComponent } from './page-shimmer.component';

describe('PageShimmerComponent', () => {
  let component: PageShimmerComponent;
  let fixture: ComponentFixture<PageShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageShimmerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
