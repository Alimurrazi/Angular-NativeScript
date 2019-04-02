"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
kinvey_nativescript_sdk_1.Kinvey.init({
    appKey: "kid_ryZr4cJtN",
    appSecret: "880c38db9d6a45e088e92ae823006420"
});
var BackendService = /** @class */ (function () {
    function BackendService() {
    }
    BackendService.isUserLoggedIn = function () {
        console.log("who is in..." + !!kinvey_nativescript_sdk_1.Kinvey.User.getActiveUser());
        return !!kinvey_nativescript_sdk_1.Kinvey.User.getActiveUser();
    };
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsbUVBQWlEO0FBRWpELGdDQUFNLENBQUMsSUFBSSxDQUFDO0lBQ1IsTUFBTSxFQUFFLGVBQWU7SUFDdkIsU0FBUyxFQUFFLGtDQUFrQztDQUNoRCxDQUFDLENBQUM7QUFFSDtJQUFBO0lBS0EsQ0FBQztJQUpVLDZCQUFjLEdBQXJCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUMsQ0FBQyxDQUFDLGdDQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDMUQsT0FBTyxDQUFDLENBQUMsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFMWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBLaW52ZXkgfSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcclxuXHJcbktpbnZleS5pbml0KHtcclxuICAgIGFwcEtleTogXCJraWRfcnlacjRjSnROXCIsXHJcbiAgICBhcHBTZWNyZXQ6IFwiODgwYzM4ZGI5ZDZhNDVlMDg4ZTkyYWU4MjMwMDY0MjBcIlxyXG59KTtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XHJcbiAgICBzdGF0aWMgaXNVc2VyTG9nZ2VkSW4oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ3aG8gaXMgaW4uLi5cIishIUtpbnZleS5Vc2VyLmdldEFjdGl2ZVVzZXIoKSk7XHJcbiAgICAgICAgcmV0dXJuICEhS2ludmV5LlVzZXIuZ2V0QWN0aXZlVXNlcigpO1xyXG4gICAgfVxyXG59Il19