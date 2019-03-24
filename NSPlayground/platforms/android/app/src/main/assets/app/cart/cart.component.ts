import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { ObservableArray, ChangedData } from "tns-core-modules/data/observable-array";
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

  getCartedData() {
    let localStorage = require("nativescript-localstorage");
    var allItem = JSON.parse(localStorage.getItem("allItem"));
    allItem = allItem.filter(item => item.isCarted == true);
    this.items = allItem;
    //  console.log(this.items);
    this.totalPriceCalculation(allItem);
  }

  ngOnInit(): void {
    this.getCartedData();
  }

  totalPriceCalculation(allItem) {
    this.totalPrice = 0;
    allItem.forEach(item => {
      this.totalPrice = this.totalPrice + item.price * item.amount;
    });
  }

  addAmount(itemId) {
    console.log("add...");
    let localStorage = require("nativescript-localstorage");
    var allItem = JSON.parse(localStorage.getItem("allItem"));
    allItem[itemId - 1].amount++;
  //  console.log(allItem[itemId - 1]);
    localStorage.setItem("allItem", JSON.stringify(allItem));
    //  this.router.navigate(['cart']);
    this.getCartedData();
  }

  removeAmount(itemId) {
    console.log("remove...");
    let localStorage = require("nativescript-localstorage");
    var allItem = JSON.parse(localStorage.getItem("allItem"));
    var currentAmount = allItem[itemId - 1].amount - 1;
    if (currentAmount == 0) {
      this.showDialog();
    } else {
      allItem[itemId - 1].amount = currentAmount;
      localStorage.setItem("allItem", JSON.stringify(allItem));
      this.getCartedData();
    }
  }

  showDialog() {
    dialogs
      .alert({
        title: "",
        message: "You must select one item... ",
        okButtonText: "Ok"
      })
      .then(() => {
        console.log("Dialog closed!");
      });
  }
}
