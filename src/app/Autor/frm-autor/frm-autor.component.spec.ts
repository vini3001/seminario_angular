import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmAutorComponent } from './frm-autor.component';

describe('FrmAutorComponent', () => {
  let component: FrmAutorComponent;
  let fixture: ComponentFixture<FrmAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrmAutorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrmAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
