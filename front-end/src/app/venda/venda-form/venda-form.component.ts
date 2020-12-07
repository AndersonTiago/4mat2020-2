import { ProdutoService } from './../../produto/produto.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VendaService } from './../venda.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { FuncionarioService } from 'src/app/funcionario/funcionario.service';
 
@Component({
  selector: 'app-venda-form',
  templateUrl: './venda-form.component.html',
  styleUrls: ['./venda-form.component.scss']
})
export class VendaFormComponent implements OnInit {
 
  title : string = 'Nova venda'
 
  venda : any = {} // Objeto vazio, nome da entidade no SINGULAR

//   diasSemana : any = [
//       {val : 'dom' , descr: 'Domingo'},
//       {val : 'seg' , descr: 'Segunda-feira'},
//       {val : 'ter' , descr: 'Terça-feira'},
//       {val : 'qua' , descr: 'Quarta-feira'},
//       {val : 'qui' , descr: 'Quinta-feira'},
//       {val : 'sex' , descr: 'Sexta-feira'},
//       {val : 'sab' , descr: 'Sábado'}
//   ]
  
  // Variáveis para armazenar as listagens das entidades relacionadas
  produtos : any = [] // Nome no plural, vetor vazio
  clientes : any = []
  funcionarios : any = []

  constructor(
    private vendaSrv : VendaService,
    private produtoSrv : ProdutoService,
    private funcionarioSrv : FuncionarioService,
    private clienteSrv : ClienteService,
    private snackBar : MatSnackBar,
    private location : Location,
    private actRoute : ActivatedRoute
  ) { }
 
  async ngOnInit() {
    // Verificando se existe id na rota que trouxe ao formulário
    if(this.actRoute.snapshot.params['id']) {
      try {
        // 1) Trazer o registro do back-end para edição
        this.venda = await this.vendaSrv.obterUm(this.actRoute.snapshot.params['id'])
        // 2) Mudar o título da página
        this.title = 'Editando venda'
      }
      catch(erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível carregar os dados para edição.',
          'Que pena!', { duration: 5000 })
      }
    }

    // Carregar as listagens das entidades relacionadas
    try{
        this.produtos = await this.produtoSrv.listar()
        this.clientes = await this.clienteSrv.listar()
        this.funcionarios = await this.funcionarioSrv.listar()
        
        
    }catch(erro){
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível carregar todos os dados do formulário.',
          'Que pena!', { duration: 5000 })
    }
  }
 
  async salvar(form : NgForm) {
    try {
      if(form.valid) {
        // 1) Enviar os dados para o back-end para serem salvos
        if(this.venda._id){
            // _id existe, esse registro já foi salvo anteriormente no BD
            // e é caso de atualização
            await this.vendaSrv.atualizar(this.venda)
        }else{
            await this.vendaSrv.novo(this.venda)
        }
        // 2) Dar um feedback (mensagem) para o usuário
        this.snackBar.open('Dados salvos com sucesso.', 'Entendi',
          { duration: 5000 })
        // 3) Voltar para a tela de listagem
        this.location.back()
      }
    }
    catch(erro) {
      console.log(erro)
      this.snackBar.open('ERRO: não foi possível salvar os dados.', 'Que pena!',
        { duration: 5000 })
    }
  }
 
  voltar(form : NgForm) {
    let result = true
    // form.dirty = formulário "sujo", não salvo (via código)
    // form.touched = o conteúdo de algum campo foi alterado (via usuário)
    if(form.dirty && form.touched) {
      result = confirm('Há dados não salvos. Deseja realmente voltar?')
    }
    // Retorna à página anterior se resposta foi positiva ou se o formulário
    // estiver "limpo"
    if(result) this.location.back()
  }
 
}