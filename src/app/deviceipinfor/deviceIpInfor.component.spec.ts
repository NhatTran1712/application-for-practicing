import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceIpInforComponent } from './deviceIpInfor.component';

describe('DeviceInforComponent', () => {
  let component: DeviceIpInforComponent;
  let fixture: ComponentFixture<DeviceIpInforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceIpInforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceIpInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
