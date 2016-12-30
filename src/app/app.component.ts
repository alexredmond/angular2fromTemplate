import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { Config } from './resources/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  
  constructor( private _config: Config) {


  }

  ngOnInit() {
    this._config.load();
  

  }
}

