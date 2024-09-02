import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userForm:FormGroup=new FormGroup({
  name:new FormControl(),
  age:new FormControl(),
  phone:new FormControl(),
  email:new FormControl(),
  address:new FormGroup({
    state:new FormControl(),
    pincode:new FormControl()
  }),

  type:new FormControl(),
  // busFee:new FormControl(),
  // hostelFee:new FormControl()

  cards: new FormArray([])
});
get cardsFormarray(){

  return this.userForm.get('cards') as FormArray;
}

addCard(){
  this.cardsFormarray.push(
    new FormGroup({
      number: new FormControl(),
      expiry: new FormControl(),
      cvv: new FormControl(),
    }
  )
)
}

delete(i:number){
  this.cardsFormarray.removeAt(i);
}

constructor(){

  this.userForm.get('type')?.valueChanges.subscribe(

    (data:any)=>{
      if(data=='dayscholor'){
        this.userForm.addControl('busFee',new FormControl());
        this.userForm.removeControl('hostelFee');
      }
      else if(data='resedential'){
        this.userForm.addControl('hostelFee',new FormControl());
        this.userForm.removeControl('busFee');
      }
    }
  )
}

  submit(){

    console.log(this.userForm)
  }
}
