"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CartComponent = /** @class */ (function () {
    function CartComponent() {
        // Use the component constructor to inject providers.
    }
    CartComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        /*  let localStorage = require("nativescript-localstorage");
          var allItem = JSON.parse(localStorage.getItem('allItem'));
          console.log(allItem); */
        this.items = new Array({ food: "Bites and Nibbles Items, Prawn Tempura with wasabi mayo", topping: "No Toppings", amount: "1", money: "440 TK" }, { food: "Bites and Nibbles Items, Prawn Tempura with wasabi mayo", topping: "No Toppings", amount: "1", money: "440 TK" }, { food: "Bites and Nibbles Items, Prawn Tempura with wasabi mayo", topping: "No Toppings", amount: "1", money: "440 TK" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQVFsRDtJQUdJO1FBQ0kscURBQXFEO0lBQ3pELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO1FBRXpDOztrQ0FFMEI7UUFFMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FDbEIsRUFBQyxJQUFJLEVBQUMseURBQXlELEVBQUUsT0FBTyxFQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDckgsRUFBQyxJQUFJLEVBQUMseURBQXlELEVBQUUsT0FBTyxFQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDckgsRUFBQyxJQUFJLEVBQUMseURBQXlELEVBQUUsT0FBTyxFQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsQ0FDeEgsQ0FBQTtJQUVILENBQUM7SUFwQlEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzs7T0FDVyxhQUFhLENBcUJ6QjtJQUFELG9CQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkNhcnRcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NhcnQuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9jYXJ0LmNvbXBvbmVudC5jc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGl0ZW1zO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICAgIFxyXG4gICAgICAvKiAgbGV0IGxvY2FsU3RvcmFnZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIpO1xyXG4gICAgICAgIHZhciBhbGxJdGVtID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsSXRlbScpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhbGxJdGVtKTsgKi9cclxuXHJcbiAgICAgIHRoaXMuaXRlbXMgPSBuZXcgQXJyYXkoXHJcbiAgICAgICAgICB7Zm9vZDpcIkJpdGVzIGFuZCBOaWJibGVzIEl0ZW1zLCBQcmF3biBUZW1wdXJhIHdpdGggd2FzYWJpIG1heW9cIiwgdG9wcGluZzpcIk5vIFRvcHBpbmdzXCIsIGFtb3VudDogXCIxXCIsIG1vbmV5OiBcIjQ0MCBUS1wifSxcclxuICAgICAgICAgIHtmb29kOlwiQml0ZXMgYW5kIE5pYmJsZXMgSXRlbXMsIFByYXduIFRlbXB1cmEgd2l0aCB3YXNhYmkgbWF5b1wiLCB0b3BwaW5nOlwiTm8gVG9wcGluZ3NcIiwgYW1vdW50OiBcIjFcIiwgbW9uZXk6IFwiNDQwIFRLXCJ9LFxyXG4gICAgICAgICAge2Zvb2Q6XCJCaXRlcyBhbmQgTmliYmxlcyBJdGVtcywgUHJhd24gVGVtcHVyYSB3aXRoIHdhc2FiaSBtYXlvXCIsIHRvcHBpbmc6XCJObyBUb3BwaW5nc1wiLCBhbW91bnQ6IFwiMVwiLCBtb25leTogXCI0NDAgVEtcIn1cclxuICAgICAgKVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=