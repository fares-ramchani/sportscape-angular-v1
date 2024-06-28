import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleshTopComponent } from './flesh-top.component';

describe('FleshTopComponent', () => {
  let component: FleshTopComponent;
  let fixture: ComponentFixture<FleshTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FleshTopComponent]
    });
    fixture = TestBed.createComponent(FleshTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
