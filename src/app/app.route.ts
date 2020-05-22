import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { CadastrarComponent } from './Crud/cadastrar/cadastrar.component';
import { EditarComponent } from './Crud/editar/editar.component';
import { DetalhesComponent } from './Crud/detalhes/detalhes.component';

export const route : Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home',  component: HomeComponent},
{path: 'cadastrar', component: CadastrarComponent},
{path: 'editar/:id', component: EditarComponent},
{path: 'detalhes/:id', component: DetalhesComponent}
]