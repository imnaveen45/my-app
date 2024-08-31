import { Component } from '@angular/core';
import { FlipkartstoreService } from '../flipkartstore.service';

@Component({
  selector: 'app-flipkartstore',
  templateUrl: './flipkartstore.component.html',
  styleUrls: ['./flipkartstore.component.css']
})
export class FlipkartstoreComponent {

  public rohit:any=[];

  constructor(private _virat:FlipkartstoreService){

    _virat.getflipkaerstores().subscribe(
      (data:any)=>{
        this.rohit=data;
      },
      (error:any)=>{
        alert("server error")
      }
    )
  }
}
