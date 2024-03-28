import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BatchCardComponent } from './batch-card.component';
import { MiscellaneousService } from 'src/app/services/miscellaneous.service';
import { Router } from '@angular/router';

describe('BatchCardComponent', () => {
  let component: BatchCardComponent;
  let fixture: ComponentFixture<BatchCardComponent>;
  let router: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatchCardComponent],
      providers: [
        MiscellaneousService,
        { provide: Router, useClass: MockRouter }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchCardComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default index and progress values', () => {
    expect(component.index).toEqual(0);
    expect(component.progress).toEqual(0);
  });

  it('should update isProfile based on the router url', () => {
    (router as MockRouter).setUrl('user');
    component.ngOnInit();
    expect(component.isProfile).toBe(true);
  });

  it('should not update isProfile based on the router url', () => {
    (router as MockRouter).setUrl('batch');
    component.ngOnInit();
    expect(component.isProfile).toBe(false);
  });

  it('should have default batchData values', () => {
    expect(component.batchData).toEqual({
      id: 0,
      name: '',
      createdBy: {
        id: 0,
        name: '',
        imageUrl: '',
        email: '',
        isActive: false,
      },
      createdAt: '',
      endDate: '',
      streamName: '',
      noOfTrainers: 0,
      noOfStudents: 0,
      noOfPaths: 0,
      isAccessible: false,
      startDate: '',
      stream: {
        streamId: 0,
        streamName: '',
      },
      progress: 10,
    });
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
