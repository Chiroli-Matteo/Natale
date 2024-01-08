import { Component } from '@angular/core';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.css']
})
export class SecondoComponent {
  title = 'esercitazione_natale'
    lista_auto = [
      {id: 1, name: 'Lamborghini Huracan', cavalli: 'cavalli -', potenza:  640,euro: 'euro -' ,prezzo:198.972  },
      {id: 2, name: 'ferrari 250 GTO', cavalli: 'cavalli -' ,potenza: 300,euro: 'euro -' ,prezzo:57.700.000  },
      {id: 3, name: 'porsche 911 gt3s', cavalli: 'cavalli -',potenza:525,euro: 'euro -' ,prezzo:258.263},
      {id: 4, name: 'Bugatti EB110', cavalli: 'cavalli -'  , potenza:610,euro:'euro -' , prezzo: 2.200.000 },


    ];

}