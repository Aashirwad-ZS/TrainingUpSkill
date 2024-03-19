import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAboutSectionComponent } from './course-about-section.component';

describe('CourseAboutSectionComponent', () => {
  let component: CourseAboutSectionComponent;
  let fixture: ComponentFixture<CourseAboutSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseAboutSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseAboutSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
