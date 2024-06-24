import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Composant2partenaireComponent } from './composant2partenaire.component';

describe('Composant2partenaireComponent', () => {
  let component: Composant2partenaireComponent;
  let fixture: ComponentFixture<Composant2partenaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Composant2partenaireComponent]
    });
    fixture = TestBed.createComponent(Composant2partenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
