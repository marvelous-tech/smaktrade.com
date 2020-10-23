import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenRoomComponent } from './women-room.component';

describe('WomenRoomComponent', () => {
  let component: WomenRoomComponent;
  let fixture: ComponentFixture<WomenRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
