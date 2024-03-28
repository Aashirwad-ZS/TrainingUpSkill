import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeToggleComponent } from './header/theme-toggle/theme-toggle.component';
import { MatIconModule } from '@angular/material/icon';
import { ThemeToggleTextComponent } from './header/theme-toggle-text/theme-toggle-text.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ThemeToggleComponent,
    ThemeToggleTextComponent,
  ],
  imports: [CommonModule, RouterModule, MatIconModule,FormsModule],
  exports: [HeaderComponent, FooterComponent],
})
export class HeaderFooterModule {}
