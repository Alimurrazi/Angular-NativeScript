"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var page_1 = require("ui/page");
var router_2 = require("nativescript-angular/router");
var data_1 = require("../data/data");
var DetailComponent = /** @class */ (function () {
    function DetailComponent(pageRoute, routerExtensions, page, dataService) {
        var _this = this;
        this.pageRoute = pageRoute;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.dataService = dataService;
        this.totalCartedItem = 0;
        var localStorage = require("nativescript-localstorage");
        this.items = JSON.parse(localStorage.getItem('allItem'));
        //  this.findTotalCartedItem();
        //    this.items = this.dataService.getItems();        
        this.page.actionBarHidden = true;
        this.pageRoute.activatedRoute.pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; })).forEach(function (params) {
            _this.itemId = +params["id"];
            _this.item = _this.items.filter(function (item) { return item.id == _this.itemId; })[0];
            console.log("the item is carted..........." + _this.item.isCarted);
            _this.isCarted = _this.item.isCarted;
        });
    }
    DetailComponent.prototype.ngOnInit = function () {
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
        localStorage.setItem("allItem", JSON.stringify(allItem));
        this.findTotalCartedItem();
    };
    DetailComponent.prototype.findTotalCartedItem = function () {
        this.createAnimationOnCart();
        var localStorage = require("nativescript-localstorage");
        var allItem = JSON.parse(localStorage.getItem("allItem"));
        this.totalCartedItem = allItem.filter(function (item) { return item.isCarted == true; }).length;
        console.log("...................." + this.totalCartedItem);
    };
    DetailComponent.prototype.createAnimationOnCart = function () {
        var count = this.page.getViewById("CartCount");
        count.createAnimation({ opacity: 0 });
        var cart = this.page.getViewById("cartImg");
        cart.animate({
            rotate: 360,
            duration: 1000
        }).then(function () { return count.createAnimation({ opacity: 1 }); });
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
            data_1.DataService])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBQy9ELDRDQUEyQztBQUMzQyxnQ0FBcUM7QUFDckMsc0RBQXdEO0FBRXhELHFDQUEyQztBQVMzQztJQU9JLHlCQUNZLFNBQW9CLEVBQ3BCLGdCQUFrQyxFQUNsQyxJQUFVLEVBQ1YsV0FBd0I7UUFKcEMsaUJBcUJDO1FBcEJXLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFOcEMsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFRaEIsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMzRCwrQkFBK0I7UUFDakMsdURBQXVEO1FBRW5ELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUVqQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQzlCLHFCQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDLENBQ3JELENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNiLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLElBQUks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QUM7Q0FBQSxBQS9HRCxJQStHQztBQS9HWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFBhZ2UsIFZpZXcgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi4vZGF0YS9pdGVtLm1vZGVsXCI7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJEZXRhaWxcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2RldGFpbC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vZGV0YWlsLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBpdGVtSWQ6IG51bWJlcjtcclxuICAgIGl0ZW06IEl0ZW07XHJcbiAgICBpdGVtczogQXJyYXk8SXRlbT47XHJcbiAgICBpc0NhcnRlZDtcclxuICAgIHRvdGFsQ2FydGVkSXRlbSA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxyXG4gICAgICAgIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGxvY2FsU3RvcmFnZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxJdGVtJykpO1xyXG4gICAgICAvLyAgdGhpcy5maW5kVG90YWxDYXJ0ZWRJdGVtKCk7XHJcbiAgICAvLyAgICB0aGlzLml0ZW1zID0gdGhpcy5kYXRhU2VydmljZS5nZXRJdGVtcygpOyAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZS5waXBlKFxyXG4gICAgICAgICAgICBzd2l0Y2hNYXAoYWN0aXZhdGVkUm91dGUgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKVxyXG4gICAgICAgICkuZm9yRWFjaCgocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUlkID0gK3BhcmFtc1tcImlkXCJdOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT0gdGhpcy5pdGVtSWQpWzBdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoZSBpdGVtIGlzIGNhcnRlZC4uLi4uLi4uLi4uXCIrdGhpcy5pdGVtLmlzQ2FydGVkKTtcclxuICAgICAgICAgICAgdGhpcy5pc0NhcnRlZCA9IHRoaXMuaXRlbS5pc0NhcnRlZDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVMaWtlKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbS5pc0xpa2UgPSAhdGhpcy5pdGVtLmlzTGlrZTtcclxuICAgICAgICBpZiAodGhpcy5pdGVtLmlzTGlrZSkge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0ubGlrZXMgKz0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0ubGlrZXMgLT0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlSGVhcnQoaXRlbSkge1xyXG4gICAgICAgIGl0ZW0uaXNGYXZvcml0ZSA9ICFpdGVtLmlzRmF2b3JpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgY2F0ZWdvcnlJY29uKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5pdGVtLmNhdGVnb3J5VGFnKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCdXJnZXJcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjBmNSk7IC8vXCJmYS1jdXRsZXJ5XCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkJlZXJcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjBmYyk7IC8vXCJmYS1iZWVyXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlBhbmNha2VcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjBmNCk7IC8vXCJmYS1jb2ZmZWVcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQ2FrZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMWZkKTsgLy9cImZhLWJpcnRoZGF5LWNha2VcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDZkKTsgLy9cImZhLWZpcmVcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ2FydChpdGVtSWQpOiB2b2lke1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImZvb2QgY2FydGVkLi4uXCIpO1xyXG4gICAgICAgIGxldCBsb2NhbFN0b3JhZ2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiKTtcclxuICAgICAgICB2YXIgYWxsSXRlbSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbEl0ZW0nKSk7XHJcblxyXG4gICAgICAgIGlmKGFsbEl0ZW1baXRlbUlkLTFdLmlzQ2FydGVkPT10cnVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWxsSXRlbVtpdGVtSWQtMV0uaXNDYXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc0NhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhbGxJdGVtW2l0ZW1JZC0xXS5pc0NhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDYXJ0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbEl0ZW1cIixKU09OLnN0cmluZ2lmeShhbGxJdGVtKSk7XHJcbiAgICAgICAgdGhpcy5maW5kVG90YWxDYXJ0ZWRJdGVtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZFRvdGFsQ2FydGVkSXRlbSgpXHJcbiAgICB7ICAgXHJcbiAgICAgICAgdGhpcy5jcmVhdGVBbmltYXRpb25PbkNhcnQoKTtcclxuICAgICAgICBsZXQgbG9jYWxTdG9yYWdlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIik7XHJcbiAgICAgICAgdmFyIGFsbEl0ZW0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsSXRlbVwiKSk7XHJcbiAgICAgICAgdGhpcy50b3RhbENhcnRlZEl0ZW0gPSBhbGxJdGVtLmZpbHRlcihpdGVtID0+IGl0ZW0uaXNDYXJ0ZWQgPT0gdHJ1ZSkubGVuZ3RoO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLi4uLi4uLi4uLi4uLi4uLi4uLi5cIit0aGlzLnRvdGFsQ2FydGVkSXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQW5pbWF0aW9uT25DYXJ0KClcclxuICAgIHtcclxuICAgICAgICBjb25zdCBjb3VudDogVmlldyA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZChcIkNhcnRDb3VudFwiKTtcclxuICAgICAgICBjb3VudC5jcmVhdGVBbmltYXRpb24oe29wYWNpdHk6IDB9KTtcclxuICAgICAgICBjb25zdCBjYXJ0OiBWaWV3ID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkKFwiY2FydEltZ1wiKTtcclxuICAgICAgICBjYXJ0LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICByb3RhdGU6IDM2MCxcclxuICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgICAgICB9KS50aGVuKCgpPT5jb3VudC5jcmVhdGVBbmltYXRpb24oe29wYWNpdHk6IDF9KSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==