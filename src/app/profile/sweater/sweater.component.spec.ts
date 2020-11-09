import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweaterComponent } from './sweater.component';

describe('SweaterComponent', () => {
  let component: SweaterComponent;
  let fixture: ComponentFixture<SweaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SweaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
