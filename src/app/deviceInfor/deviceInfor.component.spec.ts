import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceInforComponent } from './deviceInfor.component';

describe('DeviceInforComponent', () => {
  let component: DeviceInforComponent;
  let fixture: ComponentFixture<DeviceInforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceInforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
