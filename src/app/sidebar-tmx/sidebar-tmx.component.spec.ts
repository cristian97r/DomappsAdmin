import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTmxComponent } from './sidebar-tmx.component';

describe('SidebarTmxComponent', () => {
  let component: SidebarTmxComponent;
  let fixture: ComponentFixture<SidebarTmxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarTmxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarTmxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
