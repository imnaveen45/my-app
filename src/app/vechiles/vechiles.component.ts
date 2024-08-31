import { Component } from '@angular/core';
import { VechilesService } from '../vechiles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vechiles',
  templateUrl: './vechiles.component.html',
  styleUrls: ['./vechiles.component.css']
})
export class VechilesComponent {

  public vechiles:any=[];

  public term:string="";

  public column:string="";
 
  public order:string="";
//  public page:number= ;



  constructor(private _vechileService:VechilesService,private _router:Router){

    _vechileService.getVechiles().subscribe(
        (data:any)=>{
          this.vechiles=data;
        },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  filter(){

    this._vechileService.getFilteredVechiles(this.term).subscribe(

      (data:any)=>{
        this.vechiles=data;
      },
      (err:any)=>{
        alert("internal error");
      }
    )
  }
  sort(){

    this._vechileService.getSortedVechiles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vechiles=data;
      },
      (err:any)=>{
        alert("server error");
      }
    )
  }
//   pagination(){
// this._vechileService.getPaginationVechiles(this.page).subscribe(

//   (data:any)=>{
//     this.vechiles=data;
//   },
//   (err:any)=>{
//     alert("server error")
//   }
// )
//   }

delete(id:string){
  this._vechileService.deletevechile(id).subscribe(

    (data:any)=>{
      alert("deleted successfully");
      location.reload();
    },
    (err:any)=>{
      alert("deletion failed");
    }
  )
}
view(id:string){
  this._router.navigateByUrl("/dashboard/view-vechile/"+id)
}
edit(id:string){
this._router.navigateByUrl("/dashboard/edit-vechile/"+id)
}
}
