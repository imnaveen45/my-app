import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RecatangleComponent } from './recatangle/recatangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { RolldiceComponent } from './rolldice/rolldice.component';
import { DirectivePipesComponent } from './directive-pipes/directive-pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VechilesComponent } from './vechiles/vechiles.component';
import{HttpClientModule}from '@angular/common/http';
import { BankingComponent } from './banking/banking.component';
import { FlipkartstoreComponent } from './flipkartstore/flipkartstore.component';
import { MailComponent } from './mail/mail.component';
import { CreateVechileComponent } from './create-vechile/create-vechile.component';
import { CreateBankComponent } from './create-bank/create-bank.component';
import { StudentComponent } from './student/student.component';
import { CreatestudentFormComponent } from './createstudent-form/createstudent-form.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { ViewVechileComponent } from './view-vechile/view-vechile.component';
import { ViewBankingComponent } from './view-banking/view-banking.component';
import { CreateUserComponent } from './create-user/create-user.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RecatangleComponent,
    CircleComponent,
    BMIComponent,
    RolldiceComponent,
    DirectivePipesComponent,
    EmployeesComponent,
    FlipkartComponent,
    VechilesComponent,
    BankingComponent,
    FlipkartstoreComponent,
    MailComponent,
    CreateVechileComponent,
    CreateBankComponent,
    StudentComponent,
    CreatestudentFormComponent,
    PhotoGalleryComponent,
    ViewVechileComponent,
    ViewBankingComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
