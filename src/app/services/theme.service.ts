import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkModeSubject.asObservable();

  isDarkMode() {
    return this.darkMode$;
  }

  setDarkMode(isDarkMode: boolean) {
    // this.darkMode=isDarkMode;
    this.darkModeSubject.next(isDarkMode);

    if (isDarkMode) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    }
  }

  /**
   * Function that toggles the current mode
   * Exposed publicly
   */
  // toggleMode() {
  //   document.body.classList.toggle(Mode.LIGHT);
  //   document.body.classList.toggle(Mode.DARK);
  //   if (this.currentMode === Mode.LIGHT) {
  //     this.updateCurrentMode(Mode.DARK);
  //   } else {
  //     this.updateCurrentMode(Mode.LIGHT);
  //   }
  // }

  constructor() {}
}
