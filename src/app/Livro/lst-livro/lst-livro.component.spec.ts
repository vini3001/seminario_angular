import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LstLivroComponent } from './lst-livro.component';

describe('LstLivroComponent', () => {
  let component: LstLivroComponent;
  let fixture: ComponentFixture<LstLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LstLivroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LstLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
