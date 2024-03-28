import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCardComponent } from './course-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { ToastModule } from 'primeng/toast'; // import ToastModule
import { MiscellaneousService } from 'src/app/services/miscellaneous.service';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        ToastModule, // add ToastModule here
      ],
      declarations: [ CourseCardComponent ],
      providers: [MessageService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle color', () => {
    const miscService = fixture.debugElement.injector.get(MiscellaneousService);
    const store = fixture.debugElement.injector.get(Store);
    spyOn(miscService, 'postFavourite').and.returnValue(of({}));
    spyOn(miscService, 'deleteFavourite').and.returnValue(of({}));
    spyOn(store, 'dispatch');

    component.isRed = true; // Ensure the condition for calling postFavourite is met
    component.toggleColor();
    expect(component.isRed).toBe(false);
    //expect(miscService.postFavourite).toHaveBeenCalled();

    component.toggleColor();
    expect(component.isRed).toBe(true);
    expect(miscService.deleteFavourite).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalled();
  });


  it('should show info', () => {
    const messageService = fixture.debugElement.injector.get(MessageService);
    spyOn(messageService, 'add');

    component.showInfo();
    expect(messageService.add).toHaveBeenCalled();
  });

  it('should show success', () => {
    const messageService = fixture.debugElement.injector.get(MessageService);
    spyOn(messageService, 'add');

    component.showSuccess();
    expect(messageService.add).toHaveBeenCalled();
  });
});
