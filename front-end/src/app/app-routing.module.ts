import {​​ NgModule }​​ from '@angular/core';

import {​​ Routes, RouterModule }​​ from '@angular/router';

import {​​ CursoListComponent }​​ from './curso/curso-list/curso-list.component';

import {​​ CursoFormComponent }​​ from './curso/curso-form/curso-form.component';
import { TurmaListComponent } from './turma/turma-list/turma-list.component';
import { TurmaFormComponent } from './turma/turma-form/turma-form.component';

import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';

import { FuncionarioListComponent } from './funcionario/funcionario-list/funcionario-list.component';
import { FuncionarioFormComponent } from './funcionario/funcionario-form/funcionario-form.component';

import { FornecedorListComponent } from './fornecedor/fornecedor-list/fornecedor-list.component';
import { FornecedorFormComponent } from './fornecedor/fornecedor-form/fornecedor-form.component';


const routes: Routes = [

    // Rotas no Angular NUNCA começam com barra "/"

    {​​path: 'curso', component: CursoListComponent}​​,
    {​​path: 'curso/novo', component: CursoFormComponent}​​,
    {​​path: 'curso/:id', component: CursoFormComponent}​​,

    {path: 'turma', component: TurmaListComponent},
    {path: 'turma/novo', component: TurmaFormComponent},
    {path: 'turma/:id', component: TurmaFormComponent},

    {path: 'cliente', component: ClienteListComponent},
    {path: 'cliente/novo',component: ClienteFormComponent},
    {path: 'cliente/:id',component: ClienteFormComponent},

    {path: 'funcionario', component: FuncionarioListComponent},
    {path: 'funcionario/novo',component: FuncionarioFormComponent},
    {path: 'funcionario/:id',component: FuncionarioFormComponent},

    {path: 'fornecedor', component: FornecedorListComponent},
    {path: 'fornecedor/novo',component: FornecedorFormComponent},
    {path: 'fornecedor/:id',component: FornecedorFormComponent}

];



@NgModule({​​

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

}​​)

export class AppRoutingModule {​​ }​​