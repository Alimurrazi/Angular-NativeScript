"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var CartComponent = /** @class */ (function () {
    function CartComponent(router) {
        this.router = router;
        this.totalPrice = 0;
        // Use the component constructor to inject providers.
    }
    CartComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        var localStorage = require("nativescript-localstorage");
        var allItem = JSON.parse(localStorage.getItem("allItem"));
        allItem = allItem.filter(function (item) { return item.isCarted == true; });
        this.items = allItem;
        console.log(this.items);
        this.totalPriceCalculation(allItem);
    };
    CartComponent.prototype.totalPriceCalculation = function (allItem) {
        var _this = this;
        this.totalPrice = 0;
        allItem.forEach(function (item) {
            _this.totalPrice = _this.totalPrice + item.price * item.amount;
        });
    };
    CartComponent.prototype.addAmount = function (itemId) {
        console.log("add...");
        var localStorage = require("nativescript-localstorage");
        var allItem = JSON.parse(localStorage.getItem('allItem'));
        allItem[itemId - 1].amount++;
        localStorage.setItem("allItem", JSON.stringify(allItem));
        this.router.navigate(['cart']);
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: "Cart",
            moduleId: module.id,
            templateUrl: "./cart.component.html",
            styleUrls: ["./cart.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFPekM7SUFJRSx1QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGbEMsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUdyQixxREFBcUQ7SUFDdkQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSx1Q0FBdUM7UUFDdkMsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDeEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsNkNBQXFCLEdBQXJCLFVBQXNCLE9BQU87UUFBN0IsaUJBS0M7UUFKQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUNsQixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxNQUFNO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN4RCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMxRCxPQUFPLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQWhDVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQyxDQUFDO3lDQUs0QixlQUFNO09BSnZCLGFBQWEsQ0FrQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQWxDRCxJQWtDQztBQWxDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiQ2FydFwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jYXJ0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2NhcnQuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaXRlbXM7XHJcbiAgdG90YWxQcmljZTogbnVtYmVyID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICBsZXQgbG9jYWxTdG9yYWdlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIik7XHJcbiAgICB2YXIgYWxsSXRlbSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbGxJdGVtXCIpKTtcclxuICAgIGFsbEl0ZW0gPSBhbGxJdGVtLmZpbHRlcihpdGVtID0+IGl0ZW0uaXNDYXJ0ZWQgPT0gdHJ1ZSk7XHJcbiAgICB0aGlzLml0ZW1zID0gYWxsSXRlbTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuaXRlbXMpO1xyXG4gICAgdGhpcy50b3RhbFByaWNlQ2FsY3VsYXRpb24oYWxsSXRlbSk7XHJcbiAgfVxyXG5cclxuICB0b3RhbFByaWNlQ2FsY3VsYXRpb24oYWxsSXRlbSkge1xyXG4gICAgdGhpcy50b3RhbFByaWNlID0gMDtcclxuICAgIGFsbEl0ZW0uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgdGhpcy50b3RhbFByaWNlID0gdGhpcy50b3RhbFByaWNlICsgaXRlbS5wcmljZSAqIGl0ZW0uYW1vdW50O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRBbW91bnQoaXRlbUlkKXtcclxuICAgIGNvbnNvbGUubG9nKFwiYWRkLi4uXCIpO1xyXG4gICAgbGV0IGxvY2FsU3RvcmFnZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIpO1xyXG4gICAgdmFyIGFsbEl0ZW0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxJdGVtJykpO1xyXG4gICAgYWxsSXRlbVtpdGVtSWQtMV0uYW1vdW50Kys7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbEl0ZW1cIixKU09OLnN0cmluZ2lmeShhbGxJdGVtKSk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2NhcnQnXSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=