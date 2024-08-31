import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VechilesService } from '../vechiles.service';

@Component({
  selector: 'app-view-vechile',
  templateUrl: './view-vechile.component.html',
  styleUrls: ['./view-vechile.component.css']
})
export class ViewVechileComponent {

public vechile:any=[];
  constructor(private _activatedRoute:ActivatedRoute,private _vechileservice:VechilesService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);

        _vechileservice.getVechile(data.id).subscribe(
          (data:any)=>{
            this.vechile=data;
          }
        )
      }
    )
  }
}
