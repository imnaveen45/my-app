import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _bench:HttpClient) { }

  getstudentservice():Observable<any>{

    return this._bench.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
  
  }

  getfilteredstudents(term:string):Observable<any>{
    return this._bench.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);
    
  }

  getSortedStudents(column:string,order:string):Observable<any>{
    return this._bench.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+"&order="+order);
  }

  getpagination(limit:number,page:number):Observable<any>{
    return this._bench.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit="+limit+"&page="+page);
    
  }



  createform(data:any):Observable<any>{

    return this._bench.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",data);
  }
  deleteform(id:string):Observable<any>{
    return this._bench.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student"+id);
  }
}
