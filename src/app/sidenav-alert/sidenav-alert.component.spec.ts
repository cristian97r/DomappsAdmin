import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavAlertComponent } from './sidenav-alert.component';

describe('SidenavAlertComponent', () => {
  let component: SidenavAlertComponent;
  let fixture: ComponentFixture<SidenavAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
