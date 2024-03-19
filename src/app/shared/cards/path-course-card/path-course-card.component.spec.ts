import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathCourseCardComponent } from './path-course-card.component';

describe('PathCourseCardComponent', () => {
  let component: PathCourseCardComponent;
  let fixture: ComponentFixture<PathCourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PathCourseCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PathCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
