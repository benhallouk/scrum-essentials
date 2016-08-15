import {Injectable} from "@angular/core";
import {Item} from "../models/item";

@Injectable()
export class ItemService {

    private items:Array<Item> = [
        new Item(1, "Item 1", "", false),
        new Item(2, "Item 2", "", false),
        new Item(3, "Item 3", "", false),
        new Item(4, "Item 4", "", false),
        new Item(5, "Item 5", "", false)
    ];

    getItems():Array<Item> {
        return this.items;
    }

    addItem(name:string) {
        this.items.push(new Item(0, name, "", false));
    }

}