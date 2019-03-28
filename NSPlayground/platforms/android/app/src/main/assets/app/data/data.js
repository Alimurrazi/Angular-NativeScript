"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.getItems = function () {
        var localStorage = require("nativescript-localstorage");
        var allItem = JSON.parse(localStorage.getItem('allItem'));
        if (allItem == null) {
            allItem = [{
                    "id": 1,
                    "name": "Manila Ultimate Tombstone Burger",
                    "cover": "~/assets/images/food/burger640.jpg",
                    "images": [
                        "~/assets/images/food/burger/burger1.jpg",
                        "~/assets/images/food/burger/burger2.jpg",
                        "~/assets/images/food/burger/burger3.jpg",
                        "~/assets/images/food/burger/burger4.jpg",
                        "~/assets/images/food/burger/burger5.jpg",
                        "~/assets/images/food/burger/burger6.jpg"
                    ],
                    "category": "Burger",
                    "categoryTag": "#2D9CDB",
                    "price": "300.00",
                    "likes": 987,
                    "isLike": false,
                    "isFavorite": true,
                    "comments": 13,
                    "rating": "4.5",
                    "toppingMsg": "No Toppings",
                    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n                    \nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n                    \nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!\n                    \nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n                    \nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!",
                    "amount": 1,
                    "isCarted": false,
                },
                {
                    "id": 2,
                    "name": "Quezon Chocolate Marble Pancake",
                    "cover": "~/assets/images/food/pancake640.jpg",
                    "images": [
                        "~/assets/images/food/pancake/pancake1.jpg",
                        "~/assets/images/food/pancake/pancake2.jpg",
                        "~/assets/images/food/pancake/pancake3.jpg",
                        "~/assets/images/food/pancake/pancake4.jpg",
                        "~/assets/images/food/pancake/pancake5.jpg",
                        "~/assets/images/food/pancake/pancake6.jpg"
                    ],
                    "category": "Pancake",
                    "categoryTag": "#e4ce0d",
                    "price": "230.00",
                    "likes": 891,
                    "isLike": true,
                    "isFavorite": true,
                    "comments": 7,
                    "rating": "4.0",
                    "toppingMsg": "No Toppings",
                    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n                    \nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n                    \nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!\n                    \nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n                    \nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!",
                    "amount": 1,
                    "isCarted": false,
                },
                {
                    "id": 3,
                    "name": "Binondo Black Forest Cake",
                    "cover": "~/assets/images/food/cake640.jpg",
                    "images": [
                        "~/assets/images/food/cake/cake1.jpg",
                        "~/assets/images/food/cake/cake2.jpg",
                        "~/assets/images/food/cake/cake3.jpg",
                        "~/assets/images/food/cake/cake4.jpg"
                    ],
                    "category": "Cake",
                    "categoryTag": "#27AE60",
                    "price": "300.00",
                    "likes": 730,
                    "isLike": true,
                    "isFavorite": true,
                    "comments": 11,
                    "rating": "4.0",
                    "toppingMsg": "No Toppings",
                    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n                    \nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n                    \nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!\n                    \nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n                    \nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!",
                    "amount": 1,
                    "isCarted": false,
                }];
            localStorage.setItem("allItem", JSON.stringify(allItem));
        }
        return allItem;
        // return [{
        //     id: 1,
        //     name: "Manila Ultimate Tombstone Burger",
        //     cover: "~/assets/images/food/burger640.jpg",
        //     images: [
        //         "~/assets/images/food/burger/burger1.jpg",
        //         "~/assets/images/food/burger/burger2.jpg",
        //         "~/assets/images/food/burger/burger3.jpg",
        //         "~/assets/images/food/burger/burger4.jpg",
        //         "~/assets/images/food/burger/burger5.jpg",
        //         "~/assets/images/food/burger/burger6.jpg"
        //     ],
        //     category: "Burger",
        //     categoryTag: "#2D9CDB",
        //     price: "300.00",
        //     likes: 987,
        //     isLike: false,
        //     isFavorite: true,
        //     comments: 13,
        //     rating: "4.5",
        //     description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        // 		\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        // 		\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!
        // 		\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        //         \nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!`,
        //     amount: 1,
        //     isCarted: true,
        // },
        // {
        //     id: 2,
        //     name: "Quezon Chocolate Marble Pancake",
        //     cover: "~/assets/images/food/pancake640.jpg",
        //     images: [
        //         "~/assets/images/food/pancake/pancake1.jpg",
        //         "~/assets/images/food/pancake/pancake2.jpg",
        //         "~/assets/images/food/pancake/pancake3.jpg",
        //         "~/assets/images/food/pancake/pancake4.jpg",
        //         "~/assets/images/food/pancake/pancake5.jpg",
        //         "~/assets/images/food/pancake/pancake6.jpg"
        //     ],
        //     category: "Pancake",
        //     categoryTag: "#e4ce0d",
        //     price: "230.00",
        //     likes: 891,
        //     isLike: true,
        //     isFavorite: true,
        //     comments: 7,
        //     rating: "4.0",
        //     description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        // 		\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        // 		\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!
        // 		\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        //         \nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!`,
        //     amount: 1,
        //     isCarted: false,    
        // },
        // {
        //     id: 3,
        //     name: "Binondo Black Forest Cake",
        //     cover: "~/assets/images/food/cake640.jpg",
        //     images: [
        //         "~/assets/images/food/cake/cake1.jpg",
        //         "~/assets/images/food/cake/cake2.jpg",
        //         "~/assets/images/food/cake/cake3.jpg",
        //         "~/assets/images/food/cake/cake4.jpg"
        //     ],
        //     category: "Cake",
        //     categoryTag: "#27AE60",
        //     price: "300.00",
        //     likes: 730,
        //     isLike: true,
        //     isFavorite: true,
        //     comments: 11,
        //     rating: "4.0",
        //     description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        // 		\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        // 		\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!
        // 		\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        //         \nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!`,
        //     amount: 1,
        //     isCarted: false,
        // }];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFPM0M7SUFBQTtJQTRNQSxDQUFDO0lBM01HLDhCQUFRLEdBQVI7UUFFSSxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN4RCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFHLE9BQU8sSUFBSSxJQUFJLEVBQ2xCO1lBQ0ksT0FBTyxHQUFHLENBQUM7b0JBQ1AsSUFBSSxFQUFFLENBQUM7b0JBQ1AsTUFBTSxFQUFFLGtDQUFrQztvQkFDMUMsT0FBTyxFQUFFLG9DQUFvQztvQkFDN0MsUUFBUSxFQUFFO3dCQUNOLHlDQUF5Qzt3QkFDekMseUNBQXlDO3dCQUN6Qyx5Q0FBeUM7d0JBQ3pDLHlDQUF5Qzt3QkFDekMseUNBQXlDO3dCQUN6Qyx5Q0FBeUM7cUJBQzVDO29CQUNELFVBQVUsRUFBRSxRQUFRO29CQUNwQixhQUFhLEVBQUUsU0FBUztvQkFDeEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLE9BQU8sRUFBRSxHQUFHO29CQUNaLFFBQVEsRUFBRSxLQUFLO29CQUNmLFlBQVksRUFBRSxJQUFJO29CQUNsQixVQUFVLEVBQUUsRUFBRTtvQkFDZCxRQUFRLEVBQUUsS0FBSztvQkFDZixZQUFZLEVBQUUsYUFBYTtvQkFDM0IsYUFBYSxFQUFFLG9tQ0FJc0k7b0JBQ3JKLFFBQVEsRUFBRSxDQUFDO29CQUNYLFVBQVUsRUFBRSxLQUFLO2lCQUNwQjtnQkFDRDtvQkFDSSxJQUFJLEVBQUUsQ0FBQztvQkFDUCxNQUFNLEVBQUUsaUNBQWlDO29CQUN6QyxPQUFPLEVBQUUscUNBQXFDO29CQUM5QyxRQUFRLEVBQUU7d0JBQ04sMkNBQTJDO3dCQUMzQywyQ0FBMkM7d0JBQzNDLDJDQUEyQzt3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TztRQUMzTyxxSkFBcUo7UUFDckosMk9BQTJPO1FBQ3JPLDZKQUE2SjtRQUM3SixpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLE1BQU07SUFDVixDQUFDO0lBRUQsbUNBQWEsR0FBYjtRQUNJLE9BQU87WUFDSDtnQkFDSSxLQUFLLEVBQUUsb0NBQW9DO2dCQUMzQyxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsS0FBSyxFQUFFLElBQUk7YUFDZDtZQUNEO2dCQUNJLEtBQUssRUFBRSxxQ0FBcUM7Z0JBQzVDLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixLQUFLLEVBQUUsR0FBRzthQUNiO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLGtDQUFrQztnQkFDekMsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLEtBQUssRUFBRSxHQUFHO2FBQ2I7WUFDRDtnQkFDSSxLQUFLLEVBQUUsa0NBQWtDO2dCQUN6QyxRQUFRLEVBQUUsTUFBTTtnQkFDaEIsS0FBSyxFQUFFLEdBQUc7YUFDYjtTQUNKLENBQUM7SUFDTixDQUFDO0lBM01RLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTtPQUNBLFdBQVcsQ0E0TXZCO0lBQUQsa0JBQUM7Q0FBQSxBQTVNRCxJQTRNQztBQTVNWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuLi9kYXRhL2l0ZW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vZGF0YS9jYXRlZ29yeS5tb2RlbFwiO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcclxuICAgIGdldEl0ZW1zKCk6IEFycmF5PEl0ZW0+IHtcclxuXHJcbiAgICAgICAgbGV0IGxvY2FsU3RvcmFnZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIpO1xyXG4gICAgICAgIHZhciBhbGxJdGVtID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsSXRlbScpKTtcclxuICAgICAgICBpZihhbGxJdGVtID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhbGxJdGVtID0gW3tcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1hbmlsYSBVbHRpbWF0ZSBUb21ic3RvbmUgQnVyZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvdmVyXCI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyNjQwLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJpbWFnZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjEuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyMi5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlci9idXJnZXIzLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyNS5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlci9idXJnZXI2LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBcIkJ1cmdlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJjYXRlZ29yeVRhZ1wiOiBcIiMyRDlDREJcIixcclxuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogXCIzMDAuMDBcIixcclxuICAgICAgICAgICAgICAgIFwibGlrZXNcIjogOTg3LFxyXG4gICAgICAgICAgICAgICAgXCJpc0xpa2VcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImlzRmF2b3JpdGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwiY29tbWVudHNcIjogMTMsXHJcbiAgICAgICAgICAgICAgICBcInJhdGluZ1wiOiBcIjQuNVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0b3BwaW5nTXNnXCI6IFwiTm8gVG9wcGluZ3NcIixcclxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogYExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSYXRpb25lIG1haW9yZXMsIHZlcml0YXRpcyBuZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBcclxuICAgICAgICAgICAgICAgICAgICBcXG5SYXRpb25lIG1haW9yZXMsIHZlcml0YXRpcyBuZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBcclxuICAgICAgICAgICAgICAgICAgICBcXG5OZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khXHJcbiAgICAgICAgICAgICAgICAgICAgXFxuUmF0aW9uZSBtYWlvcmVzLCB2ZXJpdGF0aXMgbmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpISBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gXHJcbiAgICAgICAgICAgICAgICAgICAgXFxuTmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpIWAsXHJcbiAgICAgICAgICAgICAgICBcImFtb3VudFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgXCJpc0NhcnRlZFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUXVlem9uIENob2NvbGF0ZSBNYXJibGUgUGFuY2FrZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb3ZlclwiOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCIsXHJcbiAgICAgICAgICAgICAgICBcImltYWdlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2UxLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZS9wYW5jYWtlMi5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2UvcGFuY2FrZTMuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2U0LmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZS9wYW5jYWtlNS5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2UvcGFuY2FrZTYuanBnXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiUGFuY2FrZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjYXRlZ29yeVRhZ1wiOiBcIiNlNGNlMGRcIixcclxuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogXCIyMzAuMDBcIixcclxuICAgICAgICAgICAgICAgIFwibGlrZXNcIjogODkxLFxyXG4gICAgICAgICAgICAgICAgXCJpc0xpa2VcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwiaXNGYXZvcml0ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJjb21tZW50c1wiOiA3LFxyXG4gICAgICAgICAgICAgICAgXCJyYXRpbmdcIjogXCI0LjBcIixcclxuICAgICAgICAgICAgICAgIFwidG9wcGluZ01zZ1wiOiBcIk5vIFRvcHBpbmdzXCIsXHJcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmF0aW9uZSBtYWlvcmVzLCB2ZXJpdGF0aXMgbmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpISBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gXHJcbiAgICAgICAgICAgICAgICAgICAgXFxuUmF0aW9uZSBtYWlvcmVzLCB2ZXJpdGF0aXMgbmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpISBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gXHJcbiAgICAgICAgICAgICAgICAgICAgXFxuTmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpIVxyXG4gICAgICAgICAgICAgICAgICAgIFxcblJhdGlvbmUgbWFpb3JlcywgdmVyaXRhdGlzIG5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSEgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFxyXG4gICAgICAgICAgICAgICAgICAgIFxcbk5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSFgLFxyXG4gICAgICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcclxuICAgICAgICAgICAgICAgIFwiaXNDYXJ0ZWRcIjogZmFsc2UsICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IDMsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCaW5vbmRvIEJsYWNrIEZvcmVzdCBDYWtlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvdmVyXCI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZTY0MC5qcGdcIixcclxuICAgICAgICAgICAgICAgIFwiaW1hZ2VzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2UvY2FrZTEuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlL2Nha2UyLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZS9jYWtlMy5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2UvY2FrZTQuanBnXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiQ2FrZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjYXRlZ29yeVRhZ1wiOiBcIiMyN0FFNjBcIixcclxuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogXCIzMDAuMDBcIixcclxuICAgICAgICAgICAgICAgIFwibGlrZXNcIjogNzMwLFxyXG4gICAgICAgICAgICAgICAgXCJpc0xpa2VcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwiaXNGYXZvcml0ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJjb21tZW50c1wiOiAxMSxcclxuICAgICAgICAgICAgICAgIFwicmF0aW5nXCI6IFwiNC4wXCIsXHJcbiAgICAgICAgICAgICAgICBcInRvcHBpbmdNc2dcIjogXCJObyBUb3BwaW5nc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJhdGlvbmUgbWFpb3JlcywgdmVyaXRhdGlzIG5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSEgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFxyXG4gICAgICAgICAgICAgICAgICAgIFxcblJhdGlvbmUgbWFpb3JlcywgdmVyaXRhdGlzIG5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSEgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFxyXG4gICAgICAgICAgICAgICAgICAgIFxcbk5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSFcclxuICAgICAgICAgICAgICAgICAgICBcXG5SYXRpb25lIG1haW9yZXMsIHZlcml0YXRpcyBuZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBcclxuICAgICAgICAgICAgICAgICAgICBcXG5OZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khYCxcclxuICAgICAgICAgICAgICAgICAgICBcImFtb3VudFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaXNDYXJ0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbEl0ZW1cIixKU09OLnN0cmluZ2lmeShhbGxJdGVtKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxJdGVtO1xyXG5cclxuICAgICAgICAvLyByZXR1cm4gW3tcclxuICAgICAgICAvLyAgICAgaWQ6IDEsXHJcbiAgICAgICAgLy8gICAgIG5hbWU6IFwiTWFuaWxhIFVsdGltYXRlIFRvbWJzdG9uZSBCdXJnZXJcIixcclxuICAgICAgICAvLyAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyNjQwLmpwZ1wiLFxyXG4gICAgICAgIC8vICAgICBpbWFnZXM6IFtcclxuICAgICAgICAvLyAgICAgICAgIFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjEuanBnXCIsXHJcbiAgICAgICAgLy8gICAgICAgICBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlci9idXJnZXIyLmpwZ1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyMy5qcGdcIixcclxuICAgICAgICAvLyAgICAgICAgIFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjQuanBnXCIsXHJcbiAgICAgICAgLy8gICAgICAgICBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlci9idXJnZXI1LmpwZ1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyNi5qcGdcIlxyXG4gICAgICAgIC8vICAgICBdLFxyXG4gICAgICAgIC8vICAgICBjYXRlZ29yeTogXCJCdXJnZXJcIixcclxuICAgICAgICAvLyAgICAgY2F0ZWdvcnlUYWc6IFwiIzJEOUNEQlwiLFxyXG4gICAgICAgIC8vICAgICBwcmljZTogXCIzMDAuMDBcIixcclxuICAgICAgICAvLyAgICAgbGlrZXM6IDk4NyxcclxuICAgICAgICAvLyAgICAgaXNMaWtlOiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgaXNGYXZvcml0ZTogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgY29tbWVudHM6IDEzLFxyXG4gICAgICAgIC8vICAgICByYXRpbmc6IFwiNC41XCIsXHJcbiAgICAgICAgLy8gICAgIGRlc2NyaXB0aW9uOiBgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJhdGlvbmUgbWFpb3JlcywgdmVyaXRhdGlzIG5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSEgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFxyXG5cdFx0Ly8gXHRcdFxcblJhdGlvbmUgbWFpb3JlcywgdmVyaXRhdGlzIG5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSEgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFxyXG5cdFx0Ly8gXHRcdFxcbk5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSFcclxuXHRcdC8vIFx0XHRcXG5SYXRpb25lIG1haW9yZXMsIHZlcml0YXRpcyBuZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBcclxuICAgICAgICAvLyAgICAgICAgIFxcbk5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSFgLFxyXG4gICAgICAgIC8vICAgICBhbW91bnQ6IDEsXHJcbiAgICAgICAgLy8gICAgIGlzQ2FydGVkOiB0cnVlLFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBpZDogMixcclxuICAgICAgICAvLyAgICAgbmFtZTogXCJRdWV6b24gQ2hvY29sYXRlIE1hcmJsZSBQYW5jYWtlXCIsXHJcbiAgICAgICAgLy8gICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCIsXHJcbiAgICAgICAgLy8gICAgIGltYWdlczogW1xyXG4gICAgICAgIC8vICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2UxLmpwZ1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2UyLmpwZ1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2UzLmpwZ1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2U0LmpwZ1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2U1LmpwZ1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2U2LmpwZ1wiXHJcbiAgICAgICAgLy8gICAgIF0sXHJcbiAgICAgICAgLy8gICAgIGNhdGVnb3J5OiBcIlBhbmNha2VcIixcclxuICAgICAgICAvLyAgICAgY2F0ZWdvcnlUYWc6IFwiI2U0Y2UwZFwiLFxyXG4gICAgICAgIC8vICAgICBwcmljZTogXCIyMzAuMDBcIixcclxuICAgICAgICAvLyAgICAgbGlrZXM6IDg5MSxcclxuICAgICAgICAvLyAgICAgaXNMaWtlOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICBpc0Zhdm9yaXRlOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICBjb21tZW50czogNyxcclxuICAgICAgICAvLyAgICAgcmF0aW5nOiBcIjQuMFwiLFxyXG4gICAgICAgIC8vICAgICBkZXNjcmlwdGlvbjogYExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSYXRpb25lIG1haW9yZXMsIHZlcml0YXRpcyBuZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBcclxuXHRcdC8vIFx0XHRcXG5SYXRpb25lIG1haW9yZXMsIHZlcml0YXRpcyBuZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBcclxuXHRcdC8vIFx0XHRcXG5OZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khXHJcblx0XHQvLyBcdFx0XFxuUmF0aW9uZSBtYWlvcmVzLCB2ZXJpdGF0aXMgbmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpISBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gXHJcbiAgICAgICAgLy8gICAgICAgICBcXG5OZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khYCxcclxuICAgICAgICAvLyAgICAgYW1vdW50OiAxLFxyXG4gICAgICAgIC8vICAgICBpc0NhcnRlZDogZmFsc2UsICAgIFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBpZDogMyxcclxuICAgICAgICAvLyAgICAgbmFtZTogXCJCaW5vbmRvIEJsYWNrIEZvcmVzdCBDYWtlXCIsXHJcbiAgICAgICAgLy8gICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2U2NDAuanBnXCIsXHJcbiAgICAgICAgLy8gICAgIGltYWdlczogW1xyXG4gICAgICAgIC8vICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlL2Nha2UxLmpwZ1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlL2Nha2UyLmpwZ1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlL2Nha2UzLmpwZ1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlL2Nha2U0LmpwZ1wiXHJcbiAgICAgICAgLy8gICAgIF0sXHJcbiAgICAgICAgLy8gICAgIGNhdGVnb3J5OiBcIkNha2VcIixcclxuICAgICAgICAvLyAgICAgY2F0ZWdvcnlUYWc6IFwiIzI3QUU2MFwiLFxyXG4gICAgICAgIC8vICAgICBwcmljZTogXCIzMDAuMDBcIixcclxuICAgICAgICAvLyAgICAgbGlrZXM6IDczMCxcclxuICAgICAgICAvLyAgICAgaXNMaWtlOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICBpc0Zhdm9yaXRlOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICBjb21tZW50czogMTEsXHJcbiAgICAgICAgLy8gICAgIHJhdGluZzogXCI0LjBcIixcclxuICAgICAgICAvLyAgICAgZGVzY3JpcHRpb246IGBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmF0aW9uZSBtYWlvcmVzLCB2ZXJpdGF0aXMgbmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpISBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gXHJcblx0XHQvLyBcdFx0XFxuUmF0aW9uZSBtYWlvcmVzLCB2ZXJpdGF0aXMgbmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpISBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gXHJcblx0XHQvLyBcdFx0XFxuTmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpIVxyXG5cdFx0Ly8gXHRcdFxcblJhdGlvbmUgbWFpb3JlcywgdmVyaXRhdGlzIG5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSEgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFxyXG4gICAgICAgIC8vICAgICAgICAgXFxuTmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpIWAsXHJcbiAgICAgICAgLy8gICAgIGFtb3VudDogMSxcclxuICAgICAgICAvLyAgICAgaXNDYXJ0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIC8vIH1dO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhdGVnb3JpZXMoKTogQXJyYXk8Q2F0ZWdvcnk+IHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXI2NDAuanBnXCIsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJCVVJHRVJcIixcclxuICAgICAgICAgICAgICAgIGNvdW50OiBcIjEzXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCIsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJQQU5DQUtFXCIsXHJcbiAgICAgICAgICAgICAgICBjb3VudDogXCI1XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2U2NDAuanBnXCIsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJDQUtFXCIsXHJcbiAgICAgICAgICAgICAgICBjb3VudDogXCI5XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2JlZXI2NDAuanBnXCIsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJCRUVSXCIsXHJcbiAgICAgICAgICAgICAgICBjb3VudDogXCI3XCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59Il19