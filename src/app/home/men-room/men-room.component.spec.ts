import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenRoomComponent } from './men-room.component';

describe('MenRoomComponent', () => {
  let component: MenRoomComponent;
  let fixture: ComponentFixture<MenRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
