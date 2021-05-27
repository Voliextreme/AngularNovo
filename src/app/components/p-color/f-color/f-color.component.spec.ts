import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FColorComponent } from './f-color.component';

describe('FColorComponent', () => {
  let component: FColorComponent;
  let fixture: ComponentFixture<FColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
