import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeService]
    });
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initially be in light mode', () => {
    expect(service.isDarkMode()).toBeTruthy();
  });

  it('should be able to set dark mode', () => {
    service.setDarkMode(true);
    expect(service.isDarkMode()).toBeTruthy();
  });

  it('should apply dark theme CSS class when dark mode is set', () => {
    service.setDarkMode(true);
    expect(document.body.classList.contains('dark-theme')).toBeTruthy();
  });

  it('should remove dark theme CSS class when dark mode is unset', () => {
    service.setDarkMode(true);
    service.setDarkMode(false);
    expect(document.body.classList.contains('dark-theme')).toBeFalsy();
  });

  it('should apply light theme CSS class when dark mode is unset', () => {
    service.setDarkMode(true);
    service.setDarkMode(false);
    expect(document.body.classList.contains('light-theme')).toBeTruthy();
  });
});

