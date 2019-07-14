import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';
import { LogoutComponent } from './logout/logout.component';
import { UsersComponent } from './users/users.component';
import { DeviceIpConfigComponent } from './deviceipconfig/deviceIpConfig.component';
import { DeviceIpInforComponent } from './deviceipinfor/deviceIpInfor.component';
import { ImportDeviceIpConfigComponent } from './importdeviceipconfig/importDeviceIpConfig.component';
import { CustomerComponent } from './customer/customer.component';
import { ImportDeviceIpInforComponent } from './importdeviceipinfor/importDeviceIpInfor.component';
import { DeviceIpsComponent } from './deviceips/deviceIps.component';
import { IpsComponent } from './ips/ips.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    LogoutComponent,
    UserComponent,
    UsersComponent,
    DeviceIpConfigComponent,
    DeviceIpInforComponent,
    ImportDeviceIpConfigComponent,
    CustomerComponent,
    ImportDeviceIpInforComponent,
    DeviceIpsComponent,
    IpsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
