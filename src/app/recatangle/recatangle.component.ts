import { Component } from '@angular/core';

@Component({
  selector: 'app-recatangle',
  templateUrl: './recatangle.component.html',
  styleUrls: ['./recatangle.component.css']
})
export class RecatangleComponent {

  public num1:number=0;
  public num2:number=0;
  public result:number=0

  area(){
    this.result=this.num1*this.num2
  }
   perimeter(){
    this.result=2*(this.num1+this.num2)
   }
}
