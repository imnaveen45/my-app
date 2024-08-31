import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-view-banking',
  templateUrl: './view-banking.component.html',
  styleUrls: ['./view-banking.component.css']
})
export class ViewBankingComponent {
public bank:any=[];

  constructor(private _activatedroute:ActivatedRoute,private _bankingservice:BankingService){
 _activatedroute.params.subscribe(
   (data:any)=>{
    console.log(data.id);

    _bankingservice.getbanking(data.id).subscribe(
      (data:any)=>{
        this.bank=data;
      }
    )
   })
 
  }

  

  
}
