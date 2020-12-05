import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import {​​ MatSnackBar }​​ from '@angular/material/snack-bar';
@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent implements OnInit {

  produtos : any = []  // Vetor vazio
  
  displayedColumns : string[] = ['nome', 'estoque', 'validade', 'fornecedor', 'editar', 'excluir']

  constructor(
      private produtoSrv : ProdutoService,
      private snackBar : MatSnackBar
    ) { }

  async ngOnInit() {
    this.produtos = await this.produtoSrv.listar()
    console.log(this.produtos)
  }

  async excluir(id: string){
      if(confirm("Deseja realmente excluir este item?")){
        try{
            // 1) Efetuar a exclusão
            await this.produtoSrv.excluir(id)
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