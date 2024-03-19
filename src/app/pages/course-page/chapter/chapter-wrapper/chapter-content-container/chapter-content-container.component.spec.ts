import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterContentContainerComponent } from './chapter-content-container.component';

describe('ChapterContentContainerComponent', () => {
  let component: ChapterContentContainerComponent;
  let fixture: ComponentFixture<ChapterContentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChapterContentContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChapterContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
