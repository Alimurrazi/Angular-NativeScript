import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { Image } from "tns-core-modules/ui/image";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    item: Item;
    randomText: any;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);
        var faker = require('faker');
        this.randomText = faker.lorem.paragraphs();
        console.log(this.randomText);
    }
}
