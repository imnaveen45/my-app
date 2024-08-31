import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VechilesService {

  public baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";

  constructor(private _httpClient:HttpClient) { }

  getVechiles():Observable<any>{
    return this._httpClient.get(this.baseUrl);
  }
  getVechile(id:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"/"+id);
  }
  getFilteredVechiles(term:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?filter="+term);
}
getSortedVechiles(column:string,order:string):Observable<any>{
  return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order);
}
// getPaginationVechiles(page:number):Observable<any>{
//   return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page="+page);
// }

createvechile(data:any):Observable<any>{
  return this._httpClient.post(this.baseUrl,data);
}
updatevechile(data:any,id:string):Observable<any>{
  return this._httpClient.put(this.baseUrl+"/"+id,data);
}


deletevechile(id:string):Observable<any>{
  return this._httpClient.get(this.baseUrl+"/"+id);
}
}
