import { Component } from '@angular/core';

import { gemModel } from "../gemmodel";

import { cartmodel } from "../cartModel";
import { cartitemmodel } from "../cartItemModel";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Gem Store';
    now = Date.now().toString();
    hotdog = 'HOTDOOOOOOOOOOG';
  
    cart: cartmodel = {
        totalPrice: 0,
        totalQuantity: 0,
        items: []
    }
    
    gems : gemModel[] = [{
        id: 1,
        name: 'Dodecahedron',
        price: 2.95,
        description: 'Orange and pointy',
        fullImagePath: './assets/gem-09.gif',
        inventory: 0,
        colors: ["red", "blue", "green"]
    },
                        {
        id: 2,
        name: 'Octagonal',
        price: 5.95,
        description: 'Orange and round',
        fullImagePath: './assets/gem-06.gif',
        inventory: 5,
        colors: ["orange", "yellow"]
    },
                        {
        id: 3,
        name: 'Hexagonal',
        price: 6.95,
        description: 'Orange and hexagonal',
        fullImagePath: './assets/gem-04.gif',
        inventory: 10,
        colors: ["purple"]
    }]
}
