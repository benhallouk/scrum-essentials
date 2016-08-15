import {Component} from "@angular/core";
import {OnInit} from "@angular/core";

import {Item} from "./models/item";
import {ItemService} from "./services/item-service";
import {ItemComponent} from "./components/item.component";

@Component({
    selector: 'item-list',
    templateUrl: '/static/app/backlog/backlog.component.html',
    styleUrls: ['static/app/backlog/backlog.component.css'],
    directives: [ItemComponent],
    providers: [ItemService]
})
export class BacklogComponent implements OnInit {

    todoCount:number;
    selectedItem:Item;
    items:Array<Item>;

    constructor(private _itemService:ItemService) {
        this.items = _itemService.getItems();
        this.calculateTodoCount();
    }

    ngOnInit() {
        console.log("Todo component initialized with " + this.items.length + " tasks.");
    }

    calculateTodoCount() {
        this.todoCount = this.items.filter(t => !t.done).length;
    }

    select(item:Item) {
        this.selectedItem = item;
    }
}