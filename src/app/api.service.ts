import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addUser=(data:any)=>{
    return this.http.post("http://localhost:8080/signup",data)
  }

  addLogin=(data:any)=>{
    return this.http.post("http://localhost:8080/login",data)
  }

  addRecipe=(data:any)=>{
    return this.http.post("http://localhost:8080/addRecipe",data)
  }

  viewRecipe=()=>{
    return this.http.get("http://localhost:8080/viewall")
  }

  viewSingle=(data:any)=>{
    return this.http.post("http://localhost:8080/viewSingle",data)
  }
}
