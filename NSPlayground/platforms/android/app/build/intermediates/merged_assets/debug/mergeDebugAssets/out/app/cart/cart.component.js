"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs = require("tns-core-modules/ui/dialogs");
var CartComponent = /** @class */ (function () {
    function CartComponent(router) {
        this.router = router;
        this.totalPrice = 0;
        // Use the component constructor to inject providers.
    }
    CartComponent.prototype.getCartedData = function () {
        var localStorage = require("nativescript-localstorage");
        var allItem = JSON.parse(localStorage.getItem("allItem"));
        this.items = allItem.filter(function (item) { return item.isCarted == true; });
        // this.items = allItem;
        console.log(this.items);
        this.totalPriceCalculation(this.items);
    };
    CartComponent.prototype.ngOnInit = function () {
        this.getCartedData();
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
        var allItem = JSON.parse(localStorage.getItem("allItem"));
        allItem[itemId - 1].amount++;
        //  console.log(allItem[itemId - 1]);
        localStorage.setItem("allItem", JSON.stringify(allItem));
        //  this.router.navigate(['cart']);
        this.getCartedData();
    };
    CartComponent.prototype.removeAmount = function (itemId) {
        console.log("remove...");
        var localStorage = require("nativescript-localstorage");
        var allItem = JSON.parse(localStorage.getItem("allItem"));
        var currentAmount = allItem[itemId - 1].amount - 1;
        if (currentAmount == 0) {
            this.showDialog();
        }
        else {
            allItem[itemId - 1].amount = currentAmount;
            localStorage.setItem("allItem", JSON.stringify(allItem));
            this.getCartedData();
        }
    };
    CartComponent.prototype.showDialog = function () {
        dialogs
            .alert({
            title: "",
            message: "You must select one item... ",
            okButtonText: "Ok"
        })
            .then(function () {
            console.log("Dialog closed!");
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFDekMscURBQXVEO0FBUXZEO0lBSUUsdUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRmxDLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFHckIscURBQXFEO0lBQ3ZELENBQUM7SUFFRCxxQ0FBYSxHQUFiO1FBQ0UsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDeEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQXJCLENBQXFCLENBQUMsQ0FBQztRQUM1RCx3QkFBd0I7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsNkNBQXFCLEdBQXJCLFVBQXNCLE9BQU87UUFBN0IsaUJBS0M7UUFKQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUNsQixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxNQUFNO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN4RCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMxRCxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQy9CLHFDQUFxQztRQUNuQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDekQsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLE1BQU07UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QixJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN4RCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDbkQsSUFBSSxhQUFhLElBQUksQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjthQUFNO1lBQ0wsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO1lBQzNDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRUQsa0NBQVUsR0FBVjtRQUNFLE9BQU87YUFDSixLQUFLLENBQUM7WUFDTCxLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSw4QkFBOEI7WUFDdkMsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQzthQUNELElBQUksQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUEvRFUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDcEMsQ0FBQzt5Q0FLNEIsZUFBTTtPQUp2QixhQUFhLENBbUV6QjtJQUFELG9CQUFDO0NBQUEsQUFuRUQsSUFtRUM7QUFuRVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSwgQ2hhbmdlZERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiQ2FydFwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jYXJ0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2NhcnQuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaXRlbXM7XHJcbiAgdG90YWxQcmljZTogbnVtYmVyID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICB9XHJcblxyXG4gIGdldENhcnRlZERhdGEoKSB7XHJcbiAgICBsZXQgbG9jYWxTdG9yYWdlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIik7XHJcbiAgICB2YXIgYWxsSXRlbSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbGxJdGVtXCIpKTtcclxuICAgIHRoaXMuaXRlbXMgPSBhbGxJdGVtLmZpbHRlcihpdGVtID0+IGl0ZW0uaXNDYXJ0ZWQgPT0gdHJ1ZSk7XHJcbiAgIC8vIHRoaXMuaXRlbXMgPSBhbGxJdGVtO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5pdGVtcyk7XHJcbiAgICB0aGlzLnRvdGFsUHJpY2VDYWxjdWxhdGlvbih0aGlzLml0ZW1zKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5nZXRDYXJ0ZWREYXRhKCk7XHJcbiAgfVxyXG5cclxuICB0b3RhbFByaWNlQ2FsY3VsYXRpb24oYWxsSXRlbSkge1xyXG4gICAgdGhpcy50b3RhbFByaWNlID0gMDtcclxuICAgIGFsbEl0ZW0uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgdGhpcy50b3RhbFByaWNlID0gdGhpcy50b3RhbFByaWNlICsgaXRlbS5wcmljZSAqIGl0ZW0uYW1vdW50O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRBbW91bnQoaXRlbUlkKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImFkZC4uLlwiKTtcclxuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiKTtcclxuICAgIHZhciBhbGxJdGVtID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbEl0ZW1cIikpO1xyXG4gICAgYWxsSXRlbVtpdGVtSWQgLSAxXS5hbW91bnQrKztcclxuICAvLyAgY29uc29sZS5sb2coYWxsSXRlbVtpdGVtSWQgLSAxXSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbEl0ZW1cIiwgSlNPTi5zdHJpbmdpZnkoYWxsSXRlbSkpO1xyXG4gICAgLy8gIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY2FydCddKTtcclxuICAgIHRoaXMuZ2V0Q2FydGVkRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQW1vdW50KGl0ZW1JZCkge1xyXG4gICAgY29uc29sZS5sb2coXCJyZW1vdmUuLi5cIik7XHJcbiAgICBsZXQgbG9jYWxTdG9yYWdlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIik7XHJcbiAgICB2YXIgYWxsSXRlbSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbGxJdGVtXCIpKTtcclxuICAgIHZhciBjdXJyZW50QW1vdW50ID0gYWxsSXRlbVtpdGVtSWQgLSAxXS5hbW91bnQgLSAxO1xyXG4gICAgaWYgKGN1cnJlbnRBbW91bnQgPT0gMCkge1xyXG4gICAgICB0aGlzLnNob3dEaWFsb2coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsbEl0ZW1baXRlbUlkIC0gMV0uYW1vdW50ID0gY3VycmVudEFtb3VudDtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGxJdGVtXCIsIEpTT04uc3RyaW5naWZ5KGFsbEl0ZW0pKTtcclxuICAgICAgdGhpcy5nZXRDYXJ0ZWREYXRhKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93RGlhbG9nKCkge1xyXG4gICAgZGlhbG9nc1xyXG4gICAgICAuYWxlcnQoe1xyXG4gICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiWW91IG11c3Qgc2VsZWN0IG9uZSBpdGVtLi4uIFwiLFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG5cclxuXHJcbn1cclxuIl19