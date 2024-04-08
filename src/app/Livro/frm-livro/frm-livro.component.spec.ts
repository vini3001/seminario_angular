import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmLivroComponent } from './frm-livro.component';

describe('FrmLivroComponent', () => {
  let component: FrmLivroComponent;
  let fixture: ComponentFixture<FrmLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrmLivroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrmLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
