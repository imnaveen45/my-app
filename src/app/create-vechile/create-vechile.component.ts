import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VechilesService } from '../vechiles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vechile',
  templateUrl: './create-vechile.component.html',
  styleUrls: ['./create-vechile.component.css']
})
export class CreateVechileComponent {

  public id:string="";

  public vechileForm:FormGroup=new FormGroup({
      Vechile:new FormControl(),
      manufacturer:new FormControl(),
      model:new FormControl(),
      type:new FormControl(),
      fuel:new FormControl(),
      color:new FormControl(),
      image:new FormControl(),
      cost:new FormControl(),
      
    })
   constructor(private _vechilService:VechilesService,private _activatedroute:ActivatedRoute){
    _activatedroute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;

        _vechilService.getVechile(data.id).subscribe(
          (data:any)=>{
            this.vechileForm.patchValue(data);
          }
        )
      }
    )
   }
    create(){
      console.log(this.vechileForm.value);

      if(this.id){
    //  edit
        this._vechilService.updatevechile(this.vechileForm.value,this.id).subscribe(
          (data:any)=>{
            alert("created successfully");
            this.vechileForm.reset();
          },
          (err:any)=>{
            alert("creation failed");
          }
        )
      }
      else{
        // create
        this._vechilService.createvechile(this.vechileForm.value).subscribe(
          (data:any)=>{
            alert("created successfully");
            this.vechileForm.reset();
          },
          (err:any)=>{
            alert("creation failed");
          }
        )

      }

      // this._vechilService.createvechile(this.vechileForm.value).subscribe(
      //   (data:any)=>{
      //     alert("created successfully");
      //     this.vechileForm.reset();
      //   },
      //   (err:any)=>{
      //     alert("creation failed");
      //   }
      // )
    }
}
