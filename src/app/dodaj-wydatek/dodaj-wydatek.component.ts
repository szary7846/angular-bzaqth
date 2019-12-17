import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
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
  
constructor(private wydatkiService: ListaWydatkowService, private router: Router) { }

  ngOnInit() {
        this.nowyWydatek = new Wydatek('Tankowanie', null, null, null);
  this.kategorie = this.wydatkiService.getKategorie();
  }
onSubmit() {
    this.wydatkiService.dodajWydatek(this.nowyWydatek);
    this.nowyWydatek = new Wydatek('Tankowanie', null, null, null);
    
    this.router.navigate(['/wydatki']);
  }
}