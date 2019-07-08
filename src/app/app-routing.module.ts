import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { UsersComponent } from './users/users.component';
import { ImportDeviceIpConfigComponent } from './importdeviceipconfig/importDeviceIpConfig.component';
import { CustomerComponent } from './customer/customer.component';
import { ImportDeviceIpInforComponent } from './importdeviceipinfor/importDeviceIpInfor.component';
import { DeviceIpConfigComponent } from './deviceipconfig/deviceIpConfig.component';
import { DeviceIpInforComponent } from './deviceipinfor/deviceIpInfor.component';
 
const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'customer',
        component: CustomerComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'user/:user_id',
        component: UserComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'devices/ipconfig',
        component: DeviceIpConfigComponent
    },
    {
        path: 'devices/ipinfor',
        component: DeviceIpInforComponent
    },
    {
        path: 'devices/import/ipconfig',
        component: ImportDeviceIpConfigComponent
    },
    {
        path: 'devices/import/ipinfor',
        component: ImportDeviceIpInforComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }