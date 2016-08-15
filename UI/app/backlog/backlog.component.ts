import {Component} from "@angular/core";
import {OnInit} from "@angular/core";

import {Item} from "./models/item";
import {BacklogService} from "./services/backlog-service";
import {ItemComponent} from "./components/item.component";

@Component({
    selector: 'item-list',
    templateUrl: '/static/app/backlog/backlog.component.html',
    styleUrls: ['static/app/backlog/backlog.component.css'],
    directives: [ItemComponent],
    providers: [BacklogService]
})
export class BacklogComponent implements OnInit {

    todoCount:number;
    selectedItem:Item;
    items:Array<Item>;

    constructor(private _backlogService:BacklogService) {}

    ngOnInit() {
        //this.newItem = new Item(0, "", "", "");
        this._backlogService.getItems().then(items => {
            console.log("Todo component initialized with " + items + " tasks.");
            this.items = items;
            this.calculateTodoCount();
        });
    }

    calculateTodoCount() {
        this.todoCount = this.items.filter(t => !t.done).length;
    }

    select(item:Item) {
        this.selectedItem = item;
    }
}