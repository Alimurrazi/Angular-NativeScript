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
        this.items = this.dataService.getItems();
        this.page.actionBarHidden = true;
        this.pageRoute.activatedRoute.pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; })).forEach(function (params) {
            _this.itemId = +params["id"];
            _this.item = _this.items.filter(function (item) { return item.id == _this.itemId; })[0];
            console.log(_this.item.isCarted);
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
        allItem[itemId - 1].isCarted = true;
        this.isCarted = true;
        localStorage.setItem("allItem", JSON.stringify(allItem));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBQy9ELDRDQUEyQztBQUMzQyxnQ0FBK0I7QUFDL0Isc0RBQXdEO0FBRXhELHFDQUEyQztBQVMzQztJQU1JLHlCQUNZLFNBQW9CLEVBQ3BCLGdCQUFrQyxFQUNsQyxJQUFVLEVBQ1YsV0FBd0I7UUFKcEMsaUJBa0JDO1FBakJXLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXpDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUVqQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQzlCLHFCQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDLENBQ3JELENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNiLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLElBQUksS0FBSSxDQUFDLE1BQU0sRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7U0FDeEI7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztTQUN4QjtJQUNMLENBQUM7SUFFRCxxQ0FBVyxHQUFYLFVBQVksSUFBSTtRQUNaLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQ0ksUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUMzQixLQUFLLFFBQVE7Z0JBQ1QsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBZTtnQkFDbkQsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZO2dCQUNoRCxNQUFNO1lBQ1YsS0FBSyxTQUFTO2dCQUNWLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGNBQWM7Z0JBQ2xELE1BQU07WUFDVixLQUFLLE1BQU07Z0JBQ1AsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMscUJBQXFCO2dCQUN6RCxNQUFNO1lBQ1Y7Z0JBQ0ksT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWTtnQkFDaEQsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELGlDQUFPLEdBQVAsVUFBUSxNQUFNO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3hELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzFELE9BQU8sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQXpFUSxlQUFlO1FBUDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN4QyxDQUFDO3lDQVN5QixrQkFBUztZQUNGLHlCQUFnQjtZQUM1QixXQUFJO1lBQ0csa0JBQVc7T0FWM0IsZUFBZSxDQTJFM0I7SUFBRCxzQkFBQztDQUFBLEFBM0VELElBMkVDO0FBM0VZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFBhZ2VSb3V0ZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuLi9kYXRhL2l0ZW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkRldGFpbFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9kZXRhaWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGl0ZW1JZDogbnVtYmVyO1xyXG4gICAgaXRlbTogSXRlbTtcclxuICAgIGl0ZW1zOiBBcnJheTxJdGVtPjtcclxuICAgIGlzQ2FydGVkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcclxuICAgICAgICBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkge1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5kYXRhU2VydmljZS5nZXRJdGVtcygpOyAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZS5waXBlKFxyXG4gICAgICAgICAgICBzd2l0Y2hNYXAoYWN0aXZhdGVkUm91dGUgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKVxyXG4gICAgICAgICkuZm9yRWFjaCgocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUlkID0gK3BhcmFtc1tcImlkXCJdOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT0gdGhpcy5pdGVtSWQpWzBdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLml0ZW0uaXNDYXJ0ZWQpO1xyXG4gICAgICAgICAgICB0aGlzLmlzQ2FydGVkID0gdGhpcy5pdGVtLmlzQ2FydGVkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUxpa2UoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtLmlzTGlrZSA9ICF0aGlzLml0ZW0uaXNMaWtlO1xyXG4gICAgICAgIGlmICh0aGlzLml0ZW0uaXNMaWtlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbS5saWtlcyArPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbS5saWtlcyAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVIZWFydChpdGVtKSB7XHJcbiAgICAgICAgaXRlbS5pc0Zhdm9yaXRlID0gIWl0ZW0uaXNGYXZvcml0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjYXRlZ29yeUljb24oKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLml0ZW0uY2F0ZWdvcnlUYWcpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkJ1cmdlclwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMGY1KTsgLy9cImZhLWN1dGxlcnlcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQmVlclwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMGZjKTsgLy9cImZhLWJlZXJcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiUGFuY2FrZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMGY0KTsgLy9cImZhLWNvZmZlZVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDYWtlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYxZmQpOyAvL1wiZmEtYmlydGhkYXktY2FrZVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwNmQpOyAvL1wiZmEtZmlyZVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2VUYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDYXJ0KGl0ZW1JZCk6IHZvaWR7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmb29kIGNhcnRlZC4uLlwiKTtcclxuICAgICAgICBsZXQgbG9jYWxTdG9yYWdlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIik7XHJcbiAgICAgICAgdmFyIGFsbEl0ZW0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxJdGVtJykpO1xyXG4gICAgICAgIGFsbEl0ZW1baXRlbUlkLTFdLmlzQ2FydGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzQ2FydGVkID0gdHJ1ZTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbEl0ZW1cIixKU09OLnN0cmluZ2lmeShhbGxJdGVtKSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==