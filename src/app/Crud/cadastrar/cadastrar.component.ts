import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { HttpClient } from '@angular/common/http';
import { NgxViacepService, Endereco, ErroCep } from '@brunoc/ngx-viacep';
import { CepService } from 'src/app/cep.service';

 
@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  
  constructor(private localstorage : LocalstorageService, private router: Router, private http: HttpClient, private viacep: NgxViacepService) { }

  public MASKS = MASKS;
  
  profileForm: FormGroup;

  ngOnInit() {
     this.profileForm = new FormGroup({
      nome : new FormControl(''),
      cpf : new FormControl(''),
      dataNascimento : new FormControl(''),
      sexo : new FormControl('')
    })
    let pessoa = this.localstorage.ListaPessoas();
    console.log(pessoa);
  }


 OnSubmit() {
      this.localstorage.AddPessoa(this.profileForm.value);
      this.router.navigate(['home']);
    }

   

  
};





  


