import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankingService } from '../banking.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-bank',
  templateUrl: './create-bank.component.html',
  styleUrls: ['./create-bank.component.css']
})
export class CreateBankComponent {
  public id:string="";
 public _naveen:FormGroup=new FormGroup({
  account_name:new FormControl(),
  available_balance:new FormControl(),
  account_number:new FormControl(),
  city:new FormControl(),
  profie_picture:new FormControl(),
 })


 constructor(private _rohit:BankingService,private _activatedroute:ActivatedRoute){
  _activatedroute.params.subscribe(
    (data:any)=>{
      console.log(data.id);
      this.id=data.id;
      _rohit.getbanking(data.id).subscribe(
        (data:any)=>{
          this._naveen.patchValue(data);
        }
      )
    }
  )
 }

create(){
  console.log(this._naveen.value)

  if(this.id){

    this._rohit.updatebanking(this._naveen.value,this.id).subscribe(
      (data:any)=>{
        alert("successfully")
        
       },
       (err:any)=>{
        alert('error')
       }
    )
  }
  else{
    this._rohit.createbanking(this._naveen.value).subscribe(
      (data:any)=>{
       alert("successfully")
       
      },
      (err:any)=>{
       alert('error')
      }
    )}

//   this._rohit.createbanking(this._naveen.value).subscribe(
//  (data:any)=>{
//   alert("successfully")
  
//  },
//  (err:any)=>{
//   alert('error')
//  }
//   )
}







}
