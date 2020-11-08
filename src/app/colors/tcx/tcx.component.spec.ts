import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcxComponent } from './tcx.component';

describe('TcxComponent', () => {
  let component: TcxComponent;
  let fixture: ComponentFixture<TcxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
