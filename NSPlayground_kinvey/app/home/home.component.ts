import { Component, OnInit } from "@angular/core";
import { BackendService } from "../services/backend.service";
import { RouterExtensions } from "nativescript-angular/router";
import { UtilityService } from "../services/utility.service";

@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {

    isLoading = false;

    constructor(private backendService: BackendService, private routerExtension: RouterExtensions,
        private utilityService: UtilityService) { }

    ngOnInit(): void {
    }

    logout() {
        this.isLoading = true;
        this.backendService.logout()
            .then(() => {
                this.routerExtension.navigate(['/login']);
                this.isLoading = false;
            });
    }

    isTablet() {
        return this.utilityService.isTablet();
    }
}