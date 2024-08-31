import { Component } from '@angular/core';

@Component({
  selector: 'app-rolldice',
  templateUrl: './rolldice.component.html',
  styleUrls: ['./rolldice.component.css']
})
export class RolldiceComponent {
public dice:string="/assets/dice-1.png"
naveen(){
  const randomNumber=Math.floor(Math.random()*6)+1;
  if(randomNumber===1){
    this.dice='/assets/dice-1.png'
  }
  if(randomNumber===2){
    this.dice='/assets/dice-2.png'
  }
  if(randomNumber===3){
    this.dice='/assets/dice-3.png'
  }
  if(randomNumber===4){
    this.dice='/assets/dice-4.png'
  }
  if(randomNumber===5){
    this.dice='/assets/dice-5.png'
  }
  if(randomNumber===6){
    this.dice='/assets/dice-6.png'
  }

    
}
}
