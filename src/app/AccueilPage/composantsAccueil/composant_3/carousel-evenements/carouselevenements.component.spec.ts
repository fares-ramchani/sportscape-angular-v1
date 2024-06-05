import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselevenementsComponent } from './carouselevenements.component';

describe('CarouselevenementsComponent', () => {
  let component: CarouselevenementsComponent;
  let fixture: ComponentFixture<CarouselevenementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselevenementsComponent]
    });
    fixture = TestBed.createComponent(CarouselevenementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
