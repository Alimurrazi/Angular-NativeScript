import { Injectable } from "@angular/core";
import { Kinvey } from "kinvey-nativescript-sdk";

Kinvey.init({
    appKey: "kid_ryZr4cJtN",
    appSecret: "880c38db9d6a45e088e92ae823006420"
});

export class BackendService {
    static isUserLoggedIn() {
        console.log("who is in..."+!!Kinvey.User.getActiveUser());
        return !!Kinvey.User.getActiveUser();
    }
}