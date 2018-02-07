import { Component, OnInit } from '@angular/core';

import { cartmodel } from '../../cartModel';
import { cartitemmodel } from '../../cartItemModel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    links = [{
		text: 'Home',
		href: '/Home'
	}, {
		text: 'Account',
		href: '/Account'
	}, {
		text: 'Cart',
		href: '/Cart'
	}];
}
