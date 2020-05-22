import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/Crud/localstorage.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pessoas;
  constructor(private storage : LocalstorageService) { }

  ngOnInit(): void {
    this.pessoas = this.storage.ListaPessoas()
    console.log(this.pessoas)
  }


  deletarPessoa(id) {
    if(window.confirm("Você tem certeza que quer excluir?"))
    {
    for(let i = 0; i < this.pessoas.length; i++)
    {
      if(this.pessoas[i].id == id) {
        this.pessoas.splice(i, 1)
      }
    }
    }

    this.storage.RemoverPessoa(id);
  }

}
