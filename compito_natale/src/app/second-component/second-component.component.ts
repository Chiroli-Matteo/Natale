import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
  visualizzaAuto: boolean = false;
  testoBottone = 'Mostra auto'
  auto = [
    { nome: 'ford gt', primaApparizione: 1964, cavalli: '558' },
    { nome: 'lancia delta integrale martini', primaApparizione: 1988, cavalli: '211' },
    { nome: 'ferrari roma', primaApparizione: 2023, cavalli: '620' },
    { nome: 'ferrari 430 scuderia', primaApparizione: 2004, cavalli: '490' },
    { nome: 'ford raptor', primaApparizione: 2010, cavalli: '700' },
    { nome: 'lambroghini huracan', primaApparizione: 2014, cavalli: '640' }
  ];

  toggleVisualizzaSupereroi() {
    this.visualizzaAuto = !this.visualizzaAuto;
    this.testoBottone = this.visualizzaAuto ? 'Nascondi auto' : 'Mostra auto';
  }
}