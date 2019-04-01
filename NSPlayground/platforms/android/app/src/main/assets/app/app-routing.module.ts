import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home/home.component";
import { DetailComponent } from "./detail/detail.component";
import { CartComponent } from "./cart/cart.component";
import { LoginComponent } from "./login/login.component";
import { BackendService } from "./shared/backend.service";

const routes: Routes = [
 //   { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "", redirectTo: BackendService.isUserLoggedIn() ? "/login" : "/login", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "detail/:id", component: DetailComponent },
    { path: "cart", component: CartComponent },
    { path: "login", component: LoginComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
