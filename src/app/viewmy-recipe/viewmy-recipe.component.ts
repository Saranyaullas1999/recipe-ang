import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewmy-recipe',
  templateUrl: './viewmy-recipe.component.html',
  styleUrls: ['./viewmy-recipe.component.css']
})
export class ViewmyRecipeComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  fetchData=()=>{
    let data={
      "user_id":localStorage.getItem("id")
    }
    console.log(data)
    this.myapi.viewSingle(data).subscribe(
      (res)=>{
        this.dataD=res
      }
    )
  }

  dataD:any=[]
  ngOnInit(): void {
  }

}
