import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathPageComponent } from './path-page.component';

describe('PathPageComponent', () => {
  let component: PathPageComponent;
  let fixture: ComponentFixture<PathPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PathPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PathPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
