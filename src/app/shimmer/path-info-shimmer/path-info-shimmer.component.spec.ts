import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathInfoShimmerComponent } from './path-info-shimmer.component';

describe('PathInfoShimmerComponent', () => {
  let component: PathInfoShimmerComponent;
  let fixture: ComponentFixture<PathInfoShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathInfoShimmerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathInfoShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
