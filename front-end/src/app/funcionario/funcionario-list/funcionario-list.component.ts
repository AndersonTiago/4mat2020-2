import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import {​​ MatSnackBar }​​ from '@angular/material/snack-bar';
@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.scss']
})
export class FuncionarioListComponent implements OnInit {

  funcionarios : any = []  // Vetor vazio
  
  displayedColumns : string[] = ['nome', 'cpf', 'rg', 'dta_nascimento', 'telefone', 'endereco', 'editar', 'excluir']

  constructor(
      private funcionarioSrv : FuncionarioService,
      private snackBar : MatSnackBar
    ) { }

  async ngOnInit() {
    this.funcionarios = await this.funcionarioSrv.listar()
    console.log(this.funcionarios)
  }

  async excluir(id: string){
      if(confirm("Deseja realmente excluir este item?")){
        try{
            // 1) Efetuar a exclusão
            await this.funcionarioSrv.excluir(id)
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