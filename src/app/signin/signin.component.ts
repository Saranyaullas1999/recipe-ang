import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }
  email=""
  password=""


  readValue=()=>{
    let data={
    "email":this.email,
    "password":this.password
    }
    console.log(data)

    this.email=""
    this.password=""
  }

  ngOnInit(): void {
  }

}
