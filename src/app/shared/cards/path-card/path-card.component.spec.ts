import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PathCardComponent } from './path-card.component';
import { Router } from '@angular/router';
import { RouterLinks } from 'src/app/constants/enums/routerLinks';

describe('PathCardComponent', () => {
  let component: PathCardComponent;
  let fixture: ComponentFixture<PathCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PathCardComponent],
      imports: [RouterTestingModule.withRoutes([])], // Ensure RouterTestingModule is properly configured
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isProfile to true if router URL contains "user"', () => {
    const router = TestBed.inject(Router);
    spyOnProperty(router, 'url', 'get').and.returnValue('/user');
    component.ngOnInit();
    expect(component.isProfile).toBeTrue();
  });

  it('should set isProfile to false if router URL does not contain "user"', () => {
    const router = TestBed.inject(Router);
    spyOnProperty(router, 'url', 'get').and.returnValue('/other-url');
    component.ngOnInit();
    expect(component.isProfile).toBeFalse();
  });

  it('should initialize onGoingFlag to false by default', () => {
    expect(component.onGoingFlag).toBeFalse();
  });

  it('should set RouterLinks property', () => {
    expect(component.RouterLinks).toEqual(RouterLinks);
  });
});
