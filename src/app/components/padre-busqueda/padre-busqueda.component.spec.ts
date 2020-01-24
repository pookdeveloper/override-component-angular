import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreBusquedaComponent } from './padre-busqueda.component';

describe('PadreBusquedaComponent', () => {
  let component: PadreBusquedaComponent;
  let fixture: ComponentFixture<PadreBusquedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreBusquedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
