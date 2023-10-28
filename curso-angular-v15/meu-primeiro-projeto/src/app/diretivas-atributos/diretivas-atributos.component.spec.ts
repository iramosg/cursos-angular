import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasAtributosComponent } from './diretivas-atributos.component';

describe('DiretivasAtributosComponent', () => {
  let component: DiretivasAtributosComponent;
  let fixture: ComponentFixture<DiretivasAtributosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivasAtributosComponent]
    });
    fixture = TestBed.createComponent(DiretivasAtributosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
