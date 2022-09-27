import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [

    // {
    //   icone: null,
    //   nome: 'Dados Pessoais',
    //   link: 'inicio/dados-pessoais'
    // },

    // {
    //   icone: null,
    //   nome: 'Notas',
    //   link: '/notas'
    // },

    // {
    //   icone: null,
    //   nome: 'Financeiro',
    //   link: 'paginas/inicio/financeiro'
    // },

    // {
    //   icone: null,
    //   nome: 'Sair',
    //   link: '/sair'
    // }
  ];
  
  constructor() { }

  ngOnInit() {
  }
}

interface Componente{
  icone: string;
  nome: string;
  link: string
}