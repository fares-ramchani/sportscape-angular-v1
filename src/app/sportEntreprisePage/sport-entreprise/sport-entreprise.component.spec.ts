import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportEntrepriseComponent } from './sport-entreprise.component';

describe('SportEntrepriseComponent', () => {
  let component: SportEntrepriseComponent;
  let fixture: ComponentFixture<SportEntrepriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportEntrepriseComponent]
    });
    fixture = TestBed.createComponent(SportEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
