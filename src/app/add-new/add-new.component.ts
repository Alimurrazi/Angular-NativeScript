import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "ns-add-new",
  templateUrl: "./add-new.component.html",
  styleUrls: ["./add-new.component.css"],
  moduleId: module.id
})
export class AddNewComponent implements OnInit {
  name: string = "";
  role: string = "";

  constructor(private router: Router) {}

  ngOnInit() {}

  public submit() {
     let localStorage = require("nativescript-localstorage");
     var allItem = JSON.parse(localStorage.getItem("players"));

     var player = {
       id: Math.random()
         .toString(36)
         .substring(7),
       name: this.name,
       role: this.role
     };
     allItem.push(player);
     localStorage.setItem("players", JSON.stringify(allItem));
    this.router.navigate(['']);
  }
}
