import { Injectable } from '@angular/core';
import { Wydatek, KATEGORIE } from './wydatek';

@Injectable()
export class ListaWydatkowService {
  private nextId:number;
  private wydatki: Wydatek[];

  constructor() {
    this.wydatki = [
      JSON.parse(localStorage.getItem("pamiec"))
    ];
    this.nextId=1;
  
  }
  
getWydatki() {
   return this.wydatki;
 //return JSON.parse(localStorage.getItem("pamiec"));   //odczyt sie wali
  // return localStorage.getItem("pamiec");
  }
 getKategorie(): string[] {
    return KATEGORIE;
  }

  dodajWydatek(nowyWydatek: Wydatek): void {
    this.wydatki.push(nowyWydatek);
    nowyWydatek.id=this.nextId++;

    var myObj =  this.wydatki ;
    localStorage.setItem("pamiec", JSON.stringify(myObj));
    
    

  }
usunWydatek(id: number): void {
    const ind = this.wydatki.findIndex(wydatek => wydatek.id === id);
    this.wydatki.splice(ind, 1);
       let myObj =  this.wydatki ;
      //  console.log(this.wydatki.splice(ind, 1));
   localStorage.setItem("pamiec", JSON.stringify(myObj));
   

  }
}