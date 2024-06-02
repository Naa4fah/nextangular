import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DepartmentComponent } from './pages/department/department.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:'about-us',component:AboutUsComponent},
    {path:'department',component:DepartmentComponent},
    {path:'contact-us',component:ContactUsComponent}
];
