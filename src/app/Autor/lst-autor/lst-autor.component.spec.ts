import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LstAutorComponent } from './lst-autor.component';

describe('LstAutorComponent', () => {
  let component: LstAutorComponent;
  let fixture: ComponentFixture<LstAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LstAutorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LstAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
