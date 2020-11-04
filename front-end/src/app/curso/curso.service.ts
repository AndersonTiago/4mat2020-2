import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {​​ environment }​​ from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private server = environment.apiServer
  
  constructor(private http: HttpClient) { }

  listar(){
      this.http.get(this.server + 'curso').toPromise()
  }
}
