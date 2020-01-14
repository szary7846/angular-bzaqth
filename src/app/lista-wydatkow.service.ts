import { Injectable } from '@angular/core';
import { Wydatek, KATEGORIE } from './wydatek';

//dodaj osdwierzanie strony po usunieciu obiektu 
//ogarnij id i usuwanie wszystkich obiektow zamiast 1 konkretnego 
// po odseierzeniu stronu, nadpsiuje mi całkowicie dane w locala storage, zamiast dodac wartosc kolejna

@Injectable()
export class ListaWydatkowService {
  private nextId:number;
  private wydatki: Wydatek[];

  constructor() {
    this.wydatki = [
     // JSON.parse(localStorage.getItem("pamiec"))
    ];
    var obj=JSON.parse(localStorage.getItem("pamiec"));
    this.nextId=obj.length+1; //tu wez dostep do obiektu i wyciagnij ostatni id 
  console.log(obj.length+1);
  }
  
getWydatki() {
 //  return this.wydatki;
 return this.wydatki.push(JSON.parse(localStorage.getItem("pamiec")));   
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
     // console.log(this.wydatki.splice(ind, 1));
   localStorage.setItem("pamiec", JSON.stringify(myObj));
   console.log(Wydatek.id);

  }
}