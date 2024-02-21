import { Routes, mapToCanActivate } from '@angular/router';
import { DisplaycontactComponent } from './displaycontact/displaycontact.component';
import { LandingpagetwoComponent } from './landingpagetwo/landingpagetwo.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ViewpageComponent } from './viewpage/viewpage.component';
import { ServicecomponentComponent } from './servicecomponent/servicecomponent.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { studentGuard } from './guards/student.guard';

export const routes: Routes = [
    {path:'home', component:LandingpagetwoComponent},
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'view', component:ViewpageComponent},
    {path:'service', component:ServicecomponentComponent},
    {path:'signup', component:SignupComponent},
    {path:'sigin', component:SigninComponent},
    {path:'sample', children:[
        {path:'',component:DisplaycontactComponent},
        {path:'deposit', component:LandingpagetwoComponent},
        {path:':i', component:DisplaycontactComponent}
    ]},
    {path:'dashboard', children:[
        {path:'',component:DashboardComponent},
        {path:'setting',component:SettingComponent},
    ],canActivate:[studentGuard]},

    {path:'display/:name', component:DisplaycontactComponent},
    {path:'**', component:ErrorpageComponent},
    
];
