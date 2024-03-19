import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterWrapperComponent } from './chapter-wrapper.component';

describe('ChapterWrapperComponent', () => {
  let component: ChapterWrapperComponent;
  let fixture: ComponentFixture<ChapterWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChapterWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChapterWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
