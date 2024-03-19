import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSectionContainerComponent } from './all-section-container.component';

describe('AllSectionContainerComponent', () => {
  let component: AllSectionContainerComponent;
  let fixture: ComponentFixture<AllSectionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllSectionContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AllSectionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
