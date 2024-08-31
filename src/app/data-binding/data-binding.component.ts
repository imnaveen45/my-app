import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  public age:number=20;
  public name:string='naveen';
  public isindian:boolean=true;



  public isValid:boolean=true;
  public url:string="/assets/404 error.png.png";


  public phone:string="+91";


   submit(){
    alert("submitted!!!!!!!")
  }
   typing(){
    alert("typing....")
  }
}
