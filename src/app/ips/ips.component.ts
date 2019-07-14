import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../showdevice/device.service';

@Component({
  selector: 'app-ips',
  templateUrl: './ips.component.html',
  styleUrls: ['./ips.component.css']
})
export class IpsComponent implements OnInit {
  ips: any;
  isLogin = false;

  constructor(
    private deviceService: DeviceService,
    
  ) { }

  ngOnInit() {

    this.deviceService.getIps().subscribe(
      data => {
        console.log(data);
        this.ips = JSON.parse(JSON.stringify(data));
        console.log(this.ips);
      },
      error => {
        console.log(error);
      }
    );
  }

}
