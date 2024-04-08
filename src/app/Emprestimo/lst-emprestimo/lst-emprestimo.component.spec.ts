import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LstEmprestimoComponent } from './lst-emprestimo.component';

describe('LstEmprestimoComponent', () => {
  let component: LstEmprestimoComponent;
  let fixture: ComponentFixture<LstEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LstEmprestimoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LstEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
