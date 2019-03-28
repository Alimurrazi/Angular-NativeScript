"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var data_1 = require("../data/data");
var router_2 = require("@angular/router");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(routerExtensions, dataService, router) {
        this.routerExtensions = routerExtensions;
        this.dataService = dataService;
        this.router = router;
        this.lastDelY = 0;
        this.headerCollapsed = false;
        this.selectedTab = 0;
        this.selectedTabview = 0;
        //Set up to get data from shared service to help moving from mocking data to real API calls in the future
        this.items = this.dataService.getItems();
        this.categories = this.dataService.getCategories();
        this.findTotalCartedItem();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.showItem = function (itemId) {
        console.log("Tapped on " + itemId);
        this.routerExtensions.navigate(["detail/" + itemId, {
                animated: true,
                transition: {
                    name: "slideTop",
                    duration: 380,
                    curve: "easeIn"
                }
            }]);
    };
    HomeComponent.prototype.toggleLike = function (item) {
        item.isLike = !item.isLike;
        if (item.isLike) {
            item.likes += 1;
        }
        else {
            item.likes -= 1;
        }
    };
    HomeComponent.prototype.toggleHeart = function (item) {
        item.isFavorite = !item.isFavorite;
    };
    HomeComponent.prototype.categoryIcon = function (itemCategory) {
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
    };
    //Top nav bar tap methods
    HomeComponent.prototype.onBellTap = function () {
    };
    HomeComponent.prototype.onSearchTap = function () {
    };
    HomeComponent.prototype.onPopularTap = function () {
        this.selectedTabview = 0;
    };
    HomeComponent.prototype.onCategoryTap = function () {
        this.selectedTabview = 1;
    };
    HomeComponent.prototype.onPromosTap = function () {
        this.selectedTabview = 2;
    };
    //Bottom nav bar tap methods
    HomeComponent.prototype.onHomeTap = function () {
        this.selectedTab = 0;
    };
    HomeComponent.prototype.onCartTap = function () {
        this.selectedTab = 1;
    };
    HomeComponent.prototype.onHistoryTap = function () {
        this.selectedTab = 2;
    };
    HomeComponent.prototype.onAboutTap = function () {
        this.selectedTab = 3;
    };
    HomeComponent.prototype.findTotalCartedItem = function () {
        var localStorage = require("nativescript-localstorage");
        var allItem = JSON.parse(localStorage.getItem("allItem"));
        this.totalCartedItem = allItem.filter(function (item) { return item.isCarted == true; }).length;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, data_1.DataService, router_2.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFHL0QscUNBQTJDO0FBQzNDLDBDQUF5QztBQVV6QztJQVNJLHVCQUFvQixnQkFBa0MsRUFBVSxXQUF3QixFQUFVLE1BQWM7UUFBNUYscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVJoSCxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2Isb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFNaEIseUdBQXlHO1FBQ3pHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsZ0NBQVEsR0FBUixVQUFTLE1BQU07UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWEsTUFBUSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsR0FBRyxNQUFNLEVBQUU7Z0JBQ2hELFFBQVEsRUFBRSxJQUFJO2dCQUNkLFVBQVUsRUFBRTtvQkFDUixJQUFJLEVBQUUsVUFBVTtvQkFDaEIsUUFBUSxFQUFFLEdBQUc7b0JBQ2IsS0FBSyxFQUFFLFFBQVE7aUJBQ2xCO2FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLElB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YXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi4vZGF0YS9pdGVtLm1vZGVsXCI7XG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gXCIuLi9kYXRhL2NhdGVnb3J5Lm1vZGVsXCI7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIC8vc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ11cbiAgICAvLyBBbGwgc3R5bGVzIHdlcmUgcHV0IGluc2lkZSBvZiBhcHAuY3NzIHNvIHdlIGRvbid0IG5lZWQgYSBob21lLmNvbXBvbmVudC5jc3MgZm9yIG5vd1xufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGxhc3REZWxZID0gMDtcbiAgICBoZWFkZXJDb2xsYXBzZWQgPSBmYWxzZTtcbiAgICBzZWxlY3RlZFRhYiA9IDA7XG4gICAgc2VsZWN0ZWRUYWJ2aWV3ID0gMDtcbiAgICBpdGVtczogQXJyYXk8SXRlbT47XG4gICAgY2F0ZWdvcmllczogQXJyYXk8Q2F0ZWdvcnk+O1xuICAgIHRvdGFsQ2FydGVkSXRlbTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgLy9TZXQgdXAgdG8gZ2V0IGRhdGEgZnJvbSBzaGFyZWQgc2VydmljZSB0byBoZWxwIG1vdmluZyBmcm9tIG1vY2tpbmcgZGF0YSB0byByZWFsIEFQSSBjYWxscyBpbiB0aGUgZnV0dXJlXG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0Q2F0ZWdvcmllcygpO1xuICAgICAgICB0aGlzLmZpbmRUb3RhbENhcnRlZEl0ZW0oKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBzaG93SXRlbShpdGVtSWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFRhcHBlZCBvbiAke2l0ZW1JZH1gKTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImRldGFpbC9cIiArIGl0ZW1JZCwge1xuICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVRvcFwiLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzODAsXG4gICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuICAgIH1cblxuICAgIHRvZ2dsZUxpa2UoaXRlbSkge1xuICAgICAgICBpdGVtLmlzTGlrZSA9ICFpdGVtLmlzTGlrZTtcbiAgICAgICAgaWYgKGl0ZW0uaXNMaWtlKSB7XG4gICAgICAgICAgICBpdGVtLmxpa2VzICs9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtLmxpa2VzIC09IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVIZWFydChpdGVtKSB7XG4gICAgICAgIGl0ZW0uaXNGYXZvcml0ZSA9ICFpdGVtLmlzRmF2b3JpdGU7XG4gICAgfVxuXG4gICAgY2F0ZWdvcnlJY29uKGl0ZW1DYXRlZ29yeSkge1xuICAgICAgICBzd2l0Y2ggKGl0ZW1DYXRlZ29yeSkge1xuICAgICAgICAgICAgY2FzZSBcIkJ1cmdlclwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjBmNSk7IC8vXCJmYS1jdXRsZXJ5XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQmVlclwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjBmYyk7IC8vXCJmYS1iZWVyXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiUGFuY2FrZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjBmNCk7IC8vXCJmYS1jb2ZmZWVcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJDYWtlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMWZkKTsgLy9cImZhLWJpcnRoZGF5LWNha2VcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDZkKTsgLy9cImZhLWZpcmVcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy9Ub3AgbmF2IGJhciB0YXAgbWV0aG9kc1xuICAgIG9uQmVsbFRhcCgpIHtcbiAgICB9XG5cbiAgICBvblNlYXJjaFRhcCgpIHtcbiAgICB9XG5cbiAgICBvblBvcHVsYXJUYXAoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMDtcbiAgICB9XG5cbiAgICBvbkNhdGVnb3J5VGFwKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFidmlldyA9IDE7XG4gICAgfVxuXG4gICAgb25Qcm9tb3NUYXAoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMjtcbiAgICB9XG5cbiAgICAvL0JvdHRvbSBuYXYgYmFyIHRhcCBtZXRob2RzXG4gICAgb25Ib21lVGFwKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiID0gMDtcbiAgICB9XG5cbiAgICBvbkNhcnRUYXAoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAxO1xuICAgIH1cblxuICAgIG9uSGlzdG9yeVRhcCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDI7XG4gICAgfVxuXG4gICAgb25BYm91dFRhcCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDM7XG4gICAgfVxuXG4gICAgZmluZFRvdGFsQ2FydGVkSXRlbSgpXG4gICAgeyAgICBcbiAgICAgICAgbGV0IGxvY2FsU3RvcmFnZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIpO1xuICAgICAgICB2YXIgYWxsSXRlbSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbGxJdGVtXCIpKTtcbiAgICAgICAgdGhpcy50b3RhbENhcnRlZEl0ZW0gPSBhbGxJdGVtLmZpbHRlcihpdGVtID0+IGl0ZW0uaXNDYXJ0ZWQgPT0gdHJ1ZSkubGVuZ3RoO1xuICAgIH1cblxufVxuIl19