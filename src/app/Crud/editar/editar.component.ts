import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalstorageService } from '../localstorage.service';
import { FormGroup, FormControl } from '@angular/forms';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {


  constructor(private actRoute : ActivatedRoute, private storage : LocalstorageService, private router : Router) { }

  
  pessoa;
  
  profileForm = new FormGroup({
    nome : new FormControl(''),
    cpf : new FormControl(''),
    dataNascimento : new FormControl(''),
    sexo : new FormControl('')
})

  ngOnInit(){
    let id = this.actRoute.snapshot.params['id'];
    let pessoas = this.storage.listaPessoas();
    this.pessoa = pessoas.find(p => p.id == id);
    this.profileForm.patchValue(this.pessoa);
  }

  OnSubmit() {
      this.storage.AtualizarPessoa(this.pessoa, this.profileForm.value)
      this.router.navigate(['home']);
    }
  }




