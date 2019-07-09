import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { DeviceService } from '../showdevice/device.service';

@Component({
  selector: 'app-deviceIps',
  templateUrl: './deviceIps.component.html',
  styleUrls: ['./deviceIps.component.css']
})
export class DeviceIpsComponent implements OnInit {
  isLogin = false;
  form: any = {};
  isValid = false;
  isLoadingFailed = true;
  deviceIpsInfor: any = {};
  errorMessage: string = 'waiting...';

  constructor(
    private loginService: LoginService,
    private deviceService: DeviceService
  ) { }

  checkValid(): void {
    let rangeIp: string = '';
    let start: number;
    let end: number;
    let rangeBegin: number;
    let rangeEnd: number;
    
    this.isValid =
    /^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[-]([0-9]{1,3})$/.test(this.form.rangeIp);
    if(this.isValid){
      rangeIp = this.form.rangeIp;
      console.log(rangeIp);
      start = rangeIp.lastIndexOf(".");
      end = rangeIp.indexOf("-");
      console.log(start);
      console.log(end);
      rangeBegin = parseInt(rangeIp.substring(start+1,end));
      rangeEnd = parseInt(rangeIp.slice(end+1));
      console.log(rangeBegin);
      console.log(rangeEnd);
      if(rangeBegin>=rangeEnd){
        this.isValid = false;
      }
    }
    console.log(this.isValid);
  }

  onSubmit(){
    console.log(this.form);
    this.checkValid();
    if(this.isValid){
      this.deviceService.getDeviceIpsInfor(this.form.rangeIp).subscribe(
        data => {
          console.log(data);
          this.deviceIpsInfor = data;
          this.isLoadingFailed = false;
          console.log(this.deviceIpsInfor);
        },
        error => {
          console.log(this.errorMessage);
          this.errorMessage = error.error;
          console.log(this.errorMessage);
          this.isLoadingFailed = true;
        }
      );
    }
  }

  ngOnInit() {
    this.isLogin = this.loginService.isLogin();
  }

}
