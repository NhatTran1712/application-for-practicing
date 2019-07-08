import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDeviceIpConfigComponent } from './importDeviceIpConfig.component';

describe('InputDeviceIpComponent', () => {
  let component: ImportDeviceIpConfigComponent;
  let fixture: ComponentFixture<ImportDeviceIpConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportDeviceIpConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportDeviceIpConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
