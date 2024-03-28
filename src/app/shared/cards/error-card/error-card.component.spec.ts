import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorCardComponent } from './error-card.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Title } from 'src/app/constants/enums/title'

describe('ErrorCardComponent', () => {
  let component: ErrorCardComponent;
  let fixture: ComponentFixture<ErrorCardComponent>;
  let store: Store;
  let router: any;
  let messageService: MessageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastModule],
      declarations: [ErrorCardComponent],
      providers: [
        { provide: Store, useValue: { dispatch: () => {} } },
        { provide: Router, useClass: MockRouter },
        { provide: MessageService, useValue: { add: () => {} } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorCardComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    messageService = TestBed.inject(MessageService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default error and title values', () => {
    expect(component.error).toEqual({ message: '', code: 0 });
    expect(component.title).toEqual(Title.PATHS);
  });

  it('should not show info on init', () => {
    spyOn(messageService, 'add');
    component.ngOnInit();
    expect(messageService.add).not.toHaveBeenCalled();
  });

  it('should handle reload based on the router url and title', () => {
    spyOn(store, 'dispatch');
    component.title = Title.COURSES;
    component.handleReload();
    expect(store.dispatch).toHaveBeenCalled();
  });
  
  it('should show info', () => {
    spyOn(messageService, 'add');
    component.showInfo();
    expect(messageService.add).not.toHaveBeenCalled();
  });

  it('should show success', () => {
    spyOn(messageService, 'add');
    component.showSuccess();
    expect(messageService.add).not.toHaveBeenCalled();
  });
});

class MockRouter {
  private _url = '';
  get url() {
    return this._url;
  }
  setUrl(url: string) {
    this._url = url;
  }
}
