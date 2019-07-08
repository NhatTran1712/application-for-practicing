import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { DeviceService } from '../showdevice/device.service';

@Component({
  selector: 'app-importDeviceIpInfor',
  templateUrl: './importDeviceIpInfor.component.html',
  styleUrls: ['./importDeviceIpInfor.component.css']
})
export class ImportDeviceIpInforComponent implements OnInit {
  form: any = {};
  isValid = false;
  deviceIpOutput: any = {};
  isLoadingFailed = true;
  errorMessage: string = '';
  isLogin = false;

  constructor(
    private loginService: LoginService,
    private deviceService: DeviceService
  ) { }

  onSubmit(){
    console.log(this.form);
    this.isValid =
      /^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$/.test(this.form.ip);
    if(this.isValid){
      this.deviceService.getWritedDeviceIpInfor(this.form.ip).subscribe(
        data => {
          console.log(data);
          this.deviceIpOutput = data;
          this.isLoadingFailed = false;
          console.log(this.deviceIpOutput);
        },
        error => {
          console.log(error);
          this.errorMessage = error.error;
          this.isLoadingFailed = true;
        }
      );
    }
  }

  ngOnInit() {
    this.isLogin = this.loginService.isLogin();
  }
}
