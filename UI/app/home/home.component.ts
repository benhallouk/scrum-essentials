import {Component} from "@angular/core";
import {RouteConfig, RouterLink, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {OnInit} from "@angular/core";

@Component({
    selector: 'item-list',
    templateUrl: './app/home/home.component.html',
    styleUrls: ['./app/home/home.component.css'],
    directives: [RouterLink, ROUTER_DIRECTIVES]
})
export class HomeComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}