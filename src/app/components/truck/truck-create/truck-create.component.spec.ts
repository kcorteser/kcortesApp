import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckCreateComponent } from './truck-create.component';

describe('TruckCreateComponent', () => {
  let component: TruckCreateComponent;
  let fixture: ComponentFixture<TruckCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
