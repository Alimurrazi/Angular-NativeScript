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
        allItem = allItem.filter(function (item) { return item.isCarted == true; });
        this.items = allItem;
        //  console.log(this.items);
        this.totalPriceCalculation(allItem);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFDekMscURBQXVEO0FBUXZEO0lBSUUsdUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRmxDLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFHckIscURBQXFEO0lBQ3ZELENBQUM7SUFFRCxxQ0FBYSxHQUFiO1FBQ0UsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDeEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3JCLDRCQUE0QjtRQUM1QixJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELDZDQUFxQixHQUFyQixVQUFzQixPQUFPO1FBQTdCLGlCQUtDO1FBSkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDbEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsTUFBTTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDeEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMvQixxQ0FBcUM7UUFDbkMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3pELG1DQUFtQztRQUNuQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELG9DQUFZLEdBQVosVUFBYSxNQUFNO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDeEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELElBQUksYUFBYSxJQUFJLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztZQUMzQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFDRSxPQUFPO2FBQ0osS0FBSyxDQUFDO1lBQ0wsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsOEJBQThCO1lBQ3ZDLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUM7YUFDRCxJQUFJLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBL0RVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7eUNBSzRCLGVBQU07T0FKdkIsYUFBYSxDQWdFekI7SUFBRCxvQkFBQztDQUFBLEFBaEVELElBZ0VDO0FBaEVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXksIENoYW5nZWREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIkNhcnRcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2FydC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9jYXJ0LmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGl0ZW1zO1xyXG4gIHRvdGFsUHJpY2U6IG51bWJlciA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgfVxyXG5cclxuICBnZXRDYXJ0ZWREYXRhKCkge1xyXG4gICAgbGV0IGxvY2FsU3RvcmFnZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIpO1xyXG4gICAgdmFyIGFsbEl0ZW0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsSXRlbVwiKSk7XHJcbiAgICBhbGxJdGVtID0gYWxsSXRlbS5maWx0ZXIoaXRlbSA9PiBpdGVtLmlzQ2FydGVkID09IHRydWUpO1xyXG4gICAgdGhpcy5pdGVtcyA9IGFsbEl0ZW07XHJcbiAgICAvLyAgY29uc29sZS5sb2codGhpcy5pdGVtcyk7XHJcbiAgICB0aGlzLnRvdGFsUHJpY2VDYWxjdWxhdGlvbihhbGxJdGVtKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5nZXRDYXJ0ZWREYXRhKCk7XHJcbiAgfVxyXG5cclxuICB0b3RhbFByaWNlQ2FsY3VsYXRpb24oYWxsSXRlbSkge1xyXG4gICAgdGhpcy50b3RhbFByaWNlID0gMDtcclxuICAgIGFsbEl0ZW0uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgdGhpcy50b3RhbFByaWNlID0gdGhpcy50b3RhbFByaWNlICsgaXRlbS5wcmljZSAqIGl0ZW0uYW1vdW50O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRBbW91bnQoaXRlbUlkKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImFkZC4uLlwiKTtcclxuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiKTtcclxuICAgIHZhciBhbGxJdGVtID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbEl0ZW1cIikpO1xyXG4gICAgYWxsSXRlbVtpdGVtSWQgLSAxXS5hbW91bnQrKztcclxuICAvLyAgY29uc29sZS5sb2coYWxsSXRlbVtpdGVtSWQgLSAxXSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbEl0ZW1cIiwgSlNPTi5zdHJpbmdpZnkoYWxsSXRlbSkpO1xyXG4gICAgLy8gIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY2FydCddKTtcclxuICAgIHRoaXMuZ2V0Q2FydGVkRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQW1vdW50KGl0ZW1JZCkge1xyXG4gICAgY29uc29sZS5sb2coXCJyZW1vdmUuLi5cIik7XHJcbiAgICBsZXQgbG9jYWxTdG9yYWdlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIik7XHJcbiAgICB2YXIgYWxsSXRlbSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbGxJdGVtXCIpKTtcclxuICAgIHZhciBjdXJyZW50QW1vdW50ID0gYWxsSXRlbVtpdGVtSWQgLSAxXS5hbW91bnQgLSAxO1xyXG4gICAgaWYgKGN1cnJlbnRBbW91bnQgPT0gMCkge1xyXG4gICAgICB0aGlzLnNob3dEaWFsb2coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsbEl0ZW1baXRlbUlkIC0gMV0uYW1vdW50ID0gY3VycmVudEFtb3VudDtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGxJdGVtXCIsIEpTT04uc3RyaW5naWZ5KGFsbEl0ZW0pKTtcclxuICAgICAgdGhpcy5nZXRDYXJ0ZWREYXRhKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93RGlhbG9nKCkge1xyXG4gICAgZGlhbG9nc1xyXG4gICAgICAuYWxlcnQoe1xyXG4gICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiWW91IG11c3Qgc2VsZWN0IG9uZSBpdGVtLi4uIFwiLFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl19