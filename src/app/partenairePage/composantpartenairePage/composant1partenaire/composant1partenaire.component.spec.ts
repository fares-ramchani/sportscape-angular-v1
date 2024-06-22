import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Composant1partenaireComponent } from './composant1partenaire.component';

describe('Composant1partenaireComponent', () => {
  let component: Composant1partenaireComponent;
  let fixture: ComponentFixture<Composant1partenaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Composant1partenaireComponent]
    });
    fixture = TestBed.createComponent(Composant1partenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
