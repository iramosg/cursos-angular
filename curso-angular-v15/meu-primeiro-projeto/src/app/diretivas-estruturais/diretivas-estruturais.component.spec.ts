import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasEstruturaisComponent } from './diretivas-estruturais.component';

describe('DiretivasEstruturaisComponent', () => {
  let component: DiretivasEstruturaisComponent;
  let fixture: ComponentFixture<DiretivasEstruturaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivasEstruturaisComponent]
    });
    fixture = TestBed.createComponent(DiretivasEstruturaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
