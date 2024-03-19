import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PathCardComponent } from './path-card.component';

describe('PathComponent', () => {
  let component: PathCardComponent;
  let fixture: ComponentFixture<PathCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PathCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PathCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
