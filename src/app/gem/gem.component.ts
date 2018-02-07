import { Component, OnInit, Input } from '@angular/core';

import { gemModel } from "../../gemmodel";
import { cartmodel } from "../../cartModel";
import { cartitemmodel } from "../../cartItemModel";
@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent implements OnInit {

    @Input() gem : gemModel;
    @Input() cart : cartmodel;
    
    addToCart(){
        this.gem.inventory = this.gem.inventory - 1;
        this.cart.totalQuantity = this.cart.totalQuantity + 1;
        this.cart.totalPrice = this.cart.totalPrice + this.gem.price;
    }
    
  constructor() { }

  ngOnInit() {
  }

}
