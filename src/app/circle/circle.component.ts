import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
    public num1:number=0
    public result:number=0
naveen(){
this.result=3.14*(this.num1*this.num1)
}
jai(){
  this.result=2*3.14*this.num1
}
}
