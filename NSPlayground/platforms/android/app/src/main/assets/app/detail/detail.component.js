"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var page_1 = require("ui/page");
var router_2 = require("nativescript-angular/router");
var data_1 = require("../data/data");
var application = require("tns-core-modules/application");
var router_3 = require("@angular/router");
var DetailComponent = /** @class */ (function () {
    function DetailComponent(pageRoute, routerExtensions, page, dataService, router) {
        var _this = this;
        this.pageRoute = pageRoute;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.dataService = dataService;
        this.router = router;
        this.totalCartedItem = 0;
        var localStorage = require("nativescript-localstorage");
        this.items = JSON.parse(localStorage.getItem('allItem'));
        this.findTotalCartedItem();
        //  this.items = this.dataService.getItems();        
        this.page.actionBarHidden = true;
        this.pageRoute.activatedRoute.pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; })).forEach(function (params) {
            _this.itemId = +params["id"];
            _this.item = _this.items.filter(function (item) { return item.id == _this.itemId; })[0];
            console.log("the item is carted..........." + _this.item.isCarted);
            _this.isCarted = _this.item.isCarted;
        });
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        application.android.on(application.AndroidApplication.activityBackPressedEvent, function (args) {
            args.cancel = true;
            _this.router.navigate(['']);
        });
    };
    DetailComponent.prototype.toggleLike = function () {
        this.item.isLike = !this.item.isLike;
        if (this.item.isLike) {
            this.item.likes += 1;
        }
        else {
            this.item.likes -= 1;
        }
    };
    DetailComponent.prototype.toggleHeart = function (item) {
        item.isFavorite = !item.isFavorite;
    };
    DetailComponent.prototype.categoryIcon = function () {
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
    };
    DetailComponent.prototype.onCloseTap = function () {
        this.routerExtensions.back();
    };
    DetailComponent.prototype.addCart = function (itemId) {
        console.log("food carted...");
        var localStorage = require("nativescript-localstorage");
        var allItem = JSON.parse(localStorage.getItem('allItem'));
        if (allItem[itemId - 1].isCarted == true) {
            allItem[itemId - 1].isCarted = false;
            this.isCarted = false;
        }
        else {
            allItem[itemId - 1].isCarted = true;
            this.isCarted = true;
        }
        localStorage.clear();
        localStorage.setItem("allItem", JSON.stringify(allItem));
        this.findTotalCartedItem();
        this.createAnimationOnCart();
    };
    DetailComponent.prototype.findTotalCartedItem = function () {
        var localStorage = require("nativescript-localstorage");
        var allItem = JSON.parse(localStorage.getItem("allItem"));
        this.totalCartedItem = allItem.filter(function (item) { return item.isCarted == true; }).length;
    };
    DetailComponent.prototype.createAnimationOnCart = function () {
        // const count: View = this.page.getViewById("CartCount");
        // count.createAnimation({opacity: 0});
        // const cart: View = this.page.getViewById("cartImg");
        // cart.animate({
        //     rotate: 360,
        //     duration: 1000
        // }).then(()=>count.createAnimation({opacity: 1}));
        //  const count: View = this.page.getViewById("CartCount");
        //  count.createAnimation({opacity: 0});
        var cart = this.page.getViewById("cartImg");
        console.log(cart);
        cart.animate({
            rotate: 360,
            duration: 1000
        }).then(function () { return cart.rotate = 0; });
    };
    DetailComponent = __decorate([
        core_1.Component({
            selector: "Detail",
            moduleId: module.id,
            templateUrl: "./detail.component.html",
            styleUrls: ['./detail.component.css']
        }),
        __metadata("design:paramtypes", [router_2.PageRoute,
            router_1.RouterExtensions,
            page_1.Page,
            data_1.DataService,
            router_3.Router])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBQy9ELDRDQUEyQztBQUMzQyxnQ0FBcUM7QUFDckMsc0RBQXdEO0FBRXhELHFDQUEyQztBQUMzQywwREFBNEQ7QUFDNUQsMENBQXlDO0FBUXpDO0lBT0kseUJBQ1ksU0FBb0IsRUFDcEIsZ0JBQWtDLEVBQ2xDLElBQVUsRUFDVixXQUF3QixFQUN4QixNQUFjO1FBTDFCLGlCQXNCQztRQXJCVyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFQMUIsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFTaEIsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMvQixxREFBcUQ7UUFFakQsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBRWpDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDOUIscUJBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUMsQ0FDckQsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ2IsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixLQUFJLENB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QU0sR0FBQyxDQUFDLEVBQWIsQ0FBYSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQTNIUSxlQUFlO1FBUDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN4QyxDQUFDO3lDQVV5QixrQkFBUztZQUNGLHlCQUFnQjtZQUM1QixXQUFJO1lBQ0csa0JBQVc7WUFDaEIsZUFBTTtPQVpqQixlQUFlLENBNkgzQjtJQUFELHNCQUFDO0NBQUEsQUE3SEQsSUE2SEM7QUE3SFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBQYWdlLCBWaWV3IH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4uL2RhdGEvaXRlbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkRldGFpbFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9kZXRhaWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGl0ZW1JZDogbnVtYmVyO1xyXG4gICAgaXRlbTogSXRlbTtcclxuICAgIGl0ZW1zOiBBcnJheTxJdGVtPjtcclxuICAgIGlzQ2FydGVkO1xyXG4gICAgdG90YWxDYXJ0ZWRJdGVtID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBsb2NhbFN0b3JhZ2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiKTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsSXRlbScpKTtcclxuICAgICAgICB0aGlzLmZpbmRUb3RhbENhcnRlZEl0ZW0oKTtcclxuICAgIC8vICB0aGlzLml0ZW1zID0gdGhpcy5kYXRhU2VydmljZS5nZXRJdGVtcygpOyAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZS5waXBlKFxyXG4gICAgICAgICAgICBzd2l0Y2hNYXAoYWN0aXZhdGVkUm91dGUgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKVxyXG4gICAgICAgICkuZm9yRWFjaCgocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUlkID0gK3BhcmFtc1tcImlkXCJdOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT0gdGhpcy5pdGVtSWQpWzBdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoZSBpdGVtIGlzIGNhcnRlZC4uLi4uLi4uLi4uXCIrdGhpcy5pdGVtLmlzQ2FydGVkKTtcclxuICAgICAgICAgICAgdGhpcy5pc0NhcnRlZCA9IHRoaXMuaXRlbS5pc0NhcnRlZDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLm9uKGFwcGxpY2F0aW9uLkFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQsIChhcmdzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgYXJncy5jYW5jZWwgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVMaWtlKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbS5pc0xpa2UgPSAhdGhpcy5pdGVtLmlzTGlrZTtcclxuICAgICAgICBpZiAodGhpcy5pdGVtLmlzTGlrZSkge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0ubGlrZXMgKz0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0ubGlrZXMgLT0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlSGVhcnQoaXRlbSkge1xyXG4gICAgICAgIGl0ZW0uaXNGYXZvcml0ZSA9ICFpdGVtLmlzRmF2b3JpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgY2F0ZWdvcnlJY29uKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5pdGVtLmNhdGVnb3J5VGFnKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCdXJnZXJcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjBmNSk7IC8vXCJmYS1jdXRsZXJ5XCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkJlZXJcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjBmYyk7IC8vXCJmYS1iZWVyXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlBhbmNha2VcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjBmNCk7IC8vXCJmYS1jb2ZmZWVcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQ2FrZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMWZkKTsgLy9cImZhLWJpcnRoZGF5LWNha2VcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDZkKTsgLy9cImZhLWZpcmVcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ2FydChpdGVtSWQpOiB2b2lke1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImZvb2QgY2FydGVkLi4uXCIpO1xyXG4gICAgICAgIGxldCBsb2NhbFN0b3JhZ2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiKTtcclxuICAgICAgICB2YXIgYWxsSXRlbSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbEl0ZW0nKSk7XHJcblxyXG4gICAgICAgIGlmKGFsbEl0ZW1baXRlbUlkLTFdLmlzQ2FydGVkPT10cnVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWxsSXRlbVtpdGVtSWQtMV0uaXNDYXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc0NhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhbGxJdGVtW2l0ZW1JZC0xXS5pc0NhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDYXJ0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbEl0ZW1cIixKU09OLnN0cmluZ2lmeShhbGxJdGVtKSk7XHJcbiAgICAgICAgdGhpcy5maW5kVG90YWxDYXJ0ZWRJdGVtKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVBbmltYXRpb25PbkNhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kVG90YWxDYXJ0ZWRJdGVtKClcclxuICAgIHsgICBcclxuICAgICAgICBsZXQgbG9jYWxTdG9yYWdlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIik7XHJcbiAgICAgICAgdmFyIGFsbEl0ZW0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsSXRlbVwiKSk7XHJcbiAgICAgICAgdGhpcy50b3RhbENhcnRlZEl0ZW0gPSBhbGxJdGVtLmZpbHRlcihpdGVtID0+IGl0ZW0uaXNDYXJ0ZWQgPT0gdHJ1ZSkubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUFuaW1hdGlvbk9uQ2FydCgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY29uc3QgY291bnQ6IFZpZXcgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoXCJDYXJ0Q291bnRcIik7XHJcbiAgICAgICAgLy8gY291bnQuY3JlYXRlQW5pbWF0aW9uKHtvcGFjaXR5OiAwfSk7XHJcbiAgICAgICAgLy8gY29uc3QgY2FydDogVmlldyA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZChcImNhcnRJbWdcIik7XHJcbiAgICAgICAgLy8gY2FydC5hbmltYXRlKHtcclxuICAgICAgICAvLyAgICAgcm90YXRlOiAzNjAsXHJcbiAgICAgICAgLy8gICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgLy8gfSkudGhlbigoKT0+Y291bnQuY3JlYXRlQW5pbWF0aW9uKHtvcGFjaXR5OiAxfSkpO1xyXG5cclxuICAgICAgLy8gIGNvbnN0IGNvdW50OiBWaWV3ID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkKFwiQ2FydENvdW50XCIpO1xyXG4gICAgICAvLyAgY291bnQuY3JlYXRlQW5pbWF0aW9uKHtvcGFjaXR5OiAwfSk7XHJcbiAgICAgICAgY29uc3QgY2FydDogVmlldyA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZChcImNhcnRJbWdcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2FydCk7XHJcbiAgICAgICAgY2FydC5hbmltYXRlKHtcclxuICAgICAgICAgICAgcm90YXRlOiAzNjAsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgfSkudGhlbigoKT0+Y2FydC5yb3RhdGU9MCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==