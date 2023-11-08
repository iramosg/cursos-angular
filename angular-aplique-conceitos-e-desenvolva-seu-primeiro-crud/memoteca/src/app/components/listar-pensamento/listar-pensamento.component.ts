import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Angular',
      modelo: 'modelo1',
    },
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo2',
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input',
      autoria: 'Componente filho',
      modelo: 'modelo3',
    },
    {
      conteudo:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      autoria: 'Componente filho',
      modelo: 'modelo2',
    },
    {
      conteudo: 'Teste de estilo',
      autoria: 'Igor',
      modelo: 'modelo1',
    },
    {
      conteudo: 'Teste de estilo',
      autoria: 'Igor',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Teste de estilo',
      autoria: 'Igor',
      modelo: 'modelo2',
    },
    {
      conteudo: 'Teste de estilo',
      autoria: 'Igor',
      modelo: 'modelo1',
    },
  ];
}
