import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/sinupPage/sinup/sinup.component.spec.ts
import { SinupComponent } from './sinup.component';

describe('SinupComponent', () => {
  let component: SinupComponent;
  let fixture: ComponentFixture<SinupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinupComponent]
    });
    fixture = TestBed.createComponent(SinupComponent);
========
import { Etape1Component } from './etape1.component';

describe('Etape1Component', () => {
  let component: Etape1Component;
  let fixture: ComponentFixture<Etape1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Etape1Component]
    });
    fixture = TestBed.createComponent(Etape1Component);
>>>>>>>> origin/ayaHaddad:src/app/searshDetailPage/composantsSearshDetail/lesEtapes/etape1/etape1.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
