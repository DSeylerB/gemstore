import { Component, OnInit } from '@angular/core';

import { gemModel } from "../gemmodel";

import { cartmodel } from "../cartModel";
import { cartitemmodel } from "../cartItemModel";

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Gem Store';
    now = Date.now().toString();
    hotdog = 'HOTDOOOOOOOOOOG';
  
    constructor(private httpClient: HttpClient){
        
    }
    
    ngOnInit(){
        //console.log(JSON.stringify(this.gems));
        this.httpClient.get<gemModel[]>('assets/gems.json').subscribe(results => {this.gems = results});
        
    }
    cart: cartmodel = {
        totalPrice: 0,
        totalQuantity: 0,
        items: []
    }
    
    gems : gemModel[];
}
