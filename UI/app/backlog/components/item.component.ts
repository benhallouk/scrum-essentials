import {Component} from "@angular/core";
import {Input} from "@angular/core";
import {Output} from "@angular/core";
import {EventEmitter} from "@angular/core";

import {Item} from "../models/item";

@Component({
    selector: 'item',
    templateUrl: '/static/app/backlog/components/item.component.html'
})
export class ItemComponent {
    @Input() item:Item;
    @Output() statusChanged:any = new EventEmitter<any>();

    toggleDone() {
        //this.item.toggleDone();
        this.item.done = !this.item.done;
        this.statusChanged.emit(null);
    }
}
