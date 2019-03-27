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
        var localStorage = require("nativescript-localstorage");
        this.items = JSON.parse(localStorage.getItem('allItem'));
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
    };
    DetailComponent.prototype.onCartTap = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBQy9ELDRDQUEyQztBQUMzQyxnQ0FBK0I7QUFDL0Isc0RBQXdEO0FBRXhELHFDQUEyQztBQVMzQztJQU1JLHlCQUNZLFNBQW9CLEVBQ3BCLGdCQUFrQyxFQUNsQyxJQUFVLEVBQ1YsV0FBd0I7UUFKcEMsaUJBcUJDO1FBcEJXLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFaEMsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUU3RCx1REFBdUQ7UUFFbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBRWpDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDOUIscUJBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUMsQ0FDckQsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ2IsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEVBQUUsSUFBSSxLQUFJLENBQUMsTUFBTSxFQUF0QixDQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsR0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hFLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxvQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztTQUN4QjthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxJQUFJO1FBQ1osSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDdkMsQ0FBQztJQUVELHNDQUFZLEdBQVo7UUFDSSxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQzNCLEtBQUssUUFBUTtnQkFDVCxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxlQUFlO2dCQUNuRCxNQUFNO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVk7Z0JBQ2hELE1BQU07WUFDVixLQUFLLFNBQVM7Z0JBQ1YsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsY0FBYztnQkFDbEQsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7Z0JBQ3pELE1BQU07WUFDVjtnQkFDSSxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZO2dCQUNoRCxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsaUNBQU8sR0FBUCxVQUFRLE1BQU07UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUIsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDeEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFFMUQsSUFBRyxPQUFPLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBRSxJQUFJLEVBQ25DO1lBQ0ksT0FBTyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO2FBRUQ7WUFDSSxPQUFPLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDeEI7UUFFRCxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNELG1DQUFTLEdBQVQ7SUFFQSxDQUFDO0lBekZRLGVBQWU7UUFQM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3hDLENBQUM7eUNBU3lCLGtCQUFTO1lBQ0YseUJBQWdCO1lBQzVCLFdBQUk7WUFDRyxrQkFBVztPQVYzQixlQUFlLENBMkYzQjtJQUFELHNCQUFDO0NBQUEsQUEzRkQsSUEyRkM7QUEzRlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4uL2RhdGEvaXRlbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiRGV0YWlsXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL2RldGFpbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgaXRlbUlkOiBudW1iZXI7XHJcbiAgICBpdGVtOiBJdGVtO1xyXG4gICAgaXRlbXM6IEFycmF5PEl0ZW0+O1xyXG4gICAgaXNDYXJ0ZWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxyXG4gICAgICAgIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGxvY2FsU3RvcmFnZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxJdGVtJykpO1xyXG5cclxuICAgIC8vICAgIHRoaXMuaXRlbXMgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldEl0ZW1zKCk7ICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlLnBpcGUoXHJcbiAgICAgICAgICAgIHN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXHJcbiAgICAgICAgKS5mb3JFYWNoKChwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtSWQgPSArcGFyYW1zW1wiaWRcIl07ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IHRoaXMuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PSB0aGlzLml0ZW1JZClbMF07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhlIGl0ZW0gaXMgY2FydGVkLi4uLi4uLi4uLi5cIit0aGlzLml0ZW0uaXNDYXJ0ZWQpO1xyXG4gICAgICAgICAgICB0aGlzLmlzQ2FydGVkID0gdGhpcy5pdGVtLmlzQ2FydGVkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUxpa2UoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtLmlzTGlrZSA9ICF0aGlzLml0ZW0uaXNMaWtlO1xyXG4gICAgICAgIGlmICh0aGlzLml0ZW0uaXNMaWtlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbS5saWtlcyArPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbS5saWtlcyAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVIZWFydChpdGVtKSB7XHJcbiAgICAgICAgaXRlbS5pc0Zhdm9yaXRlID0gIWl0ZW0uaXNGYXZvcml0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjYXRlZ29yeUljb24oKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLml0ZW0uY2F0ZWdvcnlUYWcpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkJ1cmdlclwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMGY1KTsgLy9cImZhLWN1dGxlcnlcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQmVlclwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMGZjKTsgLy9cImZhLWJlZXJcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiUGFuY2FrZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMGY0KTsgLy9cImZhLWNvZmZlZVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDYWtlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYxZmQpOyAvL1wiZmEtYmlydGhkYXktY2FrZVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwNmQpOyAvL1wiZmEtZmlyZVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2VUYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDYXJ0KGl0ZW1JZCk6IHZvaWR7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmb29kIGNhcnRlZC4uLlwiKTtcclxuICAgICAgICBsZXQgbG9jYWxTdG9yYWdlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIik7XHJcbiAgICAgICAgdmFyIGFsbEl0ZW0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxJdGVtJykpO1xyXG5cclxuICAgICAgICBpZihhbGxJdGVtW2l0ZW1JZC0xXS5pc0NhcnRlZD09dHJ1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFsbEl0ZW1baXRlbUlkLTFdLmlzQ2FydGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDYXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWxsSXRlbVtpdGVtSWQtMV0uaXNDYXJ0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzQ2FydGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWxsSXRlbVwiLEpTT04uc3RyaW5naWZ5KGFsbEl0ZW0pKTtcclxuICAgIH1cclxuICAgIG9uQ2FydFRhcCgpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=