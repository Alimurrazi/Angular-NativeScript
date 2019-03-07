import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
    items;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.

      this.items = new Array(
          {food:"Bites and Nibbles Items, Prawn Tempura with wasabi mayo", topping:"No Toppings", amount: "1", money: "440 TK"},
          {food:"Bites and Nibbles Items, Prawn Tempura with wasabi mayo", topping:"No Toppings", amount: "1", money: "440 TK"},
          {food:"Bites and Nibbles Items, Prawn Tempura with wasabi mayo", topping:"No Toppings", amount: "1", money: "440 TK"}
      )

    }
}
