import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CepService } from 'src/app/cep.service';
import { LocalstorageService } from '../localstorage.service';
import { EMPTY } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  constructor(private Http : HttpClient, private cepService : CepService, private storage : LocalstorageService, private actRoute : ActivatedRoute) { }

  pessoa;

  ngOnInit() {
    let id = this.actRoute.snapshot.params['id'];
    let pessoas = this.storage.ListaPessoas();
    this.pessoa = pessoas.find(p => p.id == id);
    console.log(this.pessoa);
  }

  Rota() {
    this.storage.ListaPessoas()
    .pipe(map((res: any) => res.data))
    
    
  }


}
