import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/shared/types/card.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public mockupApiCards: Array<ICard> = [
    {
      title: 'Economia',
      text: 'Economia é o conjunto de atividades desenvolvidas pelos homens visando a produção,' +
        'distribuição e o consumo de bens e serviços necessários à sobrevivência e à qualidade de vida.',
      buttonText: 'Leia Mais',
      imgSrc:''
    },
    {
      title: 'Banco',
      text: 'Banco (do germânico banki, através do latim vulgar) é uma instituição financeira' +
        'intermediária entre agentes superavitários e agentes deficitários.',
      buttonText: 'Leia Mais',
      imgSrc: ''
    },
    {
      title: 'Dinheiro',
      text: 'O dinheiro é na sua aparência mais imediata o meio usado na troca de bens, ' +
        'podendo fazê-lo na forma de moedas (pedaços de metal amoedados e cunhados, isto é, marcados por desenhos, letras e números), ',
      buttonText: 'Leia Mais',
      imgSrc: ''
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
