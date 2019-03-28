import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { Page, View } from "ui/page";
import { PageRoute } from "nativescript-angular/router";
import { Item } from "../data/item.model";
import { DataService } from "../data/data";

@Component({
    selector: "Detail",
    moduleId: module.id,
    templateUrl: "./detail.component.html",
    styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
    itemId: number;
    item: Item;
    items: Array<Item>;
    isCarted;
    totalCartedItem = 0;

    constructor(
        private pageRoute: PageRoute,
        private routerExtensions: RouterExtensions,
        private page: Page,
        private dataService: DataService) {
        
        let localStorage = require("nativescript-localstorage");
        this.items = JSON.parse(localStorage.getItem('allItem'));
      //  this.findTotalCartedItem();
    //    this.items = this.dataService.getItems();        

        this.page.actionBarHidden = true;

        this.pageRoute.activatedRoute.pipe(
            switchMap(activatedRoute => activatedRoute.params)
        ).forEach((params) => {
            this.itemId = +params["id"];            
            this.item = this.items.filter(item => item.id == this.itemId)[0];
            console.log("the item is carted..........."+this.item.isCarted);
            this.isCarted = this.item.isCarted;
        });
    }

    ngOnInit(): void {
    }

    toggleLike() {
        this.item.isLike = !this.item.isLike;
        if (this.item.isLike) {
            this.item.likes += 1;
        } else {
            this.item.likes -= 1;
        }
    }

    toggleHeart(item) {
        item.isFavorite = !item.isFavorite;
    }

    categoryIcon() {
        switch (this.item.categoryTag) {
            case "Burger":
                return String.fromCharCode(0xf0f5); //"fa-cutlery";
                break;
            case "Beer":
                return String.fromCharCode(0xf0fc); //"fa-beer";
                break;
            case "Pancake":
                return String.fromCharCode(0xf0f4); //"fa-coffee";
                break;
            case "Cake":
                return String.fromCharCode(0xf1fd); //"fa-birthday-cake";
                break;
            default:
                return String.fromCharCode(0xf06d); //"fa-fire";
                break;
        }
    }

    onCloseTap(): void {
        this.routerExtensions.back();
    }

    addCart(itemId): void{

        console.log("food carted...");
        let localStorage = require("nativescript-localstorage");
        var allItem = JSON.parse(localStorage.getItem('allItem'));

        if(allItem[itemId-1].isCarted==true)
        {
            allItem[itemId-1].isCarted = false;
            this.isCarted = false;
        }
        else
        {
            allItem[itemId-1].isCarted = true;
            this.isCarted = true;
        }
        
        localStorage.setItem("allItem",JSON.stringify(allItem));
        this.findTotalCartedItem();
    }

    findTotalCartedItem()
    {   
        this.createAnimationOnCart();
        let localStorage = require("nativescript-localstorage");
        var allItem = JSON.parse(localStorage.getItem("allItem"));
        this.totalCartedItem = allItem.filter(item => item.isCarted == true).length;
        console.log("...................."+this.totalCartedItem);
    }

    createAnimationOnCart()
    {
        const count: View = this.page.getViewById("CartCount");
        count.createAnimation({opacity: 0});
        const cart: View = this.page.getViewById("cartImg");
        cart.animate({
            rotate: 360,
            duration: 1000
        }).then(()=>count.createAnimation({opacity: 1}));
    }

}
