import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceIpsComponent } from './deviceIps.component';

describe('DeviceipsComponent', () => {
  let component: DeviceIpsComponent;
  let fixture: ComponentFixture<DeviceIpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceIpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceIpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
