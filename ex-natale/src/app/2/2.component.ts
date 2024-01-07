import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './2.component.html',
  styleUrls: ['./2.component.css']
})
export class SecondComponentComponent {
  visualizzaAutomobili: boolean = false;
  testoBottone = 'Mostra auto'
  supereroi = [
    { nome: 'ford gt', primaUscita: 1964, Cavalli: '558' },
    { nome: 'nissan skyline gtr r34', primaUscita: 2000, Cavalli: '280' },
    { nome: 'ferrari 430 scuderia', primaUscita: 2004, Cavalli: '510' },
    { nome: 'ferrari 250 gto', primaUscita: 1962, Cavalli: '300' },
    { nome: 'dodge charger', primaUscita: 1966, Cavalli: '309' },
    { nome: 'ford raptor', primaUscita: 2010, Cavalli: '205' }
  ];

  toggleVisualizzaSupereroi() {
    this.visualizzaAutomobili = !this.visualizzaAutomobili;
    this.testoBottone = this.visualizzaAutomobili ? 'Nascondi auto' : 'Mostra auto';
  }
}