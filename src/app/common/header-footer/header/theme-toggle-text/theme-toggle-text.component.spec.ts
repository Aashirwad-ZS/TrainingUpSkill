import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeToggleTextComponent } from './theme-toggle-text.component';

describe('ThemeToggleTextComponent', () => {
  let component: ThemeToggleTextComponent;
  let fixture: ComponentFixture<ThemeToggleTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemeToggleTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeToggleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
