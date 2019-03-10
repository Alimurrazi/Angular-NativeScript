"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CartComponent = /** @class */ (function () {
    function CartComponent() {
        // Use the component constructor to inject providers.
    }
    CartComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        var localStorage = require("nativescript-localstorage");
        var allItem = JSON.parse(localStorage.getItem('allItem'));
        this.items = allItem;
        //   this.items = new Array(
        //       {food:"Bites and Nibbles Items, Prawn Tempura with wasabi mayo", topping:"No Toppings", amount: "1", money: "440 TK"},
        //       {food:"Bites and Nibbles Items, Prawn Tempura with wasabi mayo", topping:"No Toppings", amount: "1", money: "440 TK"},
        //       {food:"Bites and Nibbles Items, Prawn Tempura with wasabi mayo", topping:"No Toppings", amount: "1", money: "440 TK"}
        //   )
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: "Cart",
            moduleId: module.id,
            templateUrl: "./cart.component.html",
            styleUrls: ["./cart.component.css"],
        }),
        __metadata("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQVFsRDtJQUdJO1FBQ0kscURBQXFEO0lBQ3pELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO1FBRXZDLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3hELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLDRCQUE0QjtRQUM1QiwrSEFBK0g7UUFDL0gsK0hBQStIO1FBQy9ILDhIQUE4SDtRQUM5SCxNQUFNO0lBQ04sQ0FBQztJQWxCUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDOztPQUNXLGFBQWEsQ0FtQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQ2FydFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY2FydC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2NhcnQuY29tcG9uZW50LmNzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgaXRlbXM7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgICAgXHJcbiAgICAgICAgbGV0IGxvY2FsU3RvcmFnZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIpO1xyXG4gICAgICAgIHZhciBhbGxJdGVtID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsSXRlbScpKTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gYWxsSXRlbTtcclxuICAgIC8vICAgdGhpcy5pdGVtcyA9IG5ldyBBcnJheShcclxuICAgIC8vICAgICAgIHtmb29kOlwiQml0ZXMgYW5kIE5pYmJsZXMgSXRlbXMsIFByYXduIFRlbXB1cmEgd2l0aCB3YXNhYmkgbWF5b1wiLCB0b3BwaW5nOlwiTm8gVG9wcGluZ3NcIiwgYW1vdW50OiBcIjFcIiwgbW9uZXk6IFwiNDQwIFRLXCJ9LFxyXG4gICAgLy8gICAgICAge2Zvb2Q6XCJCaXRlcyBhbmQgTmliYmxlcyBJdGVtcywgUHJhd24gVGVtcHVyYSB3aXRoIHdhc2FiaSBtYXlvXCIsIHRvcHBpbmc6XCJObyBUb3BwaW5nc1wiLCBhbW91bnQ6IFwiMVwiLCBtb25leTogXCI0NDAgVEtcIn0sXHJcbiAgICAvLyAgICAgICB7Zm9vZDpcIkJpdGVzIGFuZCBOaWJibGVzIEl0ZW1zLCBQcmF3biBUZW1wdXJhIHdpdGggd2FzYWJpIG1heW9cIiwgdG9wcGluZzpcIk5vIFRvcHBpbmdzXCIsIGFtb3VudDogXCIxXCIsIG1vbmV5OiBcIjQ0MCBUS1wifVxyXG4gICAgLy8gICApXHJcbiAgICB9XHJcbn1cclxuIl19