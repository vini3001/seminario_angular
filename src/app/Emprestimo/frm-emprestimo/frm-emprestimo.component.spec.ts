import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmEmprestimoComponent } from './frm-emprestimo.component';

describe('FrmEmprestimoComponent', () => {
  let component: FrmEmprestimoComponent;
  let fixture: ComponentFixture<FrmEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrmEmprestimoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrmEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
