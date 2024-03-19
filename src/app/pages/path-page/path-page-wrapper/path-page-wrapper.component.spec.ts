import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathPageWrapperComponent } from './path-page-wrapper.component';

describe('PathPageWrapperComponent', () => {
  let component: PathPageWrapperComponent;
  let fixture: ComponentFixture<PathPageWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PathPageWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PathPageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
