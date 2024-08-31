import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartstoreService {

  constructor(private _naveen:HttpClient) { }

  getflipkaerstores():Observable<any>{

    return this._naveen.get("https://fakestoreapi.com/products");
  }
}
