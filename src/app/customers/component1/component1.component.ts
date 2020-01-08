import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  birthday = "1986,6,18";
  price = 28;
  size = 98999000;
ngOnInit() {
  }
}
