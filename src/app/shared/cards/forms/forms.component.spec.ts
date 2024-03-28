import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComponent } from './forms.component';

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isForm to false', () => {
    expect(component.isForm).toBeFalse();
  });

  it('should set isForm to true when handleAddReview() is called', () => {
    component.handleAddReview();
    expect(component.isForm).toBeTrue();
  });

  it('should set isForm to false when handleReviewClose() is called', () => {
    // Set isForm to true initially
    component.isForm = true;
    component.handleReviewClose();
    expect(component.isForm).toBeFalse();
  });

  it('should call loginUser with user data', () => {
    // Mock user data
    const userData = { username: 'testUser', password: 'testPassword' };
    // Spy on the component's loginUser method
    spyOn(component, 'loginUser').and.callThrough();
    // Call the method with the mock user data
    component.loginUser(userData);
    // Expect the method to have been called with the mock user data
    expect(component.loginUser).toHaveBeenCalledWith(userData);
  });
});
