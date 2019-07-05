import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-importDeviceInfor',
  templateUrl: './importDeviceInfor.component.html',
  styleUrls: ['./importDeviceInfor.component.css']
})
export class ImportDeviceInforComponent implements OnInit {
  from: any = {};

  constructor() { }

  onSubmit(){
    console.log(this.from);
  }

  ngOnInit() {
  }

}
