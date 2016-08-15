import {Component, OnInit} from "@angular/core";
import {RouteConfig, RouterLink, ROUTER_DIRECTIVES} from "@angular/router-deprecated";

import {HomeComponent} from "./home/home.component";
import {BacklogComponent} from "./backlog/backlog.component";
import {AboutComponent} from "./about/about.component";

@Component({
    selector: "app",
    templateUrl: "/static/app/app.component.html",
    styleUrls: ['static/app/app.component.css'],
    directives: [HomeComponent, AboutComponent, RouterLink, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '', component: HomeComponent, as: 'Home'},
    {path: '/home', component: HomeComponent, as: 'Home'},
    {path: '/backlog', component: BacklogComponent, as: 'Backlog'},
    {path: '/about', component: AboutComponent, as: 'About'}
])
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}