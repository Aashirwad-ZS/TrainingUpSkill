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



  it('should initialize isResponsive to false by default', () => {
    expect(component.isResponsive).toBeFalse();
  });

  it('should initialize isResponsive to true if window width is less than or equal to 768', () => {
    const event = new Event('resize');
    spyOnProperty(window, 'innerWidth').and.returnValue(768);
    component.onResize(event);
    expect(component.isResponsive).toBeTrue();
  });

  it('should set isResponsive to true when window width is less than or equal to 768', () => {
    spyOnProperty(window, 'innerWidth').and.returnValue(768);
    component.ngOnInit();
    expect(component.isResponsive).toBeTrue();
  });

  it('should set isResponsive to false when window width is greater than 768', () => {
    spyOnProperty(window, 'innerWidth').and.returnValue(769);
    component.ngOnInit();
    expect(component.isResponsive).toBeFalse();
  });
});
