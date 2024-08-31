import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-createstudent-form',
  templateUrl: './createstudent-form.component.html',
  styleUrls: ['./createstudent-form.component.css']
})
export class CreatestudentFormComponent {

  public studentform:FormGroup=new FormGroup({
    name:new FormControl(),
    phone:new FormControl(),
    city:new FormControl(),
    dob:new FormControl(),
    profile_picture:new FormControl(),
  })
 constructor(private _studentservice:StudentService){}
  create(){
    console.log(this.studentform.value);

    this._studentservice.createform(this.studentform.value).subscribe(
      (data:any)=>{
        alert("successful")
      },
      (err:any)=>{
        alert("error")
      }
    )
  }
}
