import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvandrefComponent } from './evandref.component';

describe('EvandrefComponent', () => {
  let component: EvandrefComponent;
  let fixture: ComponentFixture<EvandrefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvandrefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvandrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
