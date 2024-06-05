import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselActivitesComponent } from './carousel-activites.component';

describe('CarouselActivitesComponent', () => {
  let component: CarouselActivitesComponent;
  let fixture: ComponentFixture<CarouselActivitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselActivitesComponent]
    });
    fixture = TestBed.createComponent(CarouselActivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
