import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscandoComponent } from './buscando.component';

describe('BuscandoComponent', () => {
  let component: BuscandoComponent;
  let fixture: ComponentFixture<BuscandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
