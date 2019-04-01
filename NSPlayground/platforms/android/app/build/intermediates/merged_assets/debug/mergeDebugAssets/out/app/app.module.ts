import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HomeComponent } from "./home/home.component";
import { DetailComponent } from "./detail/detail.component";
import { CartComponent } from "./cart/cart.component";

import { DataService } from "./data/data";
import { DropDownModule } from "nativescript-drop-down/angular";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        DropDownModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        DetailComponent,
        CartComponent
    ],
    providers: [
        DataService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
