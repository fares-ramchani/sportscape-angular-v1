import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComp2Component } from './carousel-comp2.component';

describe('CarouselComp2Component', () => {
  let component: CarouselComp2Component;
  let fixture: ComponentFixture<CarouselComp2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselComp2Component]
    });
    fixture = TestBed.createComponent(CarouselComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
