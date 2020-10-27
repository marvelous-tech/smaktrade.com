import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompnayFeaturesComponent } from './compnay-features.component';

describe('CompnayFeaturesComponent', () => {
  let component: CompnayFeaturesComponent;
  let fixture: ComponentFixture<CompnayFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompnayFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompnayFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
