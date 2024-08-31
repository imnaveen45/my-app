import { Component } from '@angular/core';
import { MailService } from '../mail.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
   public bag:any=[]

   constructor(private _pen:MailService){

    _pen.getmails().subscribe(

      (data:any)=>{
        this.bag=data
      },
      (err:any)=>{
        alert("Internal Server Error")
      }

    )
   }


   
}
