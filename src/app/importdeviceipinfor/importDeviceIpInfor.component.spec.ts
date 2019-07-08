import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDeviceIpInforComponent } from './importDeviceIpInfor.component';

describe('ImportDeviceInforComponent', () => {
  let component: ImportDeviceIpInforComponent;
  let fixture: ComponentFixture<ImportDeviceIpInforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportDeviceIpInforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportDeviceIpInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
