import { Component, OnInit } from '@angular/core';

import { ListaWydatkowService } from '../lista-wydatkow.service';
import { Wydatek } from '../wydatek';
@Component({
  selector: 'app-dodaj-wydatek',
  templateUrl: './dodaj-wydatek.component.html',
  styleUrls: ['./dodaj-wydatek.component.css']
})
export class DodajWydatekComponent implements OnInit {

  nowyWydatek: Wydatek;
 
kategorie: string[];
  
constructor(private wydatkiService: ListaWydatkowService) { }

  ngOnInit() {
        this.nowyWydatek = new Wydatek('Tankowanie', null, null, null);
  this.kategorie = this.wydatkiService.getKategorie();
  }
onSubmit() {
    this.wydatkiService.dodajWydatek(this.nowyWydatek);
    this.nowyWydatek = new Wydatek('Tankowanie', null, null, null);
  }
}