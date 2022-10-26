import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
  name=localStorage.getItem("stored_name")
  dish_name=""
  ingredients=""

  readValue=()=>{
    let data={
      "user_id":localStorage.getItem("id"),
      "dish_name":this.dish_name,
      "ingredients":this.ingredients
    }
    console.log(data)
    this.myapi.addRecipe(data).subscribe(
      (res)=>{

      }
    )
    this.fetchData()
    this.dish_name=""
    this.ingredients=""
  }

  fetchData=()=>{
    this.myapi.viewRecipe().subscribe(
      (res)=>{
        this.dataD=res
      }
    )
  }
dataD:any=[]
  ngOnInit(): void {
  }

}
