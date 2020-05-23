import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CepService } from 'src/app/cep.service';
import { LocalstorageService } from '../localstorage.service';
import { EMPTY } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'
import { Pessoa } from '../Pessoa';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  constructor(private Http : HttpClient, private cepService : CepService, private storage : LocalstorageService, private actRoute : ActivatedRoute) { }

  id : string;
  pessoas;
  pessoa;

  ngOnInit() {
    this.id = this.actRoute.snapshot.params['id'];
    this.pessoas = this.storage.listaPessoas();
    this.pessoa = this.pessoas.find(p => p.id == this.id);
    console.log(this.pessoa);
  }  

}
