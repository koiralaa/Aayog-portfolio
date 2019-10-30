import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menu = [{name: "Home", link:"/home"}, {name: "Projects", link:"/projects"}, {name: "Current", link:"/current"}];
  showMenu: boolean = false;
  picture: string = "/assets/images/background.png";

  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.showMenu = !this.showMenu;
  }
}
