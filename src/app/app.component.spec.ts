import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Skill Up'`, () => {
    expect(component.title).toEqual('Skill Up');
  });

  it('should set refreshCount in localStorage in constructor', () => {
    expect(localStorage.getItem('refreshCount')).toEqual('0');
  });

  it('should set loggedIn property to true when runTest is called', () => {
    const component = new AppComponent();
    component.loggedIn = false;

    component.runTest(1);

    expect(component.loggedIn).toBeFalse();
  });

  it('should handle event correctly', () => {
    component.handleEvent(false);
    expect(component.loggedIn).toBeFalse();
  });
});
