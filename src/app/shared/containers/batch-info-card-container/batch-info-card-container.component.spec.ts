import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchInfoCardContainerComponent } from './batch-info-card-container.component';

describe('BatchInfoCardContainerComponent', () => {
  let component: BatchInfoCardContainerComponent;
  let fixture: ComponentFixture<BatchInfoCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatchInfoCardContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BatchInfoCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
