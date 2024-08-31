import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  public millennium:any=[];

  public term:string="";

  public column:string="";
  public order:string="";

  limit:number=0;
  page:number=0;

  constructor(private _school:StudentService){
    _school.getstudentservice().subscribe(
      (data:any)=>{
        this.millennium=data;
      },
      (erroro:any)=>{
        alert("error")
      }
    )

  }
  filter(){
    this._school.getfilteredstudents(this.term).subscribe(
      (data:any)=>{
        this.millennium=data;
      },
      (error:any)=>{
        alert("intrnal error");
      }
    )
  }
  sort(){

    this._school.getSortedStudents(this.column,this.order).subscribe(
      (data:any)=>{
        this.millennium=data;
      },
      (error:any)=>{
        alert("intrnal error");
      }
    )
  }
  paginate(){
    this._school.getpagination(this.limit,this.page).subscribe(
      (data:any)=>{
        this.millennium=data;
      },
      (error:any)=>{
        alert("intrnal error");
      }

    )
  }
}
