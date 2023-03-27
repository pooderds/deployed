import { Component, OnInit } from '@angular/core';

import { Ingridient } from '../shared/ingridient.model';
@Component({
  selector: 'app-shoppig-list',
  templateUrl: './shoppig-list.component.html',
  styleUrls: ['./shoppig-list.component.css']
})
export class ShoppigListComponent implements OnInit {
ingridients: Ingridient[] = [
  new Ingridient('Apples', 5),
  new Ingridient('Tomatoes', 10),
];

constructor () {}

ngOnInit(): void {
  
}
}
