import { Component } from '@angular/core';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.css']
})
export class SecondoComponent {
  title = 'esercitazione_natale'
    lista_auto = [
      {id: 1, name: 'Lamborghini Aventador', cavalli: 'cavalli -', potenza:  770,euro: 'euro -' ,prezzo: 430.730  },
      {id: 2, name: 'ferrari Roma', cavalli: 'cavalli -' ,potenza: 620,euro: 'euro -' ,prezzo:217.001  },
      {id: 3, name: 'porsche 911 gt s', cavalli: 'cavalli -',potenza:460,euro: 'euro -' ,prezzo:  161.733},
      {id: 4, name: 'Bugatti', cavalli: 'cavalli -'  , potenza:1500,euro:'euro -' , prezzo: 9792500 },


    ];

}