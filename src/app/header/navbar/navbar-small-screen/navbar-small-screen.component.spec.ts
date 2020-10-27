import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSmallScreenComponent } from './navbar-small-screen.component';

describe('NavbarSmallScreenComponent', () => {
  let component: NavbarSmallScreenComponent;
  let fixture: ComponentFixture<NavbarSmallScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarSmallScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSmallScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
