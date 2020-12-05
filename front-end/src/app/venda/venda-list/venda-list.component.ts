import { Component, OnInit } from '@angular/core';
import { VendaService } from '../venda.service';
import {​​ MatSnackBar }​​ from '@angular/material/snack-bar';
@Component({
  selector: 'app-venda-list',
  templateUrl: './venda-list.component.html',
  styleUrls: ['./venda-list.component.scss']
})
export class VendaListComponent implements OnInit {

  vendas : any = []  // Vetor vazio
  
  displayedColumns : string[] = ['codigo', 'quantidade', 'produto', 'cliente', 'funcionario','editar', 'excluir']

  constructor(
      private vendaSrv : VendaService,
      private snackBar : MatSnackBar
    ) { }

  async ngOnInit() {
    this.vendas = await this.vendaSrv.listar()
    console.log(this.vendas)
  }

  async excluir(id: string){
      if(confirm("Deseja realmente excluir este item?")){
        try{
            // 1) Efetuar a exclusão
            await this.vendaSrv.excluir(id)
            // 2) Atualizar os dados da tabela
            this.ngOnInit()
            // 3) Dar um feedback de sucesso para o usuário
            this.snackBar.open('Item excluído com sucesso.', 'Entendi',{
                duration: 5000 // 5 segundos
            });
        }catch(erro){
            // 4) Dar um feedback de erro para o usuário
            this.snackBar.open('ERRO: não foi possível excluir este item.', 'Que pena!',{
                duration: 5000 // 5 segundos
            });
        }
      }
  }

}