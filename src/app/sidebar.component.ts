import { Component } from "@angular/core";

@Component({
    templateUrl:'./sidebar.component.html',
    selector: 'sidebar',
})
export class SideBarComponent{
    title: String = "Azukas Workshop";
    subtitle: String = "Let's try to learn angular, hopefully :)"
}

// Directives, input, onclick