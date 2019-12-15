import { Wydatek, KATEGORIE } from '../wydatek';
import { ListaWydatkowService } from '../lista-wydatkow.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-wydatkow',
  templateUrl: './lista-wydatkow.component.html',
  styleUrls: ['./lista-wydatkow.component.css']
})
/*
export class ListaWydatkowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/
export class ListaWydatkowComponent  {
  name = 'Angular';
   wydatki: Wydatek[];

constructor(private ListaWydatkowService: ListaWydatkowService) {

 }
   ngOnInit() {
    this.wydatki = this.ListaWydatkowService.getWydatki();
  }
}
