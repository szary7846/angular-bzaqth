import { Injectable } from '@angular/core';
import { Wydatek, KATEGORIE } from './wydatek';

//dodaj osdwierzanie strony po usunieciu obiektu 
 



@Injectable()
export class ListaWydatkowService {
  private nextId:number;
  private wydatki: Wydatek[];

  constructor() {
    this.wydatki = [
     // JSON.parse(localStorage.getItem("pamiec"))
    ];
    let obj=JSON.parse(localStorage.getItem("pamiec"));
    this.nextId=0;
    if(obj[obj.length-1])
    this.nextId=obj[obj.length-1].id+1;
    
  

  }
  
getWydatki() {
return JSON.parse(localStorage.getItem("pamiec"));
  }
 getKategorie(): string[] {
    return KATEGORIE;
  }

  dodajWydatek(nowyWydatek: Wydatek): void {
    let obj=JSON.parse(localStorage.getItem("pamiec"));
    this.wydatki=obj;
    //console.log( obj[obj.length-1].id);
      nowyWydatek.id=this.nextId++;
    if(!obj[obj.length-1]){
    nowyWydatek.id=0;
    this.nextId=1;
    }
   
    this.wydatki.push(nowyWydatek);
    console.log( nowyWydatek.id);
    

    var myObj =  this.wydatki ;
   localStorage.setItem("pamiec", JSON.stringify(myObj));
    
    

  }
usunWydatek(id: number): void {
  this.wydatki=JSON.parse(localStorage.getItem("pamiec"));
  
    const ind = this.wydatki.findIndex(wydatek => wydatek.id === id);
    this.wydatki.splice(ind, 1);
       let myObj =  this.wydatki ;
   
   localStorage.setItem("pamiec", JSON.stringify(myObj));
   


  }
}