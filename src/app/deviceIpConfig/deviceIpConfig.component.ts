import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { DeviceService } from '../showdevice/device.service';

@Component({
  selector: 'app-deviceIpConfig',
  templateUrl: './deviceIpConfig.component.html',
  styleUrls: ['./deviceIpConfig.component.css']
})
export class DeviceIpConfigComponent implements OnInit {
  deviceIpConfigOutput: any;
  isLoadingFailed = false;
  isLogin = false;
  errorMessage = '';

  constructor(
    private loginService: LoginService,
    private deviceService: DeviceService
  ) {}

  loadDeviceIpConfigOutput(): void{
    if(this.loginService.isLogin()){
      this.deviceService.getDeviceIp().subscribe(
        data => {
          console.log(data);
          this.deviceIpConfigOutput = data;
          console.log(this.deviceIpConfigOutput);
        },
        error => {
          this.errorMessage = error.error;
          this.isLoadingFailed = true;
          console.log(this.errorMessage);
        }
      );
      this.isLogin = true;
    }
  }

  ngOnInit() {
    this.loadDeviceIpConfigOutput();
  }
}
