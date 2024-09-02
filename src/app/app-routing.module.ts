import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RecatangleComponent } from './recatangle/recatangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { RolldiceComponent } from './rolldice/rolldice.component';
import { DirectivePipesComponent } from './directive-pipes/directive-pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VechilesComponent } from './vechiles/vechiles.component';
import { BankingComponent } from './banking/banking.component';
import { FlipkartstoreComponent } from './flipkartstore/flipkartstore.component';
import { MailComponent } from './mail/mail.component';
import { CreateVechileComponent } from './create-vechile/create-vechile.component';
import { CreateBankComponent } from './create-bank/create-bank.component';
import { StudentComponent } from './student/student.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreatestudentFormComponent } from './createstudent-form/createstudent-form.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { ViewVechileComponent } from './view-vechile/view-vechile.component';
import { ViewBankingComponent } from './view-banking/view-banking.component';
import { CreateUserComponent } from './create-user/create-user.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',canActivate:[AuthenticationGuard],component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RecatangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BMIComponent},
    { path:'rolldice',component:RolldiceComponent},
    {path:'directive-pipes',component:DirectivePipesComponent},
    {path:'employees',component:EmployeesComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'vechile',component:VechilesComponent},
    {path:'banking',component:BankingComponent},
    {path:'flipkartstore',component:FlipkartstoreComponent},
    {path:'mail',component:MailComponent},
    {path:'create-vechile',component:CreateVechileComponent},
    {path:'create-bank',component:CreateBankComponent},
    {path:'student',component:StudentComponent},
    {path:'createstudent-form',component:CreatestudentFormComponent},
    {path:'photo-gallery',component:PhotoGalleryComponent},
    {path:'view-vechile/:id',component:ViewVechileComponent},
    {path:'edit-vechile/:id',component:CreateVechileComponent},
    {path:'view-banking/:id',component:ViewBankingComponent},
    {path:'edit-banking/:id',component:CreateBankComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'',component:WelcomeComponent}
  ]},
  {path:'', component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
