import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShimmerLoadingComponent } from './shimmer-loading.component';

describe('ShimmerLoadingComponent', () => {
  let component: ShimmerLoadingComponent;
  let fixture: ComponentFixture<ShimmerLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShimmerLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShimmerLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set default values for inputs if not provided', () => {
    expect(component.width).toEqual('80%');
    expect(component.height).toEqual('12px');
    expect(component.shape).toEqual('rect');
    expect(component.borderRadius).toEqual('5px');
    expect(component.direction).toEqual('rtl');
  });

  it('should correctly compute shimmer height based on shape', () => {
    component.shape = 'circle';
    expect(component.shimmerHeight).toEqual(component.width);

    component.shape = 'square';
    expect(component.shimmerHeight).toEqual(component.width);

    component.shape = 'rect';
    expect(component.shimmerHeight).toEqual(component.height);
  });

  it('should correctly compute shimmer border radius based on shape', () => {
    component.shape = 'circle';
    expect(component.shimmerBorderRadius).toEqual('50%');

    component.shape = 'square';
    expect(component.shimmerBorderRadius).toEqual('5px'); // Assuming default value of borderRadius is used

    component.shape = 'rect';
    expect(component.shimmerBorderRadius).toEqual(component.borderRadius);

    // Add additional test cases as needed
  });

  it('should bind correct class to host element', () => {
    const hostElement = fixture.nativeElement;
    expect(hostElement.classList.contains('shimmer-loading')).toBeTruthy();
  });

  // Add more tests as needed
});
