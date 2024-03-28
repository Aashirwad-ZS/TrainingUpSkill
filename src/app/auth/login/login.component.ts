import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  HostListener,
} from '@angular/core';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';

declare let window: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  constructor(private messageService: MessageService) {}
  googleClientId = environment.googleClientId;

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    localStorage.setItem('login', 'false');
    this.showSuccess();
  }

  ngOnInit(): void {
    this.loadGoogleIdentityLibrary();
    localStorage.setItem('login', 'true');
    window.handleCredentialResponse = this.handleCredentialResponse.bind(this);
  }
  @Output() eventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleButtonClick(): void {
    this.eventEmitter.emit(true);
  }

  showSuccess(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'LoggedIn',
      detail: 'Loggin  Successful',
    });
  }

  decodeJWTToken(token: string): any {
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleCredentialResponse(response: any): void {
    const responsePayload = this.decodeJWTToken(response.credential);
    sessionStorage.setItem('loggedInUser', JSON.stringify(responsePayload));
    window.location.href = '/dashboard';
  }
  loadGoogleIdentityLibrary() {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }
}
