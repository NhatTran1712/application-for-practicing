import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceIpConfigComponent } from './deviceIpConfig.component';

describe('DevicesComponent', () => {
  let component: DeviceIpConfigComponent;
  let fixture: ComponentFixture<DeviceIpConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceIpConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceIpConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
