"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.getItems = function () {
        var localStorage = require("nativescript-localstorage");
        var allItem = JSON.parse(localStorage.getItem('items'));
        console.log(allItem);
        // if(allItem == null)
        // {
        //     allItem = [{
        //         "id": 1,
        //         "name": "Manila Ultimate Tombstone Burger",
        //         "cover": "~/assets/images/food/burger640.jpg",
        //         "images": [
        //             "~/assets/images/food/burger/burger1.jpg",
        //             "~/assets/images/food/burger/burger2.jpg",
        //             "~/assets/images/food/burger/burger3.jpg",
        //             "~/assets/images/food/burger/burger4.jpg",
        //             "~/assets/images/food/burger/burger5.jpg",
        //             "~/assets/images/food/burger/burger6.jpg"
        //         ],
        //         "category": "Burger",
        //         "categoryTag": "#2D9CDB",
        //         "price": "300.00",
        //         "likes": 987,
        //         "isLike": false,
        //         "isFavorite": true,
        //         "comments": 13,
        //         "rating": "4.5",
        //         "description": `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        //             \nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        //             \nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!
        //             \nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        //             \nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!`,
        //         "amount": 1,
        //         "isCarted": false,
        //     },
        //     {
        //         "id": 2,
        //         "name": "Quezon Chocolate Marble Pancake",
        //         "cover": "~/assets/images/food/pancake640.jpg",
        //         "images": [
        //             "~/assets/images/food/pancake/pancake1.jpg",
        //             "~/assets/images/food/pancake/pancake2.jpg",
        //             "~/assets/images/food/pancake/pancake3.jpg",
        //             "~/assets/images/food/pancake/pancake4.jpg",
        //             "~/assets/images/food/pancake/pancake5.jpg",
        //             "~/assets/images/food/pancake/pancake6.jpg"
        //         ],
        //         "category": "Pancake",
        //         "categoryTag": "#e4ce0d",
        //         "price": "230.00",
        //         "likes": 891,
        //         "isLike": true,
        //         "isFavorite": true,
        //         "comments": 7,
        //         "rating": "4.0",
        //         "description": `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        //             \nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        //             \nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!
        //             \nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        //             \nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!`,
        //         "amount": 1,
        //         "isCarted": false,    
        //     },
        //     {
        //         "id": 3,
        //         "name": "Binondo Black Forest Cake",
        //         "cover": "~/assets/images/food/cake640.jpg",
        //         "images": [
        //             "~/assets/images/food/cake/cake1.jpg",
        //             "~/assets/images/food/cake/cake2.jpg",
        //             "~/assets/images/food/cake/cake3.jpg",
        //             "~/assets/images/food/cake/cake4.jpg"
        //         ],
        //         "category": "Cake",
        //         "categoryTag": "#27AE60",
        //         "price": "300.00",
        //         "likes": 730,
        //         "isLike": true,
        //         "isFavorite": true,
        //         "comments": 11,
        //         "rating": "4.0",
        //         "description": `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        //             \nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        //             \nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!
        //             \nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        //             \nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!`,
        //             "amount": 1,
        //             "isCarted": false,
        //     }];
        //     localStorage.setItem("allItem",JSON.stringify(allItem));
        // }
        return [{
                id: 1,
                name: "Manila Ultimate Tombstone Burger",
                cover: "~/assets/images/food/burger640.jpg",
                images: [
                    "~/assets/images/food/burger/burger1.jpg",
                    "~/assets/images/food/burger/burger2.jpg",
                    "~/assets/images/food/burger/burger3.jpg",
                    "~/assets/images/food/burger/burger4.jpg",
                    "~/assets/images/food/burger/burger5.jpg",
                    "~/assets/images/food/burger/burger6.jpg"
                ],
                category: "Burger",
                categoryTag: "#2D9CDB",
                price: "300.00",
                likes: 987,
                isLike: false,
                isFavorite: true,
                comments: 13,
                rating: "4.5",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n\t\t\t\t\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n\t\t\t\t\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!\n\t\t\t\t\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n                \nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!",
                amount: 1,
                isCarted: false,
            },
            {
                id: 2,
                name: "Quezon Chocolate Marble Pancake",
                cover: "~/assets/images/food/pancake640.jpg",
                images: [
                    "~/assets/images/food/pancake/pancake1.jpg",
                    "~/assets/images/food/pancake/pancake2.jpg",
                    "~/assets/images/food/pancake/pancake3.jpg",
                    "~/assets/images/food/pancake/pancake4.jpg",
                    "~/assets/images/food/pancake/pancake5.jpg",
                    "~/assets/images/food/pancake/pancake6.jpg"
                ],
                category: "Pancake",
                categoryTag: "#e4ce0d",
                price: "230.00",
                likes: 891,
                isLike: true,
                isFavorite: true,
                comments: 7,
                rating: "4.0",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n\t\t\t\t\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n\t\t\t\t\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!\n\t\t\t\t\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n                \nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!",
                amount: 1,
                isCarted: false,
            },
            {
                id: 3,
                name: "Binondo Black Forest Cake",
                cover: "~/assets/images/food/cake640.jpg",
                images: [
                    "~/assets/images/food/cake/cake1.jpg",
                    "~/assets/images/food/cake/cake2.jpg",
                    "~/assets/images/food/cake/cake3.jpg",
                    "~/assets/images/food/cake/cake4.jpg"
                ],
                category: "Cake",
                categoryTag: "#27AE60",
                price: "300.00",
                likes: 730,
                isLike: true,
                isFavorite: true,
                comments: 11,
                rating: "4.0",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n\t\t\t\t\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n\t\t\t\t\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!\n\t\t\t\t\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n                \nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!",
                amount: 1,
                isCarted: false,
            }];
    };
    DataService.prototype.getCategories = function () {
        return [
            {
                cover: "~/assets/images/food/burger640.jpg",
                category: "BURGER",
                count: "13",
            },
            {
                cover: "~/assets/images/food/pancake640.jpg",
                category: "PANCAKE",
                count: "5",
            },
            {
                cover: "~/assets/images/food/cake640.jpg",
                category: "CAKE",
                count: "9",
            },
            {
                cover: "~/assets/images/food/beer640.jpg",
                category: "BEER",
                count: "7",
            }
        ];
    };
    DataService = __decorate([
        core_1.Injectable()
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFPM0M7SUFBQTtJQXlNQSxDQUFDO0lBeE1HLDhCQUFRLEdBQVI7UUFFSSxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN4RCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLHNCQUFzQjtRQUN0QixJQUFJO1FBQ0osbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixzREFBc0Q7UUFDdEQseURBQXlEO1FBQ3pELHNCQUFzQjtRQUN0Qix5REFBeUQ7UUFDekQseURBQXlEO1FBQ3pELHlEQUF5RDtRQUN6RCx5REFBeUQ7UUFDekQseURBQXlEO1FBQ3pELHdEQUF3RDtRQUN4RCxhQUFhO1FBQ2IsZ0NBQWdDO1FBQ2hDLG9DQUFvQztRQUNwQyw2QkFBNkI7UUFDN0Isd0JBQXdCO1FBQ3hCLDJCQUEyQjtRQUMzQiw4QkFBOEI7UUFDOUIsMEJBQTBCO1FBQzFCLDJCQUEyQjtRQUMzQix5VEFBeVQ7UUFDelQscVBBQXFQO1FBQ3JQLCtKQUErSjtRQUMvSixxUEFBcVA7UUFDclAsaUtBQWlLO1FBQ2pLLHVCQUF1QjtRQUN2Qiw2QkFBNkI7UUFDN0IsU0FBUztRQUNULFFBQVE7UUFDUixtQkFBbUI7UUFDbkIscURBQXFEO1FBQ3JELDBEQUEwRDtRQUMxRCxzQkFBc0I7UUFDdEIsMkRBQTJEO1FBQzNELDJEQUEyRDtRQUMzRCwyREFBMkQ7UUFDM0QsMkRBQTJEO1FBQzNELDJEQUEyRDtRQUMzRCwwREFBMEQ7UUFDMUQsYUFBYTtRQUNiLGlDQUFpQztRQUNqQyxvQ0FBb0M7UUFDcEMsNkJBQTZCO1FBQzdCLHdCQUF3QjtRQUN4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TztZQUNIO2dCQUNJLEtBQUssRUFBRSxvQ0FBb0M7Z0JBQzNDLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixLQUFLLEVBQUUsSUFBSTthQUNkO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLHFDQUFxQztnQkFDNUMsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLEtBQUssRUFBRSxHQUFHO2FBQ2I7WUFDRDtnQkFDSSxLQUFLLEVBQUUsa0NBQWtDO2dCQUN6QyxRQUFRLEVBQUUsTUFBTTtnQkFDaEIsS0FBSyxFQUFFLEdBQUc7YUFDYjtZQUNEO2dCQUNJLEtBQUssRUFBRSxrQ0FBa0M7Z0JBQ3pDLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixLQUFLLEVBQUUsR0FBRzthQUNiO1NBQ0osQ0FBQztJQUNOLENBQUM7SUF4TVEsV0FBVztRQUR2QixpQkFBVSxFQUFFO09BQ0EsV0FBVyxDQXlNdkI7SUFBRCxrQkFBQztDQUFBLEFBek1ELElBeU1DO0FBek1ZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4uL2RhdGEvaXRlbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gXCIuLi9kYXRhL2NhdGVnb3J5Lm1vZGVsXCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xyXG4gICAgZ2V0SXRlbXMoKTogQXJyYXk8SXRlbT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBsb2NhbFN0b3JhZ2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiKTtcclxuICAgICAgICB2YXIgYWxsSXRlbSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2l0ZW1zJykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFsbEl0ZW0pO1xyXG4gICAgICAgIC8vIGlmKGFsbEl0ZW0gPT0gbnVsbClcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIGFsbEl0ZW0gPSBbe1xyXG4gICAgICAgIC8vICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJuYW1lXCI6IFwiTWFuaWxhIFVsdGltYXRlIFRvbWJzdG9uZSBCdXJnZXJcIixcclxuICAgICAgICAvLyAgICAgICAgIFwiY292ZXJcIjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXI2NDAuanBnXCIsXHJcbiAgICAgICAgLy8gICAgICAgICBcImltYWdlc1wiOiBbXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyMS5qcGdcIixcclxuICAgICAgICAvLyAgICAgICAgICAgICBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlci9idXJnZXIyLmpwZ1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjMuanBnXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyNC5qcGdcIixcclxuICAgICAgICAvLyAgICAgICAgICAgICBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlci9idXJnZXI1LmpwZ1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjYuanBnXCJcclxuICAgICAgICAvLyAgICAgICAgIF0sXHJcbiAgICAgICAgLy8gICAgICAgICBcImNhdGVnb3J5XCI6IFwiQnVyZ2VyXCIsXHJcbiAgICAgICAgLy8gICAgICAgICBcImNhdGVnb3J5VGFnXCI6IFwiIzJEOUNEQlwiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJwcmljZVwiOiBcIjMwMC4wMFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJsaWtlc1wiOiA5ODcsXHJcbiAgICAgICAgLy8gICAgICAgICBcImlzTGlrZVwiOiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgICAgIFwiaXNGYXZvcml0ZVwiOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJjb21tZW50c1wiOiAxMyxcclxuICAgICAgICAvLyAgICAgICAgIFwicmF0aW5nXCI6IFwiNC41XCIsXHJcbiAgICAgICAgLy8gICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmF0aW9uZSBtYWlvcmVzLCB2ZXJpdGF0aXMgbmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpISBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgXFxuUmF0aW9uZSBtYWlvcmVzLCB2ZXJpdGF0aXMgbmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpISBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgXFxuTmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpIVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIFxcblJhdGlvbmUgbWFpb3JlcywgdmVyaXRhdGlzIG5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSEgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIFxcbk5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSFgLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJhbW91bnRcIjogMSxcclxuICAgICAgICAvLyAgICAgICAgIFwiaXNDYXJ0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAvLyAgICAgICAgIFwibmFtZVwiOiBcIlF1ZXpvbiBDaG9jb2xhdGUgTWFyYmxlIFBhbmNha2VcIixcclxuICAgICAgICAvLyAgICAgICAgIFwiY292ZXJcIjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlNjQwLmpwZ1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJpbWFnZXNcIjogW1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZS9wYW5jYWtlMS5qcGdcIixcclxuICAgICAgICAvLyAgICAgICAgICAgICBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2UvcGFuY2FrZTIuanBnXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2UzLmpwZ1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZS9wYW5jYWtlNC5qcGdcIixcclxuICAgICAgICAvLyAgICAgICAgICAgICBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2UvcGFuY2FrZTUuanBnXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2U2LmpwZ1wiXHJcbiAgICAgICAgLy8gICAgICAgICBdLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJjYXRlZ29yeVwiOiBcIlBhbmNha2VcIixcclxuICAgICAgICAvLyAgICAgICAgIFwiY2F0ZWdvcnlUYWdcIjogXCIjZTRjZTBkXCIsXHJcbiAgICAgICAgLy8gICAgICAgICBcInByaWNlXCI6IFwiMjMwLjAwXCIsXHJcbiAgICAgICAgLy8gICAgICAgICBcImxpa2VzXCI6IDg5MSxcclxuICAgICAgICAvLyAgICAgICAgIFwiaXNMaWtlXCI6IHRydWUsXHJcbiAgICAgICAgLy8gICAgICAgICBcImlzRmF2b3JpdGVcIjogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgICAgIFwiY29tbWVudHNcIjogNyxcclxuICAgICAgICAvLyAgICAgICAgIFwicmF0aW5nXCI6IFwiNC4wXCIsXHJcbiAgICAgICAgLy8gICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmF0aW9uZSBtYWlvcmVzLCB2ZXJpdGF0aXMgbmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpISBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgXFxuUmF0aW9uZSBtYWlvcmVzLCB2ZXJpdGF0aXMgbmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpISBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgXFxuTmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpIVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIFxcblJhdGlvbmUgbWFpb3JlcywgdmVyaXRhdGlzIG5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSEgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIFxcbk5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSFgLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJhbW91bnRcIjogMSxcclxuICAgICAgICAvLyAgICAgICAgIFwiaXNDYXJ0ZWRcIjogZmFsc2UsICAgIFxyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICBcImlkXCI6IDMsXHJcbiAgICAgICAgLy8gICAgICAgICBcIm5hbWVcIjogXCJCaW5vbmRvIEJsYWNrIEZvcmVzdCBDYWtlXCIsXHJcbiAgICAgICAgLy8gICAgICAgICBcImNvdmVyXCI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZTY0MC5qcGdcIixcclxuICAgICAgICAvLyAgICAgICAgIFwiaW1hZ2VzXCI6IFtcclxuICAgICAgICAvLyAgICAgICAgICAgICBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2UvY2FrZTEuanBnXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlL2Nha2UyLmpwZ1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZS9jYWtlMy5qcGdcIixcclxuICAgICAgICAvLyAgICAgICAgICAgICBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2UvY2FrZTQuanBnXCJcclxuICAgICAgICAvLyAgICAgICAgIF0sXHJcbiAgICAgICAgLy8gICAgICAgICBcImNhdGVnb3J5XCI6IFwiQ2FrZVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJjYXRlZ29yeVRhZ1wiOiBcIiMyN0FFNjBcIixcclxuICAgICAgICAvLyAgICAgICAgIFwicHJpY2VcIjogXCIzMDAuMDBcIixcclxuICAgICAgICAvLyAgICAgICAgIFwibGlrZXNcIjogNzMwLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJpc0xpa2VcIjogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgICAgIFwiaXNGYXZvcml0ZVwiOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJjb21tZW50c1wiOiAxMSxcclxuICAgICAgICAvLyAgICAgICAgIFwicmF0aW5nXCI6IFwiNC4wXCIsXHJcbiAgICAgICAgLy8gICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmF0aW9uZSBtYWlvcmVzLCB2ZXJpdGF0aXMgbmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpISBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgXFxuUmF0aW9uZSBtYWlvcmVzLCB2ZXJpdGF0aXMgbmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpISBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgXFxuTmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpIVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIFxcblJhdGlvbmUgbWFpb3JlcywgdmVyaXRhdGlzIG5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSEgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIFxcbk5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSFgLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgXCJpc0NhcnRlZFwiOiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgfV07XHJcbiAgICAgICAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWxsSXRlbVwiLEpTT04uc3RyaW5naWZ5KGFsbEl0ZW0pKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHJldHVybiBbe1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgbmFtZTogXCJNYW5pbGEgVWx0aW1hdGUgVG9tYnN0b25lIEJ1cmdlclwiLFxyXG4gICAgICAgICAgICBjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXI2NDAuanBnXCIsXHJcbiAgICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyMS5qcGdcIixcclxuICAgICAgICAgICAgICAgIFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjIuanBnXCIsXHJcbiAgICAgICAgICAgICAgICBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlci9idXJnZXIzLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyNC5qcGdcIixcclxuICAgICAgICAgICAgICAgIFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjUuanBnXCIsXHJcbiAgICAgICAgICAgICAgICBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlci9idXJnZXI2LmpwZ1wiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIkJ1cmdlclwiLFxyXG4gICAgICAgICAgICBjYXRlZ29yeVRhZzogXCIjMkQ5Q0RCXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjMwMC4wMFwiLFxyXG4gICAgICAgICAgICBsaWtlczogOTg3LFxyXG4gICAgICAgICAgICBpc0xpa2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc0Zhdm9yaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb21tZW50czogMTMsXHJcbiAgICAgICAgICAgIHJhdGluZzogXCI0LjVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmF0aW9uZSBtYWlvcmVzLCB2ZXJpdGF0aXMgbmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpISBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gXHJcblx0XHRcdFx0XFxuUmF0aW9uZSBtYWlvcmVzLCB2ZXJpdGF0aXMgbmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpISBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gXHJcblx0XHRcdFx0XFxuTmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpIVxyXG5cdFx0XHRcdFxcblJhdGlvbmUgbWFpb3JlcywgdmVyaXRhdGlzIG5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSEgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFxyXG4gICAgICAgICAgICAgICAgXFxuTmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpIWAsXHJcbiAgICAgICAgICAgIGFtb3VudDogMSxcclxuICAgICAgICAgICAgaXNDYXJ0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgbmFtZTogXCJRdWV6b24gQ2hvY29sYXRlIE1hcmJsZSBQYW5jYWtlXCIsXHJcbiAgICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCIsXHJcbiAgICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2UxLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2UyLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2UzLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2U0LmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2U1LmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2U2LmpwZ1wiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlBhbmNha2VcIixcclxuICAgICAgICAgICAgY2F0ZWdvcnlUYWc6IFwiI2U0Y2UwZFwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCIyMzAuMDBcIixcclxuICAgICAgICAgICAgbGlrZXM6IDg5MSxcclxuICAgICAgICAgICAgaXNMaWtlOiB0cnVlLFxyXG4gICAgICAgICAgICBpc0Zhdm9yaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb21tZW50czogNyxcclxuICAgICAgICAgICAgcmF0aW5nOiBcIjQuMFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSYXRpb25lIG1haW9yZXMsIHZlcml0YXRpcyBuZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBcclxuXHRcdFx0XHRcXG5SYXRpb25lIG1haW9yZXMsIHZlcml0YXRpcyBuZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBcclxuXHRcdFx0XHRcXG5OZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khXHJcblx0XHRcdFx0XFxuUmF0aW9uZSBtYWlvcmVzLCB2ZXJpdGF0aXMgbmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpISBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gXHJcbiAgICAgICAgICAgICAgICBcXG5OZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khYCxcclxuICAgICAgICAgICAgYW1vdW50OiAxLFxyXG4gICAgICAgICAgICBpc0NhcnRlZDogZmFsc2UsICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgbmFtZTogXCJCaW5vbmRvIEJsYWNrIEZvcmVzdCBDYWtlXCIsXHJcbiAgICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2U2NDAuanBnXCIsXHJcbiAgICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlL2Nha2UxLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlL2Nha2UyLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlL2Nha2UzLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlL2Nha2U0LmpwZ1wiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIkNha2VcIixcclxuICAgICAgICAgICAgY2F0ZWdvcnlUYWc6IFwiIzI3QUU2MFwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCIzMDAuMDBcIixcclxuICAgICAgICAgICAgbGlrZXM6IDczMCxcclxuICAgICAgICAgICAgaXNMaWtlOiB0cnVlLFxyXG4gICAgICAgICAgICBpc0Zhdm9yaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb21tZW50czogMTEsXHJcbiAgICAgICAgICAgIHJhdGluZzogXCI0LjBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmF0aW9uZSBtYWlvcmVzLCB2ZXJpdGF0aXMgbmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpISBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gXHJcblx0XHRcdFx0XFxuUmF0aW9uZSBtYWlvcmVzLCB2ZXJpdGF0aXMgbmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpISBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gXHJcblx0XHRcdFx0XFxuTmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpIVxyXG5cdFx0XHRcdFxcblJhdGlvbmUgbWFpb3JlcywgdmVyaXRhdGlzIG5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSEgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFxyXG4gICAgICAgICAgICAgICAgXFxuTmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpIWAsXHJcbiAgICAgICAgICAgIGFtb3VudDogMSxcclxuICAgICAgICAgICAgaXNDYXJ0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIH1dO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhdGVnb3JpZXMoKTogQXJyYXk8Q2F0ZWdvcnk+IHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXI2NDAuanBnXCIsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJCVVJHRVJcIixcclxuICAgICAgICAgICAgICAgIGNvdW50OiBcIjEzXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCIsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJQQU5DQUtFXCIsXHJcbiAgICAgICAgICAgICAgICBjb3VudDogXCI1XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2U2NDAuanBnXCIsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJDQUtFXCIsXHJcbiAgICAgICAgICAgICAgICBjb3VudDogXCI5XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2JlZXI2NDAuanBnXCIsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJCRUVSXCIsXHJcbiAgICAgICAgICAgICAgICBjb3VudDogXCI3XCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59Il19