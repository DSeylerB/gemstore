import { Component, OnInit, Input } from '@angular/core';

import { gemModel } from "../../gemmodel";
@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent implements OnInit {

   @Input() gem : gemModel;
    
  constructor() { }

  ngOnInit() {
  }

}
