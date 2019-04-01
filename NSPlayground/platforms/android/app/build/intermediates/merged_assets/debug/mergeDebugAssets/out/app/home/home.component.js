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
        this.dropDownitems = [];
        for (var i = 0; i < 1; i++) {
            this.dropDownitems.push("Logout");
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFHL0QscUNBQTJDO0FBQzNDLDBDQUF5QztBQVd6QztJQVVJLHVCQUFvQixnQkFBa0MsRUFBVSxXQUF3QixFQUFVLE1BQWM7UUFBNUYscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVRoSCxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2Isb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFPaEIseUdBQXlHO1FBQ3pHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNyQztJQUVMLENBQUM7SUFFRCxnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxNQUFNO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFhLE1BQVEsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEdBQUcsTUFBTSxFQUFF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LENBQUM7eUNBWXdDLHlCQUFnQixFQUF1QixrQkFBVyxFQUFrQixlQUFNO09BVnZHLGFBQWEsQ0FtSHpCO0lBQUQsb0JBQUM7Q0FBQSxBQW5IRCxJQW1IQztBQW5IWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4uL2RhdGEvaXRlbS5tb2RlbFwiO1xuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vZGF0YS9jYXRlZ29yeS5tb2RlbFwiO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tICduYXRpdmVzY3JpcHQtZHJvcC1kb3duJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgLy9zdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxuICAgIC8vIEFsbCBzdHlsZXMgd2VyZSBwdXQgaW5zaWRlIG9mIGFwcC5jc3Mgc28gd2UgZG9uJ3QgbmVlZCBhIGhvbWUuY29tcG9uZW50LmNzcyBmb3Igbm93XG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbGFzdERlbFkgPSAwO1xuICAgIGhlYWRlckNvbGxhcHNlZCA9IGZhbHNlO1xuICAgIHNlbGVjdGVkVGFiID0gMDtcbiAgICBzZWxlY3RlZFRhYnZpZXcgPSAwO1xuICAgIGl0ZW1zOiBBcnJheTxJdGVtPjtcbiAgICBjYXRlZ29yaWVzOiBBcnJheTxDYXRlZ29yeT47XG4gICAgdG90YWxDYXJ0ZWRJdGVtO1xuICAgIGRyb3BEb3duaXRlbXM6IEFycmF5PHN0cmluZz47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIC8vU2V0IHVwIHRvIGdldCBkYXRhIGZyb20gc2hhcmVkIHNlcnZpY2UgdG8gaGVscCBtb3ZpbmcgZnJvbSBtb2NraW5nIGRhdGEgdG8gcmVhbCBBUEkgY2FsbHMgaW4gdGhlIGZ1dHVyZVxuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5kYXRhU2VydmljZS5nZXRJdGVtcygpO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldENhdGVnb3JpZXMoKTtcbiAgICAgICAgdGhpcy5maW5kVG90YWxDYXJ0ZWRJdGVtKCk7XG5cbiAgICAgICAgdGhpcy5kcm9wRG93bml0ZW1zID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmRyb3BEb3duaXRlbXMucHVzaChcIkxvZ291dFwiKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgc2hvd0l0ZW0oaXRlbUlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUYXBwZWQgb24gJHtpdGVtSWR9YCk7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJkZXRhaWwvXCIgKyBpdGVtSWQsIHtcbiAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVUb3BcIixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzgwLFxuICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1dKTtcbiAgICB9XG5cbiAgICB0b2dnbGVMaWtlKGl0ZW0pIHtcbiAgICAgICAgaXRlbS5pc0xpa2UgPSAhaXRlbS5pc0xpa2U7XG4gICAgICAgIGlmIChpdGVtLmlzTGlrZSkge1xuICAgICAgICAgICAgaXRlbS5saWtlcyArPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlbS5saWtlcyAtPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlSGVhcnQoaXRlbSkge1xuICAgICAgICBpdGVtLmlzRmF2b3JpdGUgPSAhaXRlbS5pc0Zhdm9yaXRlO1xuICAgIH1cblxuICAgIGNhdGVnb3J5SWNvbihpdGVtQ2F0ZWdvcnkpIHtcbiAgICAgICAgc3dpdGNoIChpdGVtQ2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJCdXJnZXJcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwZjUpOyAvL1wiZmEtY3V0bGVyeVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkJlZXJcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwZmMpOyAvL1wiZmEtYmVlclwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlBhbmNha2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwZjQpOyAvL1wiZmEtY29mZmVlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQ2FrZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjFmZCk7IC8vXCJmYS1iaXJ0aGRheS1jYWtlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjA2ZCk7IC8vXCJmYS1maXJlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vVG9wIG5hdiBiYXIgdGFwIG1ldGhvZHNcbiAgICBvbkJlbGxUYXAoKSB7XG4gICAgfVxuXG4gICAgb25TZWFyY2hUYXAoKSB7XG4gICAgfVxuXG4gICAgb25Qb3B1bGFyVGFwKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFidmlldyA9IDA7XG4gICAgfVxuXG4gICAgb25DYXRlZ29yeVRhcCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYnZpZXcgPSAxO1xuICAgIH1cblxuICAgIG9uUHJvbW9zVGFwKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFidmlldyA9IDI7XG4gICAgfVxuXG4gICAgLy9Cb3R0b20gbmF2IGJhciB0YXAgbWV0aG9kc1xuICAgIG9uSG9tZVRhcCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDA7XG4gICAgfVxuXG4gICAgb25DYXJ0VGFwKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiID0gMTtcbiAgICB9XG5cbiAgICBvbkhpc3RvcnlUYXAoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAyO1xuICAgIH1cblxuICAgIG9uQWJvdXRUYXAoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAzO1xuICAgIH1cblxuICAgIGZpbmRUb3RhbENhcnRlZEl0ZW0oKVxuICAgIHsgICAgXG4gICAgICAgIGxldCBsb2NhbFN0b3JhZ2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiKTtcbiAgICAgICAgdmFyIGFsbEl0ZW0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsSXRlbVwiKSk7XG4gICAgICAgIHRoaXMudG90YWxDYXJ0ZWRJdGVtID0gYWxsSXRlbS5maWx0ZXIoaXRlbSA9PiBpdGVtLmlzQ2FydGVkID09IHRydWUpLmxlbmd0aDtcbiAgICB9XG5cbn1cbiJdfQ==