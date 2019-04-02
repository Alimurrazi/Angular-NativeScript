import { Component, OnInit, ChangeDetectorRef, AfterViewInit, ViewChild } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Item } from "../data/item.model";
import { Category } from "../data/category.model";
import { DataService } from "../data/data";
import { Router } from '@angular/router';
import { Kinvey } from "kinvey-nativescript-sdk";
import { BackendService } from "../shared/backend.service";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    //styleUrls: ['./home.component.css']
    // All styles were put inside of app.css so we don't need a home.component.css for now
})

export class HomeComponent implements OnInit {
    lastDelY = 0;
    headerCollapsed = false;
    selectedTab = 0;
    selectedTabview = 0;
    items: Array<Item>;
    categories: Array<Category>;
    totalCartedItem;
    dropDownitems: Array<string>;
    
    public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    constructor(private routerExtensions: RouterExtensions, private dataService: DataService, private router: Router, private _changeDetectionRef: ChangeDetectorRef) {
        //Set up to get data from shared service to help moving from mocking data to real API calls in the future
        this.items = this.dataService.getItems();
        this.categories = this.dataService.getCategories();
        this.findTotalCartedItem();

        this.dropDownitems = [];
        for (var i = 0; i < 1; i++) {
            this.dropDownitems.push("Logout");
        }

       console.log(Kinvey.User.getActiveUser());

    }

    ngOnInit(): void {
    }

     ngAfterViewInit() {
          this.drawer = this.drawerComponent.sideDrawer;
          this._changeDetectionRef.detectChanges();
     }

    public openDrawer() {
        console.log("drawer open...");
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
       // this.drawer.showDrawer();
    }

    public onCloseDrawerTap() {
        this.drawer.closeDrawer();
    }

    showItem(itemId) {
        console.log(`Tapped on ${itemId}`);
        this.routerExtensions.navigate(["detail/" + itemId, {
            animated: true,
            transition: {
                name: "slideTop",
                duration: 380,
                curve: "easeIn"
            }
        }]);
    }

    toggleLike(item) {
        item.isLike = !item.isLike;
        if (item.isLike) {
            item.likes += 1;
        } else {
            item.likes -= 1;
        }
    }

    toggleHeart(item) {
        item.isFavorite = !item.isFavorite;
    }

    categoryIcon(itemCategory) {
        switch (itemCategory) {
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


    //Top nav bar tap methods
    onBellTap() {
    }

    onSearchTap() {
    }

    onPopularTap() {
        this.selectedTabview = 0;
    }

    onCategoryTap() {
        this.selectedTabview = 1;
    }

    onPromosTap() {
        this.selectedTabview = 2;
    }

    //Bottom nav bar tap methods
    onHomeTap() {
        this.selectedTab = 0;
    }

    onCartTap() {
        this.selectedTab = 1;
    }

    onHistoryTap() {
        this.selectedTab = 2;
    }

    onAboutTap() {
        this.selectedTab = 3;
    }

    findTotalCartedItem()
    {    
        let localStorage = require("nativescript-localstorage");
        var allItem = JSON.parse(localStorage.getItem("allItem"));
        this.totalCartedItem = allItem.filter(item => item.isCarted == true).length;
    }

}
