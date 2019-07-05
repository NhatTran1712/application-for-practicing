import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { UsersComponent } from './users/users.component';
import { ImportDeviceIpComponent } from './importDeviceIp/importDeviceIp.component';
import { CustomerComponent } from './customer/customer.component';
 
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
        path: 'devices/import/ipconfig',
        component: ImportDeviceIpComponent
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