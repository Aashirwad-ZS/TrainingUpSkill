import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameInfoCardComponent } from '../name-info-card/name-info-card.component';

describe('NameInfoCardComponent', () => {
  let component: NameInfoCardComponent;
  let fixture: ComponentFixture<NameInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NameInfoCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NameInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
