import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDeviceIpComponent } from './importDeviceIp.component';

describe('InputDeviceIpComponent', () => {
  let component: ImportDeviceIpComponent;
  let fixture: ComponentFixture<ImportDeviceIpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportDeviceIpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportDeviceIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
