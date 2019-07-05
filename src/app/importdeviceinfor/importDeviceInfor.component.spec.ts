import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDeviceInforComponent } from './importDeviceInfor.component';

describe('ImportDeviceInforComponent', () => {
  let component: ImportDeviceInforComponent;
  let fixture: ComponentFixture<ImportDeviceInforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportDeviceInforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportDeviceInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
