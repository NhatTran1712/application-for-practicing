import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { DeviceService } from '../showdevice/device.service';

@Component({
  selector: 'app-deviceIpInfor',
  templateUrl: './deviceIpInfor.component.html',
  styleUrls: ['./deviceIpInfor.component.css']
})
export class DeviceIpInforComponent implements OnInit {
  deviceIpInforOutput: any;
  isLoadingFailed = false;
  isLogin = false;
  errorMessage: string = '';

  constructor(
    private loginService: LoginService,
    private deviceService: DeviceService
  ) { }
  
  loadDeviceIpInforOutput(): void{
    if(this.isLogin){
      this.deviceService.getDeviceIpInfor().subscribe(
        data => {
          console.log(data);
          this.deviceIpInforOutput = data;
          this.isLoadingFailed = false;
          console.log(this.deviceIpInforOutput);
        },
        error => {
          this.errorMessage = error.error;
          this.isLoadingFailed = true;
          console.log(this.errorMessage);
        }
      );
    }
  }

  ngOnInit() {
    this.isLogin = this.loginService.isLogin();
    this.loadDeviceIpInforOutput();
  }
}
