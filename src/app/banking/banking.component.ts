import { Component } from '@angular/core';
import { BankingService } from '../banking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent {

  public banking:any=[];
  public term:string="";

  public column:string="";
  public order:string="";

  constructor(private _banking:BankingService,private _router:Router){

    _banking.getBanking().subscribe(

      (data:any)=>{
        this.banking=data;
      },
      (err:any)=>{
        alert("server error")
      }
    )
  }
  filter(){
    this._banking.getFilteredBanking(this.term).subscribe(
      (data:any)=>{
        this.banking=data;
      },
      (err:any)=>{
        alert("internal error");
      }
    )
  }

  sort(){
    this._banking.getSortedBanking(this.column,this.order).subscribe(

      (data:any)=>{
        this.banking=data;
      },
      (err:any)=>{
        alert("server errorr");
      }
    )
  }
  delete(id:string){
    this._banking.deletebanking(id).subscribe(
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
    this._router.navigateByUrl("/dashboard/view-banking/"+id)
  }
  edit(id:string){
    this._router.navigateByUrl("/dashboard/edit-banking/"+id)
  }
}
