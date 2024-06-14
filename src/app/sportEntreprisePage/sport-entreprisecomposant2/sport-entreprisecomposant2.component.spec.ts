import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportEntreprisecomposant2Component } from './sport-entreprisecomposant2.component';

describe('SportEntreprisecomposant2Component', () => {
  let component: SportEntreprisecomposant2Component;
  let fixture: ComponentFixture<SportEntreprisecomposant2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportEntreprisecomposant2Component]
    });
    fixture = TestBed.createComponent(SportEntreprisecomposant2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
