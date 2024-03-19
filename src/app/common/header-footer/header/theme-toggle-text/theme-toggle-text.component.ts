import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme-toggle-text',
  templateUrl: './theme-toggle-text.component.html',
  styleUrls: ['./theme-toggle-text.component.sass'],
})
export class ThemeToggleTextComponent implements OnInit {
  isDarkMode: boolean = false;

  constructor(private themeService: ThemeService) {
    document.body.classList.add('light-theme');
    this.themeService.darkMode$.subscribe((value) => {
      this.isDarkMode = value;
    });
  }
  ngOnInit(): void {}
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkMode(this.isDarkMode);
  }
}
