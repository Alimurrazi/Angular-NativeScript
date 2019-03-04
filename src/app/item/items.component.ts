import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { TextField } from "tns-core-modules/ui/text-field";
@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;
    
    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    public firstTx: string = "";

    public onTextChange(args) {
        let textField = <TextField>args.object;

        console.log("onTextChange");
        this.firstTx = textField.text;
    }

    public onReturn(args) {
        let textField = <TextField>args.object;

        console.log("onReturn");
        this.firstTx = textField.text;
    }

    public showAlert(result) {
        alert("Text: " + result);
    }

    public submit(result) {
        alert("Text: " + result);
    }

    public addNew()
    {
        console.log("addnew");
        alert("add new");
    }

}
