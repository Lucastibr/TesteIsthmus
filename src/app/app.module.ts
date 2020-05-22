import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxViacepModule } from '@brunoc/ngx-viacep';
import { NgBrazil } from 'ng-brazil' 
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { route } from './app.route';
import { HomeComponent } from './Home/home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CadastrarComponent } from './Crud/cadastrar/cadastrar.component';
import { EditarComponent } from './Crud/editar/editar.component';
import { FooterComponent } from './footer/footer/footer.component';
import { DetalhesComponent } from './Crud/detalhes/detalhes.component';
import { CpfPipe } from './cpf.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    EditarComponent,
    CadastrarComponent,
    FooterComponent,
    DetalhesComponent,
    CpfPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxViacepModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgBrazil,
    TextMaskModule,
    [RouterModule.forRoot(route, {useHash: false})]
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
