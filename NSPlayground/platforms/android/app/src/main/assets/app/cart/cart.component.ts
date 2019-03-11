import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
@Component({
  selector: "Cart",
  moduleId: module.id,
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items;
  totalPrice: number = 0;

  constructor(private router: Router) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
    let localStorage = require("nativescript-localstorage");
    var allItem = JSON.parse(localStorage.getItem("allItem"));
    allItem = allItem.filter(item => item.isCarted == true);
    this.items = allItem;
    console.log(this.items);
    this.totalPriceCalculation(allItem);
  }

  totalPriceCalculation(allItem) {
    this.totalPrice = 0;
    allItem.forEach(item => {
      this.totalPrice = this.totalPrice + item.price * item.amount;
    });
  }

  addAmount(itemId){
    console.log("add...");
    let localStorage = require("nativescript-localstorage");
    var allItem = JSON.parse(localStorage.getItem('allItem'));
    allItem[itemId-1].amount++;
    localStorage.setItem("allItem",JSON.stringify(allItem));
    this.router.navigate(['cart']);
  }

}
