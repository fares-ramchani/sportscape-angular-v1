import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportEntreprisecomposant1Component } from './sport-entreprisecomposant1.component';

describe('SportEntreprisecomposant1Component', () => {
  let component: SportEntreprisecomposant1Component;
  let fixture: ComponentFixture<SportEntreprisecomposant1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportEntreprisecomposant1Component]
    });
    fixture = TestBed.createComponent(SportEntreprisecomposant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
