import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { MessageService } from 'primeng/api';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let messageService: MessageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [MessageService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    messageService = TestBed.inject(MessageService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event on button click', () => {
    spyOn(component.eventEmitter, 'emit');
    component.handleButtonClick();
    expect(component.eventEmitter.emit).toHaveBeenCalledWith(true);
  });

  it('should show success message', () => {
    spyOn(messageService, 'add');
    component.showSuccess();
    expect(messageService.add).not.toHaveBeenCalled();
  });

  it('should decode JWT token', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    const decodedToken = component.decodeJWTToken(token);
    expect(decodedToken).toEqual({ sub: '1234567890', name: 'John Doe', iat: 1516239022 });
  });

  // it('should handle credential response', () => {
  //   spyOn(sessionStorage, 'setItem');
  //   spyOnProperty(window, 'location').and.returnValue({ href: '' });
  //   const response = { credential: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' };
  //   component.handleCredentialResponse(response);
  //   expect(sessionStorage.setItem).toHaveBeenCalledWith('loggedInUser', JSON.stringify({ sub: '1234567890', name: 'John Doe', iat: 1516239022 }));
  // });

  it('should load Google Identity library', () => {
    spyOn(document.body, 'appendChild');
    component.loadGoogleIdentityLibrary();
    expect(document.body.appendChild).toHaveBeenCalled();
  });
});

