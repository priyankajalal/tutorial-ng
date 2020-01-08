import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  size = 1980098;
  constructor() { }

  name:String ="vinod";
  ngOnInit() {
  }

   getName(){
   return "My Name is Vinod" ;
  }

  ClickTest(){
   console.log("I m clicked");
  }

}
