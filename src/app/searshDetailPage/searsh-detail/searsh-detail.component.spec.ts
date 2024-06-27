import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearshDetailComponent } from './searsh-detail.component';

describe('SearshDetailComponent', () => {
  let component: SearshDetailComponent;
  let fixture: ComponentFixture<SearshDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearshDetailComponent]
    });
    fixture = TestBed.createComponent(SearshDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
