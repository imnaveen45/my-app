import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-pipes',
  templateUrl: './directive-pipes.component.html',
  styleUrls: ['./directive-pipes.component.css']
})
export class DirectivePipesComponent {
 public ages:number[]=[10,20,30,40,50]

 public states:string[]=["telanagana","andhra"]


public users:any=[
  {name:'a',age:10,phone:8748,marks:60},
  {name:'b',age:30,phone:84448,marks:90},
  {name:'c',age:40,phone:874498,marks:30},
  {name:'d',age:50,phone:87448,marks:-90},
]
public today:any=new Date();
}