import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathCourseCardShimmerComponent } from './path-course-card-shimmer.component';

describe('PathCourseCardShimmerComponent', () => {
  let component: PathCourseCardShimmerComponent;
  let fixture: ComponentFixture<PathCourseCardShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathCourseCardShimmerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathCourseCardShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
