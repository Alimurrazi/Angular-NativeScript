import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Cart",
    moduleId: module.id,
    templateUrl: "./cart.component.html",
    styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
    items;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
      
      /*  let localStorage = require("nativescript-localstorage");
        var allItem = JSON.parse(localStorage.getItem('allItem'));
        console.log(allItem); */

      this.items = new Array(
          {food:"Bites and Nibbles Items, Prawn Tempura with wasabi mayo", topping:"No Toppings", amount: "1", money: "440 TK"},
          {food:"Bites and Nibbles Items, Prawn Tempura with wasabi mayo", topping:"No Toppings", amount: "1", money: "440 TK"},
          {food:"Bites and Nibbles Items, Prawn Tempura with wasabi mayo", topping:"No Toppings", amount: "1", money: "440 TK"}
      )

    }
}
