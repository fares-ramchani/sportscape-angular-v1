import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantspartenaireComponent } from './composantspartenaire.component';

describe('ComposantspartenaireComponent', () => {
  let component: ComposantspartenaireComponent;
  let fixture: ComponentFixture<ComposantspartenaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComposantspartenaireComponent]
    });
    fixture = TestBed.createComponent(ComposantspartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
